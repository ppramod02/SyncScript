import Button from "./Button";
import Dropdown from "./Dropdown";

export default function Toolbar({ setEditorConfig, copyToClipboard, executeCode, saveCodeAsPaste, roomId }) {

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ');
  // }

  return (
    <fieldset className="flex flex-row font-poppins  items-center text-primary h-full w-full border-primary border-[1px] rounded-lg  z-20 px-5 space-x-5">
      <legend className="text-lg px-2 font-extralight">Toolbar</legend>
      <Dropdown options={ ['javascript', 'cpp', 'python', 'java'] } setting={ 'lang' } setEditorConfig={ setEditorConfig } />      
      <Dropdown options={ [ 'nord', 'dracula', 'github', 'onedark', 'noctis-lila'] } setting={ 'theme' } setEditorConfig={ setEditorConfig } /> 

      <Button onClick={ saveCodeAsPaste } title="Share snippet" />
      <Button onClick={ executeCode } title="Run Code" />
      <Button title="Copy Room" onClick={ () => copyToClipboard(roomId, 'room-id') } />
    </fieldset>
  );
}
