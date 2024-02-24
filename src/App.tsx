import { ParallaxProvider } from "react-scroll-parallax";

import { Component } from "./component/Component";
import { Component1 } from "./component/Component1";

function App() {
  return (
    <>
      <ParallaxProvider>
        <div className=" w-full h-full ">
          <Component />
          <Component1 />
          <Component />
          <Component1 />
          <Component />
          <Component1 />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
