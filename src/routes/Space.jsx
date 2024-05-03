import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Editor from "../components/Editor";
import OutputBox from "../components/OutputBox";
import Panel from "../components/Panel";
import Toolbar from "../components/Toolbar";
import Audio from "../components/Audio";
import { initSocket } from "../../socket.js";
import { setMember, removeMember } from "../features/space/spaceSlice.js";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function Space() {
  const [ editorConfig, setEditorConfig ] = useState({
    theme: 'nord',
    lang: 'javascript',
  });
  const [ codeOutput, setCodeOutput ] = useState({
    output: '',
  });

  const compilerMap = {
    'python': 'python3',
    'cpp': 'cpp',
    'java': 'java',
    'javascript': 'nodejs',
  }
  const { roomId } = useParams();
  const socketRef = useRef(null);
  const user = useSelector(state => state.user);
  const space = useSelector(state => state.space);
  // const pasteClient = new PasteClient(import.meta.env.VITE_PASTEBIN_API_KEY);

  const dispatch = useDispatch();

  const copyToClipboard = async (id, text) => {
    await navigator.clipboard.writeText(id);
    toast(`📋 ${ text } copied successfully!`)
  }

  const executeCode = async () => {
    var code = space.code;
    var language = compilerMap[editorConfig.lang];
    if(language === 'javascript') language = 'nodejs';
    const url = 'https://online-code-compiler.p.rapidapi.com/v1/';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.VITE_COMPILER_API_KEY,
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
      },
      body: JSON.stringify({
        language,
        version: 'latest',
        code,
        input: null
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setCodeOutput(result);
    } catch (error) {
      console.error(error);
    }
  }

  const saveCodeAsPaste = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SOCKET_URL}/paste`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: space.code,
          format: editorConfig.lang,
        }),
      });
      const { url } = await res.json();

      const newUrl = `localhost:5173/#/code/${ url.substring(21) }`;
      copyToClipboard(newUrl, 'code-url');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function init() {
      try {
        console.log('Initializing socket...');
        socketRef.current = await initSocket();

        socketRef.current.emit("join", {
          roomId, 
          username: user.username,
        });
        
        socketRef.current.on("joined", ({ clients, socketId, username }) => {
          dispatch(setMember({ clients }));
          if(username !== user.username) {
            toast(`🚀 ${username} joined the space`);
          }
        });

        socketRef.current.on('disconnected', ({ username, socketId }) => {
          toast(`👋 ${username} left the space`);
          dispatch(removeMember({ username }));
        });

      } catch (error) {
        console.error('Error initializing socket:', error);
      }
    }

    init();
    
    return () => {
      if(socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="main flex flex-col h-full w-full space-y-3">
      <div className="top space-x-7 flex w-full h-[75%]">
        <div className="editor w-[100%]">
        <Editor editorConfig={ editorConfig } socketRef={ socketRef } roomId={ roomId } />
        </div>
        <div className="topleft gap-4 flex flex-col w-[30%] h-[100%]">
          <div className="panel h-[40%]">
            <Panel members={ space.members } username={ user.username } />
          </div>
          <div className="output h-[60%]">
            <OutputBox result={ codeOutput } />
          </div>
        </div>
      </div>
      <div className="bottom flex space-x-7">
        <div className="toolbar w-[100%]">
        <Toolbar setEditorConfig={ setEditorConfig } copyToClipboard={ copyToClipboard } executeCode={ executeCode } saveCodeAsPaste={ saveCodeAsPaste } roomId={ roomId } />
        </div>
        <div className="audio w-[30%]">
          <Audio />
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}
