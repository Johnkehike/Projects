import React, { useState } from "react";
import { ReactDOM } from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const Cat=({ title, id, filterItems, icon, index })=>{


    return(
        
        <div className="category-bottom" key={id}>
            <button  onClick={()=>filterItems(id)} style={{margin: '0.4rem'}}>{title}
            
                
              
                
            
            </button>

            {
                id===index+1?
                    <AiFillCaretLeft className="icon"/>
                :''
            }

        </div>
        
    )
}

export default Cat;