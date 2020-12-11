import React from 'react'

const InfoBox = ({ info }) => {
    return (
        <div className='info-box'>
            <h2>Event Location Info</h2>
            <ul>
                <li>Title: <strong>{info.title}</strong></li>
                <li>Category: {info.category}</li>
                <li>Source: {info.source}</li>
                <li><a href={info.url} target='blank'>Learn more &rarr;</a></li>
            </ul>
        </div>
    )
}

export default InfoBox
