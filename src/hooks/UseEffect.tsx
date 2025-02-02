import React, { useEffect, useState } from "react";

// useEffect (lifecycle Methods) : initialization  -> Mounting -> Update (based on dependency state / props) -> Unmount
const UseEffect = () => {
  // state for triggering the useEffect update component lifecycle
//   if no [] is passed means useEffect will be called on each time a state and props changes  
  const [state, setState] = useState(0);
  useEffect(() => {
    //  print when component mount
    console.log("component initialization");
    //  print when component unmount
    return () => {
      console.log("component unmount");
    };
  }, [state]);
  //   function that change state that later trigger the component update
  const handleUseEffectTrigger = () => {
    setState((pre) => pre + 1);
    //  print when component updated
    console.log("component updated");
  };
  return (
    <div>
      UseEffect : {state}
      <button onClick={handleUseEffectTrigger}>Trigger UseEffect</button>
    </div>
  );
};

export default UseEffect;
