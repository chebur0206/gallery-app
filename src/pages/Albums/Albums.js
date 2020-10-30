import React, { Fragment, useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Album from '../../components/Album/Album'
import './Albums.css';

const Albums = (props) => {
    const [albums, setAlbums] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false)
    const { userId: id } = props.match.params;

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(response => {
                setLoading(false)
                const currentAlbums = response.filter(album => album.userId === parseInt(id, 10))
                setAlbums(currentAlbums)
            })
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(response => setGallery(response))
    }, [])

    return (
        <Fragment>
            <h1 style={{ textAlign: 'center' }}>Albums:</h1>
            {!loading && gallery.length ?
                <>
                    <div className='albums__wraper'>
                        {albums.map(item => (
                            <div key={item.id}>
                                <Album
                                    title={item.title}
                                    uId={id}
                                    aId={item.id}
                                    gallery={gallery}
                                />
                            </div>
                        ))}
                    </div>
                    <Link to={'/'} className='back__btn'>Back</Link>
                </>
                :
                <h2 style={{ textAlign: 'center' }}>Loading...</h2>
            }

        </Fragment>
    )
};

export default withRouter(Albums);