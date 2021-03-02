import React from 'react'
import PublicGans from '../components/Publicgans'
import WindowLayout from '../components/WindowLayout'

interface childProp {
    [propName: string]: any;
}

const GanListPage: React.FC<childProp> = (props) => {

    return (
        <WindowLayout authenicated={(window as any).authenicated}>
            <PublicGans />
        </WindowLayout>
    )
}

export default GanListPage