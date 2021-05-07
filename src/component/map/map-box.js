import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = ReactMapboxGl({
    accessToken:
        "pk.eyJ1Ijoic2lya2lpa3kiLCJhIjoiY2tvZW1pOGFvMGJwcTJ3czN6bmkzbWk2cyJ9.x0ToQEp64FN_mCwqo2U-GA"
});

function MapsBox() {
    return (
        <div>
            <Map
                style="mapbox://styles/mapbox/streets-v8"
                zoom={[15]}
                center={[99.1057153,19.9219588]}
                containerStyle={{
                    height: "60vh",
                    width: "100%"
                }}
            >
                <Layer type="symbol" id="marker" layout={{ "icon-image": "../../images/mapbox-marker-icon-20px-orange.png" }}>
                    <Feature coordinates={[99.1057153,19.9219588]} />
                </Layer>
            </Map>
        </div>
    )
}

export default MapsBox