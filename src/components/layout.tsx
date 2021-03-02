import React, {useState, useEffect} from 'react'
import WindowLayout from "./WindowLayout"
import SignIn from "./sign-in/sign-in.comp"
import SearchGans from "./SearchGans/searchgans.comp"


// loader
import CircularProgress from '@material-ui/core/CircularProgress';

const BaseLayout:React.FC = (props) => {
    const [loader,setLoader] = useState(true);
    const [showPage,setShowPage] = useState("");
    const [authenicated,setAuthenicated] = useState(false);
    const [reload,setReload] = useState(false);


    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(user){
            setAuthenicated(true)
            setShowPage('Home');
        }else {
            setAuthenicated(false)
            setShowPage('SignIn')
        }
        setLoader(false);
    },[reload])
    return (
        <>
        {
            loader?
            <div className="loader-div">
            <CircularProgress color="secondary" style={{width:50,height:50}}/>
            </div>
            :
            <WindowLayout authenicated={authenicated} reloadPage={()=>setReload(!reload)}>
                {showPage === "SignIn"?
                <SignIn />:<SearchGans/>}
            </WindowLayout>
        }
        </>
    )
}

export default BaseLayout;