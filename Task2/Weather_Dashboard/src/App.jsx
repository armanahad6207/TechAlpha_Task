import TopBtn from "./component/TopBtn";
import InputBox from "./component/inputBox";

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-5 py-3 px-32 bg-gradient-to-br from-slate-900 to-slate-700 min-h-12">
        <TopBtn />
        <InputBox />
      </div>
    </>
  );
}

export default App;
