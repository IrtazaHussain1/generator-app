import React from 'react'
import SignIn from '../components/sign-in/sign-in.comp'
import WindowLayout from '../components/WindowLayout'

interface childProp {
    [propName: string]: any;
}

// const user = localStorage.getItem('user');
// if(user){
//     window.location.replace('/')
// }

const AuthPage: React.FC<childProp> = (props) => {

    return (
        <WindowLayout authenicated={(window as any).authenicated}>
            <SignIn />
        </WindowLayout>
    )
}

export default AuthPage