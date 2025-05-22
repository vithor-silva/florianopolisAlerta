import React, { useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import type { Alert } from "../types/Alert";
import { AlertMarker } from "./AlertMarker";
import { AlertInfoWindow } from "./AlertInfoWindow";

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
  const handleMapClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (e.domEvent?.type === "click") {
        onMapClick(e);
      }
    },
    [onMapClick]
  );

  const handleMarkerClick = useCallback(
    (alert: Alert) => {
      onMarkerClick(alert);
    },
    [onMarkerClick]
  );

  if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="alert alert-danger m-3">
        Chave da API do Google Maps não configurada.
      </div>
    );
  }

  return (
    <div className="container-fluid p-0" style={{ height: "100vh" }}>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="row h-100 m-0">
          {/* Mapa em tela cheia */}
          <div className="col-12 p-0">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={13}
              onClick={handleMapClick}
              options={{
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
              }}
            >
              {alerts.map((alert) => (
                <AlertMarker
                  key={alert.id}
                  alert={alert}
                  onClick={() => handleMarkerClick(alert)}
                />
              ))}

              {selectedAlert && (
                <AlertInfoWindow
                  alert={selectedAlert}
                  onClose={() => setSelectedAlert(null)}
                />
              )}
            </GoogleMap>
          </div>
        </div>
      </LoadScript>
    </div>
  );
}
