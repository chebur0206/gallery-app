import React, { useEffect, useState, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Gallery.css';
import Photo from '../../components/Photo';
import Modal from '../../components/Modal';

const Gallery = (props) => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemUrl, setItemUrl] = useState({});
    const [modalActive, setModalActive] = useState(false);
    const { albumId: aId, userId } = props.match.params;

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(response => {
                setLoading(false)
                const currentPhoto = response.filter(photo => photo.albumId === parseInt(aId, 10))
                setGallery(currentPhoto)
            })
    }, []);

    const downHandler = () => {
        const curr = gallery.findIndex((item) => item.id === itemUrl.id)
        if (curr !== -1) {
            if (curr === 0) {
                return setItemUrl(gallery[gallery.length - 1])
            }
            setItemUrl(gallery[curr - 1])
        }
    };

    const upHandler = () => {
        const curr = gallery.findIndex((item) => item.id === itemUrl.id)
        if (curr !== -1) {
            if (curr === gallery.length - 1) {
                return setItemUrl(gallery[0])
            }
        } setItemUrl(gallery[curr + 1])
    };

    return (
        <Fragment>
            <Modal
                active={modalActive}
                setActive={setModalActive}
            >
                <img src={itemUrl.url} />
                <div className='modal__btn_wraper'>
                    <button className='modal__btn' onClick={downHandler}>Previous</button>
                    <button className='modal__btn' onClick={upHandler}>Next</button>
                </div>

            </Modal>
            <h1 style={{ textAlign: 'center' }}>Gallery:</h1>
            {loading ? <h2 style={{ textAlign: 'center' }}>Loading...</h2> :
                <>
                    <div className='gallery__wraper'>
                        {gallery.map(item => (
                            <div key={item.id}>
                                <Photo
                                    setItemUrl={setItemUrl}
                                    item={item}
                                    setActive={setModalActive}
                                />
                            </div>
                        ))}
                    </div>
                    <Link to={`/users/${userId}/albums`} className='back__btn'>Back</Link>
                </>
            }

        </Fragment>
    )
};

export default withRouter(Gallery);