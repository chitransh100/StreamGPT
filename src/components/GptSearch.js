import React from 'react'
import GptBar from './GptBar'
import { BGURL } from '../utils/constants'
import Header from './Header'
import GenHeader from './GenHeader'
const GptSearch = () => {
    return (<>
        <GenHeader />
        <div className='relative w-screen h-screen grid bg-black place-items-center'>
            <img className='w-screen h-screen object-cover fixed' src={BGURL} alt="" />
            <GptBar />
        </div>
    </>
    )
}

export default GptSearch
