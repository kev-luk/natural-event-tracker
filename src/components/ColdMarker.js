import React from 'react'
import { WiSnowflakeCold } from 'react-icons/wi'

const ColdMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="cold-marker" onClick={onClick}>
            <WiSnowflakeCold className="cold icon" />
        </div>
    )
}

export default ColdMarker