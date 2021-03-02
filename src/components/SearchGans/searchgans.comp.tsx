import React, { useState } from "react";

import { SigninBoxNew,  InfoIco, MidBoxNew, NexusLogo, NexusText  } from "../sign-in/sign-in.styles";

// loader
import CircularProgress from '@material-ui/core/CircularProgress';
 
const baseUrl = "https://app.ganexus.com/";

interface GansSearch {
  text: string;
}

const SearchGans: React.FC = () => {
  const [loader,setLoader] = useState(false);

  const [fieldsValue, setFieldsValue] = useState<GansSearch>({
    text: "",
  });

  return (
    <>
    {
      loader?
      <div className="loader-div" style={{background:'transparent',position:'absolute'}}>
        <CircularProgress color="secondary" style={{width:100,height:100}}/>
      </div>:""}
      <div className="page login-window">
        <a href="https://pedantic-heyrovsky-53de4c.netlify.app/">
          <InfoIco src="/assets/icon/info-o.svg" />
        </a>
        <MidBoxNew>
          <NexusLogo className="logo-al" src="/assets/logo/logo-black.png" />
          <NexusText src="/assets/logo/text-logo-black.png" />
          <SigninBoxNew>
            <input className="searchInputGan" value="" placeholder="Search Gan" />
            <i className="fa fa-plus fa-2x" style={{color:'#000'}}></i>
            {/* <img className="brain-img" src="/assets/icon/brain.png" alt="brainlogo" />  */}
          </SigninBoxNew>
        </MidBoxNew>
      </div>
    </>
  );
};

export default SearchGans;
