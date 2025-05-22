import { GoogleMap, LoadScript } from "@react-google-maps/api";
import type { Alert } from "../types/Alert";
import { AlertMarker } from "./AlertMarker";
import { AlertInfoWindow } from "./AlertInfoWindow";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -27.5954,
  lng: -48.548,
};

type MapContainerProps = {
  alerts: Alert[];
  onMapClick: (e: google.maps.MapMouseEvent) => void;
  onMarkerClick: (alert: Alert) => void;
  selectedAlert: Alert | null;
  setSelectedAlert: (alert: Alert | null) => void;
};

export function MapContainer({
  alerts,
  onMapClick,
  onMarkerClick,
  selectedAlert,
  setSelectedAlert,
}: MapContainerProps) {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onClick={onMapClick}
      >
        {alerts.map((alert) => (
          <AlertMarker
            key={alert.id}
            alert={alert}
            onClick={() => onMarkerClick(alert)}
          />
        ))}

        {selectedAlert && (
          <AlertInfoWindow
            alert={selectedAlert}
            onClose={() => setSelectedAlert(null)}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
