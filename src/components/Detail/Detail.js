import React from 'react';

import './Detail.scss';

const Detail = ({detail}) => {
    const {title, runtime, release_date, genres, overview } = detail;
    const date = new Date(release_date).getFullYear();
    const duration = runtime > 59 ? time_convert(runtime) : runtime;

    function time_convert(num) { 
        var hours = Math.floor(num / 60);  
        var minutes = num % 60;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        return `${hours}h${minutes}min`;         
    }
    return (
        <>
            <section>
            <div className="detail__genres">
                <ul>
                    {
                        genres.map((item, index) => {
                            return (
                                <li key={index}>{item.name} 
                                { index < genres.length-1 && <div className="separator" /> }</li>
                            )
                        })
                    }
                </ul>
                </div>
                <h1 className="detail__title">{title}</h1>
                <p className="detail__description">{overview}</p>
                <div className="detail__infos">
                    <span className="detail__date" >{date}</span>
                    { runtime > 0 &&
                        <>
                            <div className="separator" />
                            <span className="detail__runtime">{duration}</span>
                        </>
                    }
                </div>
                
            </section>
        </>
    )
}

export default Detail;
