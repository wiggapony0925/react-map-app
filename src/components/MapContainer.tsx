import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MapStyle from "./MapStyle";

const libraries = ["places"];
const mapContainerStyle: React.CSSProperties = {
  height: "100vh",
  width: "100vw",
};

const nycBounds: google.maps.LatLngBoundsLiteral = {
  south: 40.4774,
  west: -74.2591,
  north: 40.9176,
  east: -73.7004,
};

const options: google.maps.MapOptions = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
  restriction: {
    latLngBounds: nycBounds,
    strictBounds: false,
  },
  mapTypeControl: false,
  streetViewControl: false,
};
const center: google.maps.LatLngLiteral = {
  lat: 40.7128,
  lng: -74.0060, // NYC center
};


interface Restaurant {
  id: number;
  lat: number;
  lng: number;
  name: string;
  description: string;
  // Add more properties as needed
}

const MapContainer: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    // Fetch restaurant data from your backend API
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/api/restaurants"); // Adjust the API endpoint
        const data: Restaurant[] = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const onMapClick = () => {
    // Clear selected restaurant when clicking on the map
    setSelectedRestaurant(null);
  };

  if (loadError) return <div>Error</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={12}
      center={center}
      options={options}
      onClick={onMapClick}
    >
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={{ lat: restaurant.lat, lng: restaurant.lng }}
          onClick={() => {
            setSelectedRestaurant(restaurant);
          }}
        />
      ))}

      {selectedRestaurant && (
        <InfoWindow
          position={{ lat: selectedRestaurant.lat, lng: selectedRestaurant.lng }}
          onCloseClick={() => {
            setSelectedRestaurant(null);
          }}
        >
          <div>
            <h2>{selectedRestaurant.name}</h2>
            <p>{selectedRestaurant.description}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapContainer;
