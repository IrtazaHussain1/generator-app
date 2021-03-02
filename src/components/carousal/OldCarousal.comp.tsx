import React from 'react'
import { Image} from "react-bootstrap";
import image from "../../assets/img/car-img.jpg";
import brain from "../../assets/img/brain.svg";
import edit from "../../assets/img/edit.svg";
import arrow_top from "../../assets/img/arrow-top.svg";
import arrow_down from "../../assets/img/svg/arrow-down.svg";
import paper from "../../assets/img/paper.svg";
import cln from "../../assets/img/cln.svg";
import arrow_left from "../../assets/img/arrow-left.svg";
import arrow_right from "../../assets/img/arrow-right.svg";

import {Link} from "react-router-dom";

interface InfoImage {
    username:string;
    image_link:string;
    idForCarousal:string;
    [key:string]:any;
}

function OldCarousal({username,image_link,idForCarousal,toggleFunc,setImageInfo}:InfoImage) {
    const crSlide = `#${idForCarousal}`
    return (
        <section className="nexus-item" style={{width:'100%'}}>
            <div className="carousel">
                <div
                style={{ width: "100% !important" }}
                id={idForCarousal}
                className="carousel slide demo"
                data-ride="carousel"
                onClick={()=>{
                    toggleFunc();
                    setImageInfo();
                }}
                >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <Image 
                        src={image_link}
                        width="100%"
                        className="img-fluid mycarousel"
                    />
                    </div>
                    
                    {/* <div id="a" className="gallerysliderdiv11">
                    <div className="div111111" style={{zIndex:100}}>
                        <ul className="gallerysliderul1 d-flex justify-content-between align-items-center px-2 pb-2">
                            <li className="gallerysliderli1">
                                <Image src={brain} className="img-fluid" alt="" />
                            </li>
                            <li className="gallerysliderli1">
                                <Image src={edit} className="img-fluid" alt="" />
                            </li>
                            <li className="gallerysliderli1">
                                <Image src={arrow_top} style={{width:'18px',height:'18px'}} className="img-fluid" alt="" />
                            </li>
                            <li className="gallerysliderli1">
                                <Image src={paper} className="img-fluid" alt="" />
                            </li>
                            <li className="gallerysliderli1">
                                <Image src={cln} className="img-fluid" alt="" />
                            </li>
                        </ul>
                    </div> */}
                    {/* </div> */}
                </div>
                {/* Left and right controls */}
                {/* <div className="carousel-buttons" id="b">
                    <a className="carousel-control-prev btt" href={crSlide} data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next btt" href={crSlide} data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    </a>
                </div> */}
                </div>
            </div>
        </section>
    )
}

export default OldCarousal
