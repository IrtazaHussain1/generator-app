import React, {useState,useEffect} from 'react';
import {ImageDiv} from "../StyledComponets/personal-gan.style";

import Carousal from "../carousal/carousal.comp";


interface childProps {
    [propName: string]: any;
}


const GallerySection:React.FC<childProps> = (props) => {

    return (
        <>
        
        <div className="row gallery-section">
            {
                props.galleryList.length > 0 ?
                props.galleryList.map((image:any)=>(
                    <ImageDiv className="col-sm-3 img-b" key={image.idis}>
                        <Carousal 
                            username={image.username} 
                            idForCarousal={image.idis} 
                            image_link={image.image_path} 
                            image_data ={image}
                            setImageInfo={props.updateCurrent} 
                        />                               
                     </ImageDiv>
                ))
                :
                <div className="no-file-div">
                <h3 className="text-center pt-3">
                    No Image Added yet.
                </h3>
                </div>
            }
                
        </div>
        </>
    )
}

export default GallerySection;