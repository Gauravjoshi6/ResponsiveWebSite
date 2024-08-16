import NavBar from "./Components/NavBar";
import Main from "./Components/main";
import Custom from "./Components/Custom";
import HowItWork from "./Components/HowItWork/HowItWork";
import HowPart1 from "./Components/HowItWork/HowPart1";
import Video from "./Components/HowItWork/Video";
import Map from "./Components/Roadmap";
import Whatour from "./Components/Whatour";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container">
        {" "}
        <NavBar />{" "}
      </div>
      <Main />
      <Custom />
      {/* <div className='container'>    </div>  */}
      <div className="container">
        {" "}
        <HowPart1 />
      </div>
      <div className="container">
        {" "}
        <HowItWork />
      </div>
      <div className="container">
        {" "}
        <Video />
      </div>
      <div className="container">
        {" "}
        <Map />
      </div>
      <div className="container">
        {" "}
        <Whatour />
      </div>
    </>
  );
}

export default App;
