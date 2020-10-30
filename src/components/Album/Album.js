import React from 'react';
import { Link } from 'react-router-dom';
import './Album.css'

const Album = ({ title, uId, aId, gallery }) => {
    const albumArr = (arr) => {
        return (
            arr.filter(item => item.albumId === aId)
        )
    }

    return (
        <div className='album__wraper'>
            <div>
                <img className='album__img' src={albumArr(gallery)[0].thumbnailUrl} alt='' />
                <p className='album__title'>{title}</p>
                <p className='album__title'>Number: {albumArr(gallery).length}</p>
            </div>

            <div className='link__container'>
                <Link to={`/users/${uId}/albums/${aId}`} className='album__accept_btn' >Choose</Link>
            </div>
        </div>
    )
}

export default Album;