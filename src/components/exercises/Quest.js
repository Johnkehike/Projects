import React, { useState } from "react";
import { ReactDOM } from "react";
import { accord, easyStepsCx } from '../data';
import './accord.css';
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Question from "./Question";


const Quest=({ textDesc })=>{

    return(
        <>
            
                
                <p>{textDesc[0]}</p>
            
            
        
        </>
        
    )
        
        
        // <div className="second-screen">
        //         <p>{item}</p>
                
        //         <div className="helpful">
        //             <p>was this answer helpful</p>
        //             <div>
        //                 <button>yes</button> <button>no</button>
                    
        //             </div>
                

        //         </div>
        //  </div>
    
}
export default Quest;