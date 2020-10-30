import React from 'react';
import './Photo.css'

const Photo = ({ item, setActive, setItemUrl }) => {
    const handleClick = () => {
        setItemUrl(item)
        setActive(true)
    }

    // console.log(item)
    return (
        <div
            className='photo__wraper'
            onClick={handleClick}
        >
            <img src={item.thumbnailUrl} alt='' />
        </div >
    )
}

export default Photo;