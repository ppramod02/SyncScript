import Member from "./Member";

export default function Panel({ members, username }) {
  return (
    <fieldset className="overflow-y-scroll flex font-poppins text-primary items-start h-full w-full border-primary border-[1px] rounded-lg z-20">
      <legend className="text-lg ml-2 px-2 font-extralight">Space Members</legend>
      
      <div className="w-full p-4">
        {
          members && members.map((member, id) => {
            return <Member key={id} username={ member.username } currUser={ member.username === username } />
          })
        }
       </div>
    </fieldset>
  );
}

