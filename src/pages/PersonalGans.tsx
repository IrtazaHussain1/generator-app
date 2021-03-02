import React from 'react'
import PersonalGans from '../components/PersonalGans';
import WindowLayout from '../components/WindowLayout'

interface childProp {
    [propName: string]: any;
}

// const user = localStorage.getItem('user');
// if(user === undefined){
//     window.location.replace('/auth')
// }

const PersonalGansPage: React.FC<childProp> = (props) => {

    return (
        <WindowLayout authenicated={(window as any).authenicated}>
            <PersonalGans />
        </WindowLayout>
    )
}

export default PersonalGansPage;