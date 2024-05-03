import Bundle from "./components/Bundle";
import waves from "./assets/waves.png";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gradient1 from-70% to-gradient2 relative select-none overflow-y-hidden">
      <img draggable={false} src={waves} alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-[1%] z-[-10]" />
      <Bundle />
    </div>
  );
}

export default App;
