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
import Dropdown from 'react-bootstrap/Dropdown'

import {Link} from "react-router-dom";

interface InfoImage {
    username:string;
    image_link:string;
    idForCarousal:string;
    [propName:string]:any;
}

function Carousal({username,image_link,idForCarousal,image_data,setImageInfo}:InfoImage) {
    const crSlide = `#${idForCarousal}`;

    const handleDelete = (e:any) => {
        e.preventDefault();
        const confirmDel = window.confirm('Are You sure');
        if(confirmDel === true){
            const currentID = idForCarousal.split('demo')[1]
            var userToken = localStorage.getItem('user');
            // debugger;
            fetch(`https://app.ganexus.com/gallery/remove-image/${currentID}`,{
                method:"POST",
                headers:{
                    'authorization':'Token '+userToken,
                    'content-type':'application/json',
                },
                body:JSON.stringify({dataID:parseInt(currentID)})
            }).then(res=>res.json())
            .then(resJson => {
                if(resJson.error === undefined){
                    window.location.reload();
                }else{
                    window.alert(resJson.error);
                }
            }) 
        }else{

        }
    }
    return (
        
        <section className="nexus-item window-item-al" style={{width:'100%'}}>
            <div className="carousel">
                <div
                style={{ width: "100% !important" }}
                id={idForCarousal}
                className="carousel slide demo"
                data-ride="carousel"
                onClick={()=>setImageInfo(image_data)}
                >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <Image 
                        src={image_link}
                        width="100%"
                        className="img-fluid mycarousel"
                    />
                    </div>
                    {/* <div className="carousel-item">
                    <Image 
                        src={image_link}
                        width="100%"
                        className="img-fluid mycarousel"
                    />
                    </div> */}
                    <div id="a" className="gallerysliderdiv11">
                    <div className="div111111"  style={{zIndex:100}}>
                    <Dropdown className="drop-action-d">
                        <Dropdown.Toggle className="btn btn-outline-secondary search-btn-ali" id="dropdown-basic" >
                        <i className="fa fa-ellipsis-v"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="{}"><i className="fa  fa-eye"></i> preview</Dropdown.Item>
                            <Dropdown.Item href="{}"><i className="fa fa-user-plus"></i> Share</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="{}"><i className="fa fa-link"></i> Get link</Dropdown.Item>
                            <Dropdown.Item href="{}"><i className="fa fa-download"></i> Download</Dropdown.Item>
                            <Dropdown.Item onClick={(e)=>handleDelete(e)}><i className="fa fa-trash-o"></i> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        {/* <ul className="gallerysliderul1 d-flex justify-content-between align-items-center px-2 pb-2">
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
                        </ul> */}
                    </div>
                    </div>
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

export default Carousal
