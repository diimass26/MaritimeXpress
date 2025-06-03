'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix default icon
delete (L.Icon.Default as unknown as { _getIconUrl?: () => void })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

export default function MapSection() {
  useEffect(() => {
    // Ini hanya untuk debugging client
    console.log('Map mounted in client');
  }, []);

  return (
    <MapContainer center={[-2.5489, 118.0149]} zoom={5} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0.9, 104.4]}>
        <Popup>Tanjungpinang, Kepulauan Riau</Popup>
      </Marker>
      <Marker position={[-6.1, 106.8]}>
        <Popup>Tanjung Priok, Jakarta</Popup>
      </Marker>
      <Marker position={[3.7, 98.6]}>
        <Popup>Belawan, Medan</Popup>
      </Marker>
      <Marker position={[-7.2, 112.7]}>
        <Popup>Tanjungperak, Surabaya</Popup>
      </Marker>
      <Marker position={[-5.1, 119.4]}>
        <Popup>Makassar, Sulawesi Selatan</Popup>
      </Marker>
      <Marker position={[-3.7, 128.1]}>
        <Popup>Ambon, Maluku</Popup>
      </Marker>
      <Marker position={[-0.8, 131.2]}>
        <Popup>Sorong, Papua</Popup>
      </Marker>
      <Marker position={[-2.5, 140.7]}>
        <Popup>Jayapura, Papua</Popup>
      </Marker>
    </MapContainer>
  );
}
