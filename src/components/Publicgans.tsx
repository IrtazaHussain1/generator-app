import React, { useState, useEffect } from 'react'
import { SettingBoxOld, TopRow, RowImage, RowP, FolderImage, ImageDiv } from "./StyledComponets/gansStyles.style";
import { useSpring, animated } from "react-spring"; 

// icons
import leftIcon from "../assets/img/NewIcons/svg/arrow-n-left.svg"
import rightIcon from "../assets/img/NewIcons/svg/arrow-n-right.svg"
import carImage from "../assets/img/NewIcons/car-img.jpg";
import brainPng from "../assets/img/NewIcons/brain.png";
import papersvg from "../assets/img/NewIcons/paper.svg";
import editSvg from "../assets/img/NewIcons/edit.svg";
import clnsvg from "../assets/img/NewIcons/cln.svg";
import arrowTop from "../assets/img/NewIcons/arrow-top.png";

import OldCarousal from "./carousal/OldCarousal.comp";


const PublicGans: React.FC = () => {
    const [isFull, setIsFull] = useState(false);
    const [show, setShow] = useState(false);
    const [imagesList, setImageList]:any[] = useState([]);
    const [upadateData, setUpdateData] = useState(false);
    const [ImageFile, setImageFile] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [currentImage, setCurrentImage] = useState({
        idis:"demo",
        image_path:""
    });

    const fade = useSpring({
        opacity: toggle ? 1 : 0,
    })


    useEffect(() => {
        var userToken = localStorage.getItem('user');
        if (userToken === null || userToken === "undefined") {
            window.location.replace('/auth');
        }
        fetch('https://app.ganexus.com/gallery/public-gallary/', {
            method: 'GET',
            headers: {
                'authorization': 'Token ' + userToken,
            }
        }).then(res => res.json())
            .then(resJson => {
                //debugger;
                const dataList:any[] = []
                if (resJson.error === undefined) {
                    resJson.data.map((item:any) => {
                        dataList.push({
                            username: 'test',
                            idis: 'demo' + item.pk,
                            image_path: 'https://app.ganexus.com/media/' + item.photo,
                        })
                    })
                }
                setImageList(dataList);
            })
    }, [upadateData]);

    const handleChange = (evt:any) => {
        const value = evt.target.value;
        // setState(value);
    }
    const handleFile = (evt:any) => {
        setImageFile(evt.target.files[0]);
    }

    const handleSubmit = () => {
        if (ImageFile) {
            var userToken = localStorage.getItem('user');
            const formdata = new FormData();
            formdata.append('photo', "a");
            formdata.append('is_public', "true");
            fetch('https://app.ganexus.com/gallery/public-gallary/', {
                method: "POST",
                headers: {
                    'authorization': 'Token ' + userToken
                },
                body: formdata
            }).then(res => res.json())
                .then(resJson => {
                    if (resJson.error === undefined) {
                        setShow(false);
                        setUpdateData(!upadateData);
                    } else {
                        window.alert(resJson.error);
                    }
                })

        } else {
            window.alert("File Is required");
        }
    }

    const handleShowClick = () => {
        setShow(!show);
    }


    const handleDelete = () => {
        const confirmDel = window.confirm('Are You sure');
        if (confirmDel === true) {
            const currentID = currentImage.idis.split('demo')[1]
            var userToken = localStorage.getItem('user');
            fetch(`https://app.ganexus.com/gallery/remove-image/${currentID}`, {
                method: "POST",
                headers: {
                    'authorization': 'Token ' + userToken,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ dataID: parseInt(currentID[1]) })
            }).then(res => res.json())
                .then(resJson => {
                    if (resJson.error === undefined) {
                        setShow(false);
                        setToggle(false);
                        setUpdateData(!upadateData);
                    } else {
                        window.alert(resJson.error);
                    }
                })
        }
    }

    const imageClick = (image:any) => {
        setCurrentImage(image);
        setToggle(true);
        var element = document.getElementById('detail-card') as HTMLElement;
        element.classList.remove("d-none");
        element.classList.add("d-block");

        var element2 = document.getElementsByClassName('card-list-main')[0] as HTMLElement;
        element2.classList.add("show-3items");
    }
    const imageClose = () => {
        setCurrentImage({
            idis:"demo",
            image_path:"",
        });
        setToggle(false);
        var element = document.getElementById('detail-card') as HTMLElement;
        element.classList.remove("d-block");
        element.classList.add("d-none");
        var element2 = document.getElementsByClassName('card-list-main')[0] as HTMLElement;
        element2.classList.remove("show-3items");
       
    }
    return (
        <>
            <SettingBoxOld>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-0 d-flex flex-column flex-md-row align-content-start pt-1">
                            <div className="card-list-main   order-1 order-md-0 height-fix">
                                {/* <div className={toggle?"col-sm-8":"col-sm-12"}> */}
                                {
                                    imagesList.map( (image:any) => (
                                        //  <ImageDiv className="image-card-list-2" key={image.idis}>
                                        //     <OldCarousal username={image.username} idForCarousal={image.idis} image_link={image.image_path} toggleFunc={()=>setToggle(true)} setImageInfo={()=>setCurrentImage(image)} />                                
                                        // </ImageDiv>
                                        <>
                                            <div className="image-card-list-2" key={image?.idis} onClick={() => imageClick(image)}>
                                                <a href="#"> <img src={image?.image_path} className="img-fluid" /></a>
                                            </div>
                                        </>
                                    ))
                                }
                                {/* </div> */}
                            </div>



                            <div className='card-detail-2 d-none' id="detail-card">
                                {currentImage !== null ?
                                    <>
                                        {console.log(currentImage)}
                                        <div className="image-box-detail">
                                            <div className="img-dl-new d-flex align-items-center justify-content-between">
                                                <div className="user-al d-flex align-items-center mb-2">
                                                    <div className="img-box mr-2">
                                                        <img src={currentImage.image_path} className="img-fluid" alt="" />
                                                    </div>
                                                    <div className="title d-flex align-items-center">
                                                        <h2 className="mb-0">Lillys on the Mirror</h2>
                                                    </div>
                                                </div>

                                                <div className="image-action d-flex align-items-center justify-content-end">
                                                    <div className="img-arrows">
                                                        <img src={leftIcon} className="img-fluid" style={{ transform: 'scaleX(-1)' }} alt="" />
                                                        <img src={rightIcon} className="img-fluid ml-2" alt="" />
                                                    </div>
                                                    <div className="close-i ml-3">
                                                        <button onClick={() => imageClose()}><i className="fa fa-times" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={currentImage.image_path} className="img-fluid large-view-al" alt="" />
                                            <div className="d-flex justify-content-between action-brn-s p-2 px-3">
                                                <div className="views-list d-flex">
                                                    <div className="cot-1 mr-3">
                                                        <i className="fa fa-heart" aria-hidden="true"></i> 824
                            </div>
                                                    <div className="cot-1">
                                                        <i className="fa fa-comment" aria-hidden="true"></i> 824
                            </div>
                                                </div>
                                                <ul className="detail-icons-list d-flex justify-content-between align-items-center p-0 m-0">
                                                    <li className="gallerysliderli1 pl-3"><a href="/my-gans"><img src={brainPng} className="img-fluid" alt="" /></a></li>
                                                    <li className="gallerysliderli1 pl-3"><img src={editSvg} className="img-fluid" alt="" /></li>
                                                    <li className="gallerysliderli1 pl-3"><img src={arrowTop} className="img-fluid" alt="" /></li>
                                                    <li className="gallerysliderli1 pl-3"><img src={papersvg} className="img-fluid" alt="" /></li>
                                                    <li className="gallerysliderli1 pl-3"><img src={clnsvg} style={{ filter: 'brightness(1) invert(1)' }} className="img-fluid" alt="" /></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="card-list-main right-box-img-al  d-flex flex-wrap order-1 order-md-0">
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                            <div className="image-card-list-2">
                                                <a href="#"> <img src={carImage} className="img-fluid" alt="" /></a>
                                            </div>
                                        </div>
                                    </>
                                    : ""
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </SettingBoxOld>
        </>
    )
}

export default PublicGans;