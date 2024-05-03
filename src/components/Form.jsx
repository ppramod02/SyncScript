import { useState } from "react";


export default function Form({ openDialog, setRoomId }) {
  const [inputCode, setInput] = useState("");
  const [errorLabel, setErrorLabel] = useState("");

  const validateSpaceCode = () => {
    const regex = /^[a-z0-9]{6}$/;
    if(regex.test(inputCode)) {
      setRoomId(inputCode);
      setErrorLabel('');
      return true;
    } else {
      setErrorLabel('Enter a valid space code');
      return false;
    }
  }

  return (
    <form 
      onSubmit={ e => { 
        e.preventDefault(); 
        return (validateSpaceCode() && openDialog());
      }} 
      className="flex justify-center flex-col z-10 text-primary font-poppins items-center space-y-3">
      <p className="text-gray-400 tracking-wider text-sm md:text-base text-[0.8rem]">
        Share &#38; Collaborate Code{" "}
        <span className="text-primary">instantly</span> with
      </p>
      <p className="text-5xl md:text-6xl uppercase">SyncSpace</p>
      <div className="relative pb-2">
        <input
          className="h-8 md:h-10 w-[17.6rem] md:w-[22rem] p-4 md:p-5 rounded-lg border-primary border-2 border-opacity-40 bg-transparent text-sm md:text-base placeholder:text-slate-600 focus:outline-none focus:border-slate-500"
          type="text"
          placeholder="Enter space code"
          value={inputCode}
          onChange={(e) => setInput(e.target.value)}
          required={true}
          />
          {
            errorLabel.length !== 0 && <p className="absolute end-0 text-yellow-300 text-xs font-thin self-end">{ errorLabel }</p>
          }
      </div>
      <button className="h-8 md:h-10 w-[17.6rem] md:w-[22rem] rounded-lg border-transparent bg-primary focus:bg-opacity-70 text-sm md:text-base shadow-xl shadow-primary/20">
        <span className="text-black">Join Space</span>
      </button>

      <p className="text-lg md:text-xl opacity-60">OR</p>
      <button onClick={ e => { e.preventDefault(); openDialog(); }} className="h-8 md:h-10 w-[17.6rem] md:w-[22rem] rounded-lg border-primary border-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:bg-opacity-20 active:bg-opacity-30 hover:bg-primary hover:bg-opacity-10 text-sm md:text-base shadow-xl shadow-primary/5">
        <span className="text-primary opacity-80 ">Create Space</span>
      </button>

    </form>
  );
}
