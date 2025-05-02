import ReactDom from "react-dom/client";
import "./style.css";
import { useState } from "react";
import React from "react";





const MainElement = () => {
       
    const[name, setName] = useState("");
    const[message, setMessage] = useState("");
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-6 h-screen">
                <div>
                <p className="text-[28px]">Comment</p>
                </div>
            

                <div className="flex flex-col justify-center">
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="Name" className="border-[3px] border-green-300/96" onChange={(e)=>{setName(e.target.value) }} />
                </div>

                <div className="flex flex-col justify-center">
                    <label htmlFor="Comment">Comment</label>
                    <textarea name="" id="Comment" className="border-[3px] border-green-300/96" onChange={(e)=>{setMessage(e.target.value) }}></textarea>

                </div>


            <button className="bg-green-400 py-2 px-6 rounded-xl">Submit</button>

        <p className=" border px-6 py-2">Name: {name}</p>
        <p className=" border px-6 py-2">Message: {message}</p>
            </div>
           
    
        </>
    )

}


const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<MainElement />)
