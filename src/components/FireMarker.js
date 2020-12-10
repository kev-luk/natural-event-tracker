import React from 'react'
import { WiFire } from 'react-icons/wi'

const FireMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="fire-marker" onClick={onClick}>
            <WiFire className="fire icon" />
        </div>
    )
}

export default FireMarker
