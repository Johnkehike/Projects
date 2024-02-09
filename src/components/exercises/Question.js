import React, { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react";
import { accord, easyStepsCx } from '../data';
import './accord.css';
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Quest from "./Quest";


const Question=({ oneItem, textDesc, icon })=>{
const item2 = textDesc;
console.log(textDesc[0]);

const [ question, setQuestion ] = useState(false);
//const  linkContainer = useRef(null);
//const linkRef = useRef(null);

// useEffect(()=>{
    
//     const linksHeight = linkRef.current.getBoundingClientRect().height;
//     if(question){
//         linkContainer.current.style.height = `${linksHeight}px`;
//     }else{
//         linkContainer.current.style.height = '0px';
//     }
// },[question]);

const quest=()=>{
    setQuestion(!question);
}
   if(question){
    return(
    <div className="accordion-section-top">

        <div className="ast-div1">
            <button onClick={quest} className="btn-icon" ><AiFillCaretDown className="aiIcon"/></button>
            <h4 className="accordion-item">{oneItem}</h4>
        </div>

        <div className="accordion-bottom" >
            <div className="ab-div1" >
                <Quest textDesc={textDesc} question={question} />
            </div>
            <div className="helpful">
                <p>Was this answer helpful?</p>
                <div><button className="helpful-btn">yes</button><button className="helpful-btn" >no</button></div>
            </div>
        </div>

    </div>
    )

   }
   return(
    <div className="accordion-section">
        
            <button onClick={quest} className="btn-icon"><AiFillCaretRight className="aiIcon"/></button>
            <h4 className="accordion-item">{oneItem}</h4>
        
 
    </div>
   )
    

}

export default Question;

/**
 * return(
        <>
            <div className="accordion-section">
                <button onClick={quest}>
                {
                    question? <AiFillCaretDown className="aiIcon"/>:<AiFillCaretRight className="aiIcon"/>
                }
                </button>
                <h4>{oneItem}</h4>
                {
                    question?
                    (<Quest textDesc={textDesc} question={question} />) :
                    ''
                }
                {/* {question?
                <p>{textDesc[0]}</p>:
                ''} }*/
                
               
                    /* {<div>
                        {textDesc.map((item)=>{
                            console.log(item)
                            
                            
                            
                                return(
                                    <></>
                                )
                            
                            
                            
                            (
                               
                                <Quest item={item}  />
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



                        }) }
                        
                </div>
                ):
                //''
                } }*/
                
                
            
        
                
                    
                /* { <div >
                className={icon? 'page' : 'pages'}
                    <p>
                        {
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
                        }
                    </p>
                </div> }  */