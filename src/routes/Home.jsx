import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Codepic from "../components/Codepic";
import Form from "../components/Form";
import { IoCloseCircle } from "react-icons/io5";
import { setCode } from "../features/space/spaceSlice";
import { setUser } from "../features/user/userSlice";

export default function Home() {
  const navigate = useNavigate();
  const [ showModal, setShowModal ] = useState(false);
  const [ username, setUsername ] = useState("");
  const [ roomId, setRoomId ] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    function generateRoomId() {
      const id = Math.random().toString(36).substring(2, 8);
      if(roomId.length === 0) setRoomId(id); 
    }
    generateRoomId();
  }, []);

  const openDialog = () => {
    setShowModal( true );
  }

  const closeDialog = () => {
    setShowModal( false );
  }

  const validate = (e) => {
    e.preventDefault();
    const regexUser = /^[a-zA-Z0-9]+$/;
    const regexRoom = /^[a-z0-9]{6}$/;
    if(regexUser.test(username) && regexRoom.test(roomId)) {
      setShowModal( false );
      dispatch(setUser({
        username,
        socketId: null,
      }));
      
      navigate(`/space/${roomId}`);
    } else {

    }
  }

  return (
    <div className="h-[80%] flex justify-evenly sm:flex-row flex-col items-center space-y-4">
      <Codepic/>
      <Form openDialog={ openDialog } setRoomId={ setRoomId } />

      {
        showModal && (
          <dialog open style={{ boxShadow: '0 0 50px 400px rgba(0 0 0 / 0.3)' }} className='z-50 font-poppins flex flex-col gap-4 bg-[#0b1521] text-primary rounded-md p-16 absolute top-[50%] translate-y-[-50%]'>
            <div className='flex items-center justify-between gap-2'>
              <h2 className='text-xl font-semibold'>Create a username</h2>
              <button onClick={ closeDialog } className="rounded-lg border-transparent font-bold text-primary/25">
                <IoCloseCircle fontSize='1.8rem' />
              </button>
            </div>
            <form>
              <label className="text-xs">alpha-numeric only</label>
              <input autoFocus={true} placeholder='john doe' onChange={ e => setUsername(e.target.value) } className="w-[100%] py-2 px-4 rounded-lg border-primary border-2 bg-transparent text-sm placeholder:text-slate-600 focus:outline-none focus:border-slate-500" /> <br />
              <button onClick={ validate } className="float-right mt-2 py-2 px-6 rounded-lg border-transparent bg-primary font-bold text-black/80 shadow-xl shadow-primary/20">Go to Space</button>
            </form>
          </dialog>
        )
      }
    </div>
  )
}
