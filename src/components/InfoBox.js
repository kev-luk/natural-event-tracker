import React from 'react'

const InfoBox = ({ info }) => {
    return (
        <div className='info-box'>
            <h2>Event Location Info</h2>
            <ul>
                <li>Title: <strong>{info.title}</strong></li>
                <li>Source: {info.source}</li>
                <li>URL: <a href={info.url} target='blank'>{info.url}</a></li>
            </ul>
        </div>
    )
}

export default InfoBox
