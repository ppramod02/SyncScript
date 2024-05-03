import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CodeMirror, { oneDark } from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export default function CodePaste() {
	const [ paste, setPaste ] = useState({
		paste_text: '',
		paste_format: 'javascript',
	});
	const { pasteKey } = useParams();
	const editorLangMap = {
    "cpp": cpp,
    "java": java,
    "javascript": javascript,
    "python": python,
  };

	useEffect(() => {
		const getPaste = async () => {
			const res = await fetch(`${import.meta.env.VITE_SOCKET_URL}/paste/${pasteKey}`);
			const data = await res.json();
			if(data.success) {
				setPaste(paste => data.paste);
				console.log(data.paste);
			} else {
				alert('the code you are looking for does not exist');
			}
		}

		getPaste();		
	}, []);

	return (
		<fieldset className="pb-2 flex font-poppins items-center text-primary flex-col w-full border-primary border-[1px] rounded-lg">
			<legend className="text-lg ml-2 px-2 font-extralight">Code</legend>
			<div className="px-2 w-[100%] resize-none focus:outline-none bg-transparent z-20 overflow-y-scroll">
					<CodeMirror
					minHeight="80vh"
					value={ paste.paste_text }
					extensions={[editorLangMap[paste.paste_format]()]}
					theme={ oneDark }
					/>
			</div>
		</fieldset>
	);
}
