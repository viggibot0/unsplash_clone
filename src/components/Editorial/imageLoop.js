import React, {useContext} from "react";
import "./Editorial.css";
import { AiFillHeart,AiOutlinePlus} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';
import {Fun} from "../../App";


const ImageLoop = ({data}) => {

    const value = useContext(Fun);
    // console.log('Conext'+val);

    return(
        <React.Fragment>
            <div className="image-column">
                {data.map((val) => (
                        <div className="dis" onClick={(e) => value(e)} key={val.id}>
                            <div className="image-inner-container">
                            <div className="img-inner-hover" id="hide">
                               
                                <div className="inner-img-top">
                                    <button><AiFillHeart size={20} /></button>
                                    <button><AiOutlinePlus size={20} /></button>
                                </div>
                                <div className="inner-img-bottom">
                                    <div className="bottom-img">
                                        <div className="img-Author">{val.author}</div>
                                        <button className="bottom-btn"><FiDownload size={20} /></button>
                                    </div>
                                </div>
                            </div>              
                            <img src={val.download_url} alt={val.author} width="390px"/>
                        </div>
                    </div>
                ))}
            </div>    
        </React.Fragment>
    )
}



export default ImageLoop;