import React from "react";
import "./box.css"; 
import {AiOutlineClose} from "react-icons/ai";
import { AiFillHeart,AiOutlinePlus, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';

const BoxModel = ({Author, ImageUrl, isTrue, closePopup}) => {

    return (
        <div className="modal" style={isTrue ? {display:"block"} : {display:"none"}}>
            
            <AiOutlineClose onClick={() => closePopup(false)} size={40}/>
            <AiOutlineLeft/>
            <div className="modalContent">
                
                <div className="topModel">
                    <p>{Author}</p>
                    <div className="btnModel">
                        <div className="innerBtnModel">
                            <button><AiFillHeart/></button>
                            <button><AiOutlinePlus/></button>
                            <button><FiDownload/>Download</button>
                        </div>
                    </div>
                </div>
                <div className="centerModel">
                    <img src={ImageUrl} alt={Author} width="300px"/>
                </div>      
            </div>
            <AiOutlineRight/>
        </div>
    )
}

export default BoxModel;



