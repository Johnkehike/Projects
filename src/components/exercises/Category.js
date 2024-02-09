import React, { useState } from "react";
import { ReactDOM } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import Cat from "./Cat";
import Cate from "./Cate";

const Category=({  filterItems, section, icon, index })=>{
    
    return(
        <div className="category">
            <h4>FAQ</h4>
            <select onChange={(e) => filterItems(e.target.value)}>

            {
                section.map((item)=>{
                    //const { title, id }=item
                    return(
                        
                        <Cate {...item} filterItems={filterItems} icon={icon} index={index} />
                        
                    )


                    // return(
                    //     <div className="category-bottom" key={id}>
                    //     <button  onClick={()=>filterItems(id)} style={{margin: '0.4rem'}}>{title} 
                    //     </button>
                    //     {
                    //         icon?
                    //         <AiFillCaretLeft className="icon"/> :
                    //         ''
                    //     }
                    //     </div>
                        
                    // )



                    
                })
            }
            </select>



            {
                section.map((item)=>{
                    //const { title, id }=item
                    return(
                        
                        <Cat {...item} filterItems={filterItems} icon={icon} index={index} />
                        
                    )


                    // return(
                    //     <div className="category-bottom" key={id}>
                    //     <button  onClick={()=>filterItems(id)} style={{margin: '0.4rem'}}>{title} 
                    //     </button>
                    //     {
                    //         icon?
                    //         <AiFillCaretLeft className="icon"/> :
                    //         ''
                    //     }
                    //     </div>
                        
                    // )



                    
                })
            }



        </div>
        
    )
}

export default Category;