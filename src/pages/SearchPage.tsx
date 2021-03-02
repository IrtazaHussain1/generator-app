import React from 'react'
import SearchGans from '../components/SearchGans/searchgans.comp'
import WindowLayout from '../components/WindowLayout'

interface childProp {
    [propName: string]: any;
}

const SearchGanPage: React.FC<childProp> = (props) => {

    return (
        <WindowLayout authenicated={(window as any).authenicated}>
            <SearchGans />
        </WindowLayout>
    )
}

export default SearchGanPage