"use client"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import Image from "next/image";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 12,
}

interface PopupProps {
    url: string;
    name: string;
    age: string;
    hobby: string;
}

const Map = (Map: MapProps) => {
    const { zoom = defaults.zoom, posix } = Map
    const [initialPosition, setInitialPosition] = useState<[number, number]>([35.157545, 136.899904]);
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([35.157545, 136.899904]);
    const userData = [
        { name: 'Yamada Yuki', age: 25, hobby: 'Music, Book...', url: '/user.png' },
        { name: 'Nasuyi Akiko', age: 22, hobby: 'TV, Resturant...', url: '/user1.png' },
        { name: 'Tomoda Hayaki', age: 23, hobby: 'Swim, Game...', url: '/user2.png' },
        { name: 'Maya', age: 27, hobby: 'Dance, Yard...', url: '/user3.png' }]

    const [user, setUser] = useState(userData[0])
    const [userIndex, setUserIndex] = useState(0)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude]);
        });
    }, []);

    useEffect(() => {
        // getAddressFromCoordinates(region)
        const userNumber = Math.round(Math.random() * 3);
        if (userNumber !== userIndex) {
            setUserIndex(userNumber);
            setUser(userData[userNumber])
        }
    }, [selectedPosition])

    const Popups = ({ url, name, age, hobby }: PopupProps) => {
        return (
            <Popup className="bg-[#FFFF54] text-[#5C5C5C]">
                <button className="flex w-[155px] h-[50px]">
                    <Image src={user.url} alt={user.name} width={50} height={50} />
                    <div className="flex flex-col ml-[9px] items-start">
                        <label>{user.name}</label>
                        <label>{user.age}</label>
                        <label>{user.hobby}</label>
                    </div>
                </button>
            </Popup>
        )
    }

    // const myIcon = L.icon({
    //     iconUrl: 'my-icon.png',
    //     iconSize: [38, 95],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //     shadowUrl: 'my-icon-shadow.png',
    //     shadowSize: [68, 95],
    //     shadowAnchor: [22, 94]
    // });

    // L.marker([50.505, 30.57], { icon: myIcon }).addTo(map);

    const Markers = () => {

        const map = useMapEvents({
            click(e) {
                setSelectedPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]);
            },
        })

        return (
            selectedPosition ?
                <Marker
                    key={selectedPosition[0]}
                    position={selectedPosition}
                    interactive={true}
                // icon={{
                //     iconUrl: 'my-icon.png',
                //     iconSize: [38, 95],
                //     iconAnchor: [22, 94],
                //     popupAnchor: [-3, -76],
                //     shadowUrl: 'my-icon-shadow.png',
                //     shadowSize: [68, 95],
                //     shadowAnchor: [22, 94]
                // }}
                >
                    <Popups url="/user.png" name="Yamada Yuki" age="25" hobby="Music, Book..." />
                </Marker >
                : null
        )

    }

    return (
        <MapContainer
            center={selectedPosition || initialPosition}
            zoom={zoom}
            style={{ height: "100%", width: "100%" }}
        >
            <Markers />
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map