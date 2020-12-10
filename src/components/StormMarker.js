import React from 'react'
import { WiLightning } from 'react-icons/wi'

const StormMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="storm-marker" onClick={onClick}>
            <WiLightning className="storm icon" />
        </div>
    )
}

export default StormMarker
