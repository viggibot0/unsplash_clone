import React, {useState} from "react";
import "./Editorial.css";
import { AiFillHeart,AiOutlinePlus} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';


const ImageLoop = ({data}) => {

    const popup = () =>{
        console.log("working");
        console.log(e.target);
    }
    
    const [imgHover, setHover] = useState(false);
    
    return(
        <React.Fragment>
            <div className="image-column">
                {data.map((val) => (
                        <div className="dis">
                            <div className="image-inner-container" key={val.id}>
                            <div className="img-inner-hover">
                                <div className="inner-img-top" style={{display: `${ imgHover ? block : none}` }}>
                                    <button onClick={popup}><AiFillHeart size={20} /></button>
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