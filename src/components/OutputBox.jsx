export default function OutputBox({ result }) {
  const lines = result.output?.split('\n') ?? "";
  const hasError = result.error ?? false;

  return (
    <fieldset className={`overflow-y-scroll flex flex-col font-poppins h-full w-full border-primary border-[1px] rounded-lg ${ hasError ? 'bg-red-400/15' : 'bg-primary/15' }`}>
      <legend className="text-lg ml-2 px-2 text-primary font-extralight">Output Preview</legend>
      
      <div className={`mt-4 mb-2 px-2 mx-2 font-extralight font-mono rounded-md ${ hasError ? 'text-red-600' : 'text-primary'}`}>
        {
          lines && lines.map((line, id) => {
            return <p key={id}>{ line }</p>
          })
        }
      </div>
    </fieldset>
  );
}
