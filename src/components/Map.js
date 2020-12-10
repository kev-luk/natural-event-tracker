import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import FireMarker from './FireMarker'
import StormMarker from './StormMarker'
import VolcanoMarker from './VolcanoMarker'
import ColdMarker from './ColdMarker'
import InfoBox from './InfoBox'

const API_KEY = process.env.REACT_APP_API_KEY

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const fires = eventData.map((ev) => {
        if (ev.categories[0].id === 8) {
            return (
                <FireMarker
                    lat={ev.geometries[0].coordinates[1]}
                    lng={ev.geometries[0].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({
                            title: ev.title,
                            source: ev.sources[0].id,
                            url: ev.sources[0].url
                        })
                    }
                />
            )
        } else {
            return null
        }
    })

    const storms = eventData.map((ev) => {
        if (ev.categories[0].id === 10) {
            return (
                <StormMarker
                    lat={ev.geometries[ev.geometries.length - 1].coordinates[1]}
                    lng={ev.geometries[ev.geometries.length - 1].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({
                            title: ev.title,
                            source: ev.sources[0].id,
                            url: ev.sources[0].url
                        })
                    }
                />
            )
        } else {
            return null
        }
    })

    const volcanoes = eventData.map((ev) => {
        if (ev.categories[0].id === 12 && ev.geometries[0].type !== "Polygon") {
            return (
                <VolcanoMarker
                    lat={ev.geometries[0].coordinates[1]}
                    lng={ev.geometries[0].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({
                            title: ev.title,
                            source: ev.sources[0].id,
                            url: ev.sources[0].url
                        })
                    }
                />
            )
        } else {
            return null
        }
    })

    const cold = eventData.map((ev) => {
        if (ev.categories[0].id === 15 && ev.geometries[0].type !== "Polygon") {
            return (
                <ColdMarker
                    lat={ev.geometries[0].coordinates[1]}
                    lng={ev.geometries[0].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({
                            title: ev.title,
                            source: ev.sources[0].id,
                            url: ev.sources[0].url
                        })
                    }
                />
            )
        } else {
            return null
        }
    })

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {fires}
                {storms}
                {volcanoes}
                {cold}
            </GoogleMapReact>
            {locationInfo && <InfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 39.8283,
        lng: -98.5795
    },
    zoom: 4
}

export default Map
