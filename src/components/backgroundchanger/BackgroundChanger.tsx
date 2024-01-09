import { useState } from "react";
import Input from "./input/Input";


const BackgroundChanger = () => {

    const[bgColor, setBgColor] = useState("");  
    
  return (
    <>
      <div className={`flex flex-col justify-center items-center gap-5 m-auto h-screen`}
      style={{backgroundColor:`${bgColor}`}}
      >
        <Input setBgColor = {setBgColor}/>
      </div>
    </>
  );
};

export default BackgroundChanger;
