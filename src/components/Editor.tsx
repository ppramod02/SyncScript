import { useState, useCallback } from "react";
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

// function App() {
//   const [value, setValue] = React.useState("console.log('hello world!');");
//   const onChange = React.useCallback((val, viewUpdate) => {
//     console.log('val:', val);
//     setValue(val);
//   }, []);
//   return <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />;
// }
// export default App;

export default function Editor({ editorConfig }) {
  const code = `
    function binarySearch(arr: number[], target: number): number {
      let left = 0;
      let right = arr.length - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
          return mid;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      
      
      return -1; // Element not found
    }`;

  const [value, setValue] = useState(code);

  const editorThemeMap = {
    "dracula": dracula,
    "github": githubLight,
    "onedark": oneDark,
    "nord": nord,
    "noctis-lilac": noctisLilac,
  };

  const editorLangMap = {
    cpp: cpp,
    java: java,
    javascript: javascript,
    python: python,
  };

  
  const onCodeChange = useCallback((val) => {
    setValue(val);
  }, []);
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
