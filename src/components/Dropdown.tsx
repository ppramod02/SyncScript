// import { Key } from "react";

export default function Dropdown({ options, setting, setEditorConfig }) {

    const onUpdateChange = (option) => {
        setEditorConfig(prev => ({ ...prev, [setting]: option }) );
    }

    return (
    <form>
        <select onChange={ e => onUpdateChange(e.target.value) } className='px-2 py-1 bg-primary bg-opacity-20 border-[1px] border-primary rounded-xl focus:bg-opacity-100 focus:bg-[#0b1521]' name="cars" id="cars">
            {
                options.map((option, key) => {
                    return (
                        <option className='' value={ option } key={ key }>
                            { option }
                        </option>
                    )
                })
            }
        </select>
    </form>
    );
  }
  
  
