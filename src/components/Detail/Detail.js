import React from 'react';
import { IMG_BASE_URL } from '../../api/queriesUtils';

const Detail = ({detail}) => {
    const {title, backdrop_path, release_date, genres, overview } = detail;
    return (
        <>
            <h1>{title}</h1>
            <img src={`${IMG_BASE_URL}${backdrop_path}`} alt={title} />
            <span>{release_date}</span>
            <div>
                <ul>
                    {
                        genres.map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
            <p>{overview}</p>
        </>
    )
}

export default Detail;
