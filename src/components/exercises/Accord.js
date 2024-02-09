import React, { useState } from "react";
import { ReactDOM } from "react";
import { accord } from '../data';
import './accord.css';
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import According from './According';
import Category from "./Category";

let newArr = accord.map((item)=>item.title)
console.log(newArr)

const Accord=()=>{

const [ index, setIndex ] = useState(0);
const [ item, setItem ] = useState(accord[index]);
const [ section, setSection ] = useState(accord);
const [ icon, setIcon ] = useState(true);
const [ string, setString ] = useState('');


const filterItems=(id)=>{
    //const newItems = accord.filter((item)=>item.title===title);
    
    
    
    let newIndex = id-1;
    setIndex(newIndex);
    setItem(accord[newIndex]);
    setIcon(true)
    
}
const handleString=()=>{
    console.log('hello')
}
//let myItem=item[index];
//let myItem2 = accord[1].questions;
//console.log(myItem2)
    return(
        <section>
            <div className="form">
                <form onSubmit={e => e.preventDefault()} >
                    <input placeholder="how can we help you?" 
                    value={string}
                    onChange={handleString}/>
                </form>
            </div>

            <div className="section-two">
                <>
                    {/**ections */}
                    {
                        <Category section={section} filterItems={filterItems} icon={icon} index={index}  />
                    }
                </>
                <>
                    <According item={item} {...item} />
                    {/* <header>
                        <button ></button>
                        {
                                myItem.questions.map((oneItem, index)=>{
                                    return (
                                        <h4 key={index}>{oneItem}</h4>
                                    )
                                })
                            }
                    </header> */}
                    
                        {
                         //</div>   item.map((oneItem)=>{
                           //     return(
                             //           <According key={oneItem.id} {...oneItem}/>
                              //  )
                                // const { id, title, subtitle, textDesc } = oneItem;
                                
                                // return(
                                    
                                //         <header key={id}>
                                //             <button onClick={quest} >{
                                //                 question? <AiFillCaretDown/> : <AiFillCaretRight/>
                                //             }</button> <h4>{subtitle}</h4>
                                //             <p>{
                                //                 question? textDesc : ''
                                //                 }</p>
                                //         </header>
                                    
                                // )
                            //})
                        }
                        
                    
                </>
            </div>
        </section>
    )
}

export default Accord;