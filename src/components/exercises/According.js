import React, { useState } from "react";
import { ReactDOM } from "react";
import { accord, easyStepsCx } from '../data';
import './accord.css';
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Question from './Question'
import Quest from "./Quest";

const According = ({ id, title, questions, textDesc })=>{

    return(
        <>
            <>
            
                
                <div className="accordion">


                    {
                    questions?.map((oneItem, ind)=>{
                        return(
                            <Question oneItem={oneItem} textDesc={textDesc}  />
                        )

                //         return(
                //             <>
                //                 <button onClick={quest}>
                //     {
                //     question? <AiFillCaretDown/> : <AiFillCaretRight/>
                //     }
                // </button> 
                //                 <h4 key={ind}>{oneItem}</h4>
                //                 <p>
                //                     {
                //                         question?
                //                         (textDesc?.map((item, ind)=>{
                //                             return item
                //                         })) :
                //                         ''
                //                     }
                //                 </p>
                //             </>
                            
                //         )


                    })
                    }

                    {/* {
                                        
                                        
                                            question?
                                            (textDesc.map((item, index)=>{
                                                return (
                                                    <Quest item={item} index={index} />
                                                )
                                                (
                                                    <div>
                                                    <p>{item}</p>
                                                    <div>
                                                        <p>was this answer helpful</p>
                                                        <div>
                                                        <button>yes</button> <button>no</button>
                                                        </div>
                                                        
                    
                                                    </div>
                                                    </div>
                                                )
                                            })) :
                                            ''
                                        
                    } */}
                    
            </div>
                

            </>
        </>
    )
}

export default According;