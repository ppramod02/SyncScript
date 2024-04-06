import Button from "./Button";
export default function Audio() {
  
  return (
    <fieldset className="flex flex-row font-poppins items-center text-primary h-full w-full border-primary border-[1px] rounded-lg z-20 px-5 space-x-5">
      <legend className="text-lg px-2 font-extralight">Audio</legend>
      <Button title="Mute"/>
    </fieldset>
  );
}
