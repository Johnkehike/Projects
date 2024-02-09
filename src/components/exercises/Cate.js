import React, { useState } from "react";
import { ReactDOM } from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const Cate=({ title, id, filterItems, icon, index })=>{


    return(
        <>
        
        
                <option key={id} value={id}>{title}</option>
                
        

      
        </>
    )
}

export default Cate;