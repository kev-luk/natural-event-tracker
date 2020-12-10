import React from 'react'
import { WiVolcano } from 'react-icons/wi'

const VolcanoMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="volcano-marker" onClick={onClick}>
            <WiVolcano className="volcano icon" />
        </div>
    )
}

export default VolcanoMarker