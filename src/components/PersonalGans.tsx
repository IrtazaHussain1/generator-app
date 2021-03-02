import React, {useState,useEffect} from 'react';
import GallerySideBar from './PersonalGansSub/gallerySidebar.comp';
import GallerySection from "./PersonalGansSub/gallerySection.comp";
import {Modal,Button,ProgressBar} from "react-bootstrap";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import {SettingBox,GridBox} from "./StyledComponets/personal-gan.style";

const PersonalGans:React.FC = () => {
    const [showAdd,setShowAdd] = useState(false);
    const [imageFile,setImageFile] = useState(null);
    const [loader,setLoader] = useState(false);
    const [imageFilePath,setImageFilePath]:any = useState("");
    const [uploadPercentage,setUploadPercentage] = useState(0);
    const [imageList,setImageList] = useState([]);
    const [currentImage,setCurrentImage] = useState(null);
    const [galleryList,setGalleryList]:any[] = useState([]);
    const [updateList,setUpdateList] = useState(false);


    useEffect(()=>{
        var userToken = localStorage.getItem('user');
        if(userToken === null || userToken === "undefined"){
            window.location.replace('/auth');
        }
        fetch('https://app.ganexus.com/gallery/public-gallary/',{
            method:'GET',
            headers:{
                'authorization':'Token '+userToken,
            }
        }).then(res => res.json())
        .then(resJson => {
            
            const dataList:any[] = []
            if(resJson.error === undefined){
                resJson.data && resJson.data.map( (item:any) => {
                    dataList.push({
                        username:item.username,
                        idis:'demo'+item.pk,
                        image_path:'https://app.ganexus.com/media/'+item.photo,
                    })
                })
            } 
            setGalleryList(dataList);
        })
    },[updateList]);
    
    const handleSubmit = () =>{
        
        if (imageFile){
            var userToken = localStorage.getItem('user');
            const formdata = new FormData();
            // formdata.append('photo',imageFile);
            formdata.append('is_public',"true");
            const options  = {
                onUploadProgress: (progressEvent:any) => {
                    const {loaded,total} = progressEvent;
                    let percent =  Math.floor((loaded*100)/total);

                    if(percent < 95){
                        setUploadPercentage(percent);
                    }
                },
                headers : {
                    'Authorization':`Token ${localStorage.getItem('user')}`
                }

            }
            axios.post('https://app.ganexus.com/gallery/public-gallary/',formdata,options)
            .then(res=>{
                setUploadPercentage(100);
                setTimeout(()=>{
                    setUpdateList(!updateList);
                    setLoader(false)
                },2000);
            }).catch(e=>{
                console.log(e.message);
                setLoader(false)
            });
            
            
        } else{
            window.alert("File Is required");
        }
    }

    const handleShowAdd = () => {
        setShowAdd(!showAdd);
    }

    const handleFile= (evt:any)=>{
        setLoader(true);
        setImageFile(evt.target.files[0]);
        var file = evt.target.files[0];
        var reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onload = async function(e) {
            await setImageFilePath(reader.result);
            setTimeout(()=>{
                var uploadBtn  = document.getElementById('doc-submit');
                uploadBtn?.click();
            },2000)
        }
        
    }

    const handleImageClick = () => {
        var inputfile = document.getElementById('file-add');
        inputfile?.click();
    }

    const handleUpdateCurrent = (image:any) => {
        setCurrentImage(image);
    }

    return (
        <SettingBox>
            <GridBox>
                {
                loader?
                <div className="loader-div" style={{background:'transparent',position:'absolute',zIndex:999,width:'100%',marginTop:'-15em',flexDirection:'column'}}>
                    <CircularProgress color="secondary" style={{width:100,height:100}}/>
                    {uploadPercentage > 0?
                        <ProgressBar className="ProgressBar-al" now={uploadPercentage} label={`${uploadPercentage}%`} />
                    :""}
                </div>:""}
                <GallerySideBar 
                    imageClick={handleImageClick}
                    selectedImage={currentImage}
                    
                />
                <GallerySection
                    galleryList={galleryList}
                    updateCurrent = {handleUpdateCurrent}
                />    
            </GridBox>
            <input type="file" id="file-add" onChange={(e)=>handleFile(e)} className="d-none"/>
            <button className="doc-submit d-none" id="doc-submit" onClick={()=>handleSubmit()}>Submit</button>
        </SettingBox>
    )
}

export default PersonalGans;