// import 'leaflet/dist/leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import { FC } from 'react';

// const icon = L.icon({ iconUrl: '/images/location-pin.png' });

const MapView: FC = () => {
    const position: any = [51.5168137, -0.0595791];
    return (
        <div
            style={{
                width: '100%',
                margin: 'auto',
                height: '100%',
                padding: '2rem',
            }}
        >
            {' '}
            <iframe
                style={{ width: '100%', height: '100%' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.5667403805068!2d-0.0683031099747688!3d51.51596852471627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccad7cdb991%3A0x41e4d9faeb975e63!2sLondonium%20Solicitors!5e0!3m2!1sen!2suk!4v1738274175017!5m2!1sen!2suk"
                loading='lazy'
            ></iframe>
            {/* 
            <MapContainer style={{ height: '100%' }} center={position} zoom={16} scrollWheelZoom={true}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon} >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}
        </div>
    );
};
export default MapView;
