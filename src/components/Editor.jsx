import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setCode } from "../features/space/spaceSlice";
import CodeMirror from "@uiw/react-codemirror";

import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubLight } from "@uiw/codemirror-theme-github";
import { nord } from "@uiw/codemirror-theme-nord";
import { noctisLilac } from "@uiw/codemirror-theme-noctis-lilac";
import { oneDark } from "@uiw/react-codemirror";

export default function Editor({ editorConfig, socketRef, roomId }) {
  const space = useSelector(state => state.space);
  const code = space.code;
  const dispatch = useDispatch();
  const [value, setValue] = useState(code);

  const editorThemeMap = {
    "dracula": dracula,
    "github": githubLight,
    "onedark": oneDark,
    "nord": nord,
    "noctis-lilac": noctisLilac,
  };

  const editorLangMap = {
    "cpp": cpp,
    "java": java,
    "javascript": javascript,
    "python": python,
  };

  
  const onCodeChange = useCallback((val) => {
    setValue(val);
    dispatch(setCode({ code: val }));
    socketRef.current.emit("code-change", {
      roomId,
      code: val,
    });
  }, []);

  useEffect(() => {
    if(socketRef.current) socketRef.current.on("code-sync", ({ code }) => {
      setValue(code);
      dispatch(setCode({ code }));
    });

  }, [socketRef.current]);

  return (
    <fieldset className="pb-2 flex font-poppins items-center text-primary flex-col h-full w-full border-primary border-[1px] rounded-lg">
      <legend className="text-lg ml-2 px-2 font-extralight">Editor</legend>
      <div className="px-2 w-[100%] resize-none focus:outline-none bg-transparent z-20 overflow-y-scroll">
        <CodeMirror
          minHeight="100vh"
          theme={editorThemeMap[editorConfig.theme]}
          value={value}
          extensions={[editorLangMap[editorConfig.lang]()]}
          onChange={onCodeChange}
        />
      </div>
    </fieldset>
  );
}
