import React from 'react'
import Manu from '../Manu/Manu';
import HeaderTop from './HeaderTop'
import HederMeddle from './HederMeddle';

export default function Header() {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <HederMeddle></HederMeddle>
            <Manu></Manu>
        </div>
    )
}
