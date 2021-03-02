import React, { useState } from "react";

import { SigninBox, SignInForm,  InfoIco, MidBox, NexusLogo, NexusText  } from "./sign-in.styles";

import InputField from "../input-field/input-field.comp";
import Button from "../button/button.comp";
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// loader
import CircularProgress from '@material-ui/core/CircularProgress';
 
const baseUrl = "https://app.ganexus.com/";
// const baseUrl = "https://app.ganexus.com/";

interface EmailAndPassword {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [loader,setLoader] = useState(false);
  const [signupLoader,setSignupLoader] = useState(false)


  const [fieldsValue, setFieldsValue] = useState<EmailAndPassword>({
    email: "",
    password: "",
  });

  const onSignInClick = async (e: any) => {
    e.preventDefault();
    debugger;
    if(fieldsValue.email){
      setLoader(true);
      try {
        console.log(`${baseUrl}checkemail/${fieldsValue.email}`);
        // make api call to check email exist or not
        fetch(`${baseUrl}checkemail/${fieldsValue.email}`,{
          method:'GET',
          headers:{
            'content-type':'application/json',
          },
        }).then(
          res => res.json()
        ).then(
          resJson=>{
            if(resJson.message){
              login();
              console.log("login")
            }else{
              onSignUpClick(e);
              console.log("signUp")
            }
            setLoader(false);
          }
        ).catch(e=>{
          // NotificationManager.error(e)
          alert(e)
          setLoader(false);
        });
      } catch (error) {
          // NotificationManager.error(error.message);
          alert(error)
          localStorage.setItem("error", error.message);
      }
    }
  };

  const login = async () => {
    fetch(`${baseUrl}auth/`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({email:fieldsValue.email,password:fieldsValue.password})
    }).then(
      res => res.json()
    ).then(
      resJson=>{
        if (!resJson.token){
          // NotificationManager.error(resJson.error);
          alert(resJson.error)
          return;
        }
        localStorage.setItem("user", resJson.token);
        setTimeout(()=>{
          setLoader(false);
        },500);
        window.location.replace('/');
      }
    ).catch(e=>console.log(e));
  }

  const onSignUpClick = async (e: any) => {
    e.preventDefault();
    if(fieldsValue.email){
      setSignupLoader(true);
      try {
        var username = fieldsValue.email.split('@');
        var uname = username[0]+""+String(Math.floor(Math.random() * Math.floor(999)));

        const info = {
          email:fieldsValue.email,
          username:uname,
          password:fieldsValue.password,
          password2:fieldsValue.password,
        }

        fetch(`${baseUrl}user/UserApi/`,{
            method:'POST',
            headers:{
              'content-type':'application/json',
            },
            body:JSON.stringify(info)
          }).then(
            res => res.json()
          ).then(
            resJson=>{
              //debugger;
              console.log(typeof(resJson.email));
              if(typeof(resJson.email) === "object"){
                // NotificationManager.error('User Already exists please login');
                alert('User Already exists please login')
              }else{
                fetch(`${baseUrl}auth/`,{
                  method:'POST',
                  headers:{
                    'content-type':'application/json',
                  },
                  body:JSON.stringify({email:fieldsValue.email,password:fieldsValue.password})
                }).then(
                  res => res.json()
                ).then(
                  resJson=>{
                    if (!resJson.token) {
                      // NotificationManager.error(resJson.error);
                      alert(resJson.error)
                      return;
                    };
                    localStorage.setItem("user", resJson.token);
                    setTimeout(()=>{
                      setLoader(false);
                    },500);
                    window.location.replace('/');
                  }
                ).catch(e=>alert(e.message));
              }
            }
          ).catch(e=>alert(e.message));
      } catch (error) {
        alert(error.message)
        localStorage.setItem("error", error.message);
      }
      setTimeout(()=>setSignupLoader(false),500);
    }
  };

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
        <MidBox>
          <NexusLogo className="logo-al" src="/assets/logo/logo-black.png" />
          <NexusText src="/assets/logo/text-logo-black.png" />
          <SigninBox>
            <SignInForm onSubmit={onSignInClick} className="login-input-al">
              <InputField
                value={fieldsValue.email}
                type="email"
                placeholder="email" 
                onChange={(e) =>
                  setFieldsValue({ ...fieldsValue, email: e.target.value! })
                }
              />
              <InputField
                value={fieldsValue.password}
                type="password"
                placeholder="password" 
                onChange={(e) =>
                  setFieldsValue({ ...fieldsValue, password: e.target.value! })
                }
              />
              <Button type="submit" className="login-buuton-al">
                log in
              </Button>
              <Button className="login-buuton-al" disabled={signupLoader} onClickHandler={e=> onSignUpClick(e)}>sign up</Button>
            </SignInForm>
          </SigninBox>
        </MidBox>
      </div>
    </>
  );
};

export default SignIn;
