import ContextArea from "./components/contextarea";
import Widget1 from "./components/widget1";
import Widget2 from "./components/widget2";
import Line from "./components/line";

function App() {
  return (
  <div className='m-20 pl-6 pr-20 pt-20 pb-16 rounded-3xl bg-gradient-to-b from-blue-gray to-dark-blue-gray flex flex-row gap-10'>
      <ContextArea />
      <div className="w-2/4 flex flex-col">
        <Widget1 />
        <Line />
        <Widget2 />
        <Line />
      </div>
    </div>
  );
}

export default App;
