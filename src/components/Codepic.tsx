import codepic from "./../assets/codepic.png"

export default function Codepic() {
  return (
    <div className="sm:w-[50%] w-[100%]">
      <img draggable={false} className="mix-blend-screen" src={codepic} alt="" />
    </div>
  )
}
