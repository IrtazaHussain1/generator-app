import React from 'react';


interface childProp {
    [propName: string]: any;
}


const GallerySideBar:React.FC<childProp> = (props) => {
    return (
        <>
        
        <div className="sidebar-gallery">
            <ul className="videoul1 d-flex justify-content-between">
                <li className="videoli1"><i className="fa fa-paper-plane videoicon1" /></li>
                <li className="videoli1"><i className="fa fa-bell videoicon1" /></li>
                <li className="videoli1"><i className="fa fa-cog videoicon1" /></li>
                <li className="videoli1" onClick={()=>props.imageClick()}><i className="fa fa-plus-circle videoicon1" /></li>
            </ul>
            
            <p className="videotext1" style={{fontSize:12}}>126 Files</p>
            <p className="videotext2">
                Credits: {props.credits} <span> </span> <i onClick={()=>props.showAddCreditModel()} className="fa fa-plus-circle videoicon1"></i>
            </p>
            <p className="videotext2">Downloads</p>
            <p className="videotext2">Purchased</p>
            <p className="videotext2">Shared with me</p>
            <p className="videotext2">Favorites</p>
            <p className="videotext2">Recent</p>
            <p className="videotext2">Deleted</p>
            {/* <hr className="hrline1" /> */}
            <p className="videotext2" onClick={()=>props.trainml()}>Train AI</p>
            <p className="videotext2">Published AI</p>
            <p className="videotext2">Sales</p>
            
            
        </div>
        </>
    );
}

export default GallerySideBar;