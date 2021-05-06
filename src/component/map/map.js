import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';



const SimpleMap = (props) => {
    const apikey = "AIzaSyAjI-xgJuRrbdGY328DYy6u3qu16BfZa-U";
    const getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

    const [center, setCenter] = useState({ lat: 19.9219588, lng: 99.1057153 });
    const [zoom, setZoom] = useState(15);
    return (
        <div style={{ height: '500px', width: '100%', padding : '50px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apikey }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={getMapOptions}
            >
                <Marker
                    lat={19.9219588}
                    lng={99.1057153}
                    name="สวนส้มจินตนา"
                    color="#FF7F50"
                />
            </GoogleMapReact>
        </div>
    );
}

export default SimpleMap;