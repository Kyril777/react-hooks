import React,{useState, useEffect} from "react";
const Clicker = () => {
    const [click,setClick]=useState(0);
    useEffect(() => {
        document.title=`Number of clicks: ${click}`
    },[]);
    return (
        <div>
            <button onClick={()=>setClick(click+1)}>Click {click}</button>
         </div>
    )
}
export default Clicker;
