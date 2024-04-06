import Member from "./Member";

export default function Panel() {
  return (
    <fieldset className="flex font-poppins text-primary items-start h-full w-full border-primary border-[1px] rounded-lg z-20">
      <legend className="text-lg ml-2 px-2 font-extralight">Space Members</legend>
      
      <div className="flex h-full flex-col sm:flex-row space-x-4 items-center p-4 ">
        <Member letter="C" />
        <Member letter="C" />
     
       </div>
    </fieldset>
  );
}

