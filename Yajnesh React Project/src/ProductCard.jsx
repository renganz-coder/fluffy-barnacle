import ReactDom from "react-dom/client";
import "./style.css";
import { useState } from "react";


const ProductCard = ()=>{
    return (
        <>
       
        <div className="mx-auto h-screen w-screen">
        <div className="w-[90%] h-[100%] mx-auto p-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-black space-x-4 ">
            {/* \\product Card */}
            <div className="h-[600px] w-[400px] bg-white gap-y-4 rounded-lg p-2">
            <img src="https://ik.imagekit.io/yajnesh/react/mbp14-spaceblack-select-202410.jpg" alt="Unavailable" 
                className=" w-[100%] h-[60%] object-cover "  />
                <br />
                <div className="flex flex-col items-start justify-center gap-4"> 
                
                <p className="pl-2">
                Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 10-core GPU, 16GB Unified Memory, 512GB) - Midnight
                </p>
                 {/* price */}
                 <div className="pl-5">
                 <p className="text-[28px]">
                ₹2,99,990
                </p>

                <p className="text-[12px]">M.R.P: ₹3,19,900 (6% off)
                </p>
                <p className="text-[12px]">Save extra with No Cost EMISave extra with No Cost EMI</p>
                <p className="py-2">
                        
                        Service: Device Setup
                                            </p>
                 </div>
                </div>
            </div>
            {/* product card end */}
            {/* \\product Card */}
            <div className="h-[600px] w-[400px] bg-white gap-y-4 rounded-lg p-2">
            <img src="https://ik.imagekit.io/yajnesh/react/mbp14-spaceblack-select-202410.jpg" alt="Unavailable" 
                className=" w-[100%] h-[60%] object-cover "  />
                <br />
                <div className="flex flex-col items-start justify-center gap-4"> 
                
                <p className="pl-2">
                Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 10-core GPU, 16GB Unified Memory, 512GB) - Midnight
                </p>
                 {/* price */}
                 <div className="pl-5">
                 <p className="text-[28px]">
                ₹2,99,990
                </p>

                <p className="text-[12px]">M.R.P: ₹3,19,900 (6% off)
                </p>
                <p className="text-[12px]">Save extra with No Cost EMISave extra with No Cost EMI</p>
                <p className="py-2">
                        
                        Service: Device Setup
                                            </p>
                 </div>
                </div>
            </div>
            {/* product card end */}
            {/* \\product Card */}
            <div className="h-[600px] w-[400px] bg-white gap-y-4 rounded-lg p-2">
            <img src="https://ik.imagekit.io/yajnesh/react/mbp14-spaceblack-select-202410.jpg" alt="Unavailable" 
                className=" w-[100%] h-[60%] object-cover "  />
                <br />
                <div className="flex flex-col items-start justify-center gap-4"> 
                
                <p className="pl-2">
                Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 10-core GPU, 16GB Unified Memory, 512GB) - Midnight
                </p>
                 {/* price */}
                 <div className="pl-5">
                 <p className="text-[28px]">
                ₹2,99,990
                </p>

                <p className="text-[12px]">M.R.P: ₹3,19,900 (6% off)
                </p>
                <p className="text-[12px]">Save extra with No Cost EMISave extra with No Cost EMI</p>
                <p className="py-2">
                        
                        Service: Device Setup
                                            </p>
                 </div>
                </div>
            </div>
            {/* product card end */}
            {/* \\product Card */}
            <div className="h-[600px] w-[400px] bg-white gap-y-4 rounded-lg p-2 ">
            <img src="https://ik.imagekit.io/yajnesh/react/mbp14-spaceblack-select-202410.jpg" alt="Unavailable" 
                className=" w-[100%] h-[60%] object-cover "  />
                <br />
                <div className="flex flex-col items-start justify-center gap-4"> 
                
                <p className="pl-2">
                Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 10-core GPU, 16GB Unified Memory, 512GB) - Midnight
                </p>
                 {/* price */}
                 <div className="pl-5">
                 <p className="text-[28px]">
                ₹2,99,990
                </p>

                <p className="text-[12px]">M.R.P: ₹3,19,900 (6% off)
                </p>
                <p className="text-[12px]">Save extra with No Cost EMISave extra with No Cost EMI</p>
                <p className="py-2">
                        
                        Service: Device Setup
                                            </p>
                 </div>
                </div>
            </div>
            {/* product card end */}

        
        
        </div>
        </div>
        </>

    )
}
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<ProductCard />)
