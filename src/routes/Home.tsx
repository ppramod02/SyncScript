import Codepic from "../components/Codepic";
import Form from "../components/Form";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();
  const [ showModal, setShowModal ] = useState(false);
  const [username, setUsername] = useState("");

  // const spaceState = useSelector(state => state.space);

  const openDialog = () => {
    setShowModal( true );
  }

  const closeDialog = () => {
    console.log(username);
    setShowModal( false );
  }

  const validate = () => {
    const regex = /^[a-zA-Z0-9]+$/;
    if(regex.test(username)) {
      setShowModal( false );
      navigate('/space');
    }
    
  }

  return (
    <div className="h-[80%] flex justify-evenly sm:flex-row flex-col items-center space-y-4">
      <Codepic/>
      <Form openDialog={ openDialog }/>

      {
        showModal && (
          <dialog open style={{ boxShadow: '0 0 50px 400px rgba(0 0 0 / 0.3)' }} className='z-50 font-poppins flex flex-col gap-4 bg-[#0b1521] text-primary rounded-md p-16 absolute top-[50%] translate-y-[-50%]'>
            <div className='flex items-center justify-between gap-2'>
              <h2 className='text-xl font-semibold'>Create a username</h2>
              <button onClick={ closeDialog } className="rounded-lg border-transparent font-bold text-primary/25">
                <IoCloseCircle fontSize='1.8rem' />
              </button>
            </div>
            <form method="dialog">
              <label className="text-xs">alpha-numeric only</label>
              <input placeholder='john doe' onChange={ e => setUsername(e.target.value) } className="w-[100%] py-2 px-4 rounded-lg border-primary border-2 bg-transparent text-sm placeholder:text-slate-600 focus:outline-none focus:border-slate-500" /> <br />
              <button onClick={ validate } className="float-right mt-2 py-2 px-6 rounded-lg border-transparent bg-primary font-bold text-black/80 shadow-xl shadow-primary/20">Go to Space</button>
            </form>
          </dialog>
        )
      }
    </div>
  )
}
