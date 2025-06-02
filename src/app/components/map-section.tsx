'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, Icon } from 'leaflet';


// Fix missing marker icons
import L from 'leaflet';
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const branches = [
  { name: 'Tanjungpinang', coords: [0.9167, 104.4500] },
  { name: 'Tanjung Priok, Jakarta', coords: [-6.1044, 106.8807] },
  { name: 'Belawan, Medan', coords: [3.7833, 98.6833] },
  { name: 'Tanjung Perak, Surabaya', coords: [-7.2167, 112.7333] },
  { name: 'Makassar', coords: [-5.1477, 119.4327] },
  { name: 'Ambon', coords: [-3.7079, 128.1706] },
  { name: 'Sorong', coords: [-0.8667, 131.2500] },
  { name: 'Jayapura', coords: [-2.5337, 140.7181] },
];

export default function MapSection() {
  const center: LatLngExpression = [-2, 118]; // pusat Indonesia

  return (
    <div className="w-[700px] h-[400px]">
      <MapContainer center={center} zoom={5} scrollWheelZoom={true} className="h-full w-full rounded-lg z-0">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        {branches.map((branch, i) => (
          <Marker key={i} position={branch.coords as LatLngExpression}>
            <Popup>{branch.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
