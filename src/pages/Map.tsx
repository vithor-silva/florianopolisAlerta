import React, { useState } from "react";
import type { Alert } from "../types/Alert";
import { SidebarMenu } from "../components/SidebarMenu";
import { MapContainer } from "../components/MapContainer";
import { AlertForm } from "../components/AlertForm";

const florianopolisBounds = {
  north: -27.3,
  south: -27.8,
  west: -48.8,
  east: -48.3,
};

export default function MapPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [newAlert, setNewAlert] = useState<Partial<Alert>>({});
  const [showForm, setShowForm] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const [creatingAlert, setCreatingAlert] = useState(false);

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!creatingAlert) return;

    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      if (
        lat > florianopolisBounds.south &&
        lat < florianopolisBounds.north &&
        lng > florianopolisBounds.west &&
        lng < florianopolisBounds.east
      ) {
        setNewAlert({ position: { lat, lng } });
        setShowForm(true);
        setCreatingAlert(false);
        setSelectedAlert(null);
      } else {
        alert("Somente pontos em Florianópolis são permitidos.");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAlert.position && newAlert.date && newAlert.description) {
      setAlerts((prev) => [
        ...prev,
        {
          id: Date.now(),
          position: newAlert.position,
          date: newAlert.date,
          description: newAlert.description,
        } as Alert,
      ]);
      setNewAlert({});
      setShowForm(false);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SidebarMenu
        onCreateAlertClick={() => {
          setCreatingAlert(true);
          setShowForm(false);
          setSelectedAlert(null);
        }}
      />

      <div style={{ flexGrow: 1, position: "relative" }}>
        <MapContainer
          alerts={alerts}
          onMapClick={handleMapClick}
          onMarkerClick={setSelectedAlert}
          selectedAlert={selectedAlert}
          setSelectedAlert={setSelectedAlert}
        />

        {showForm && newAlert.position && (
          <AlertForm
            alert={newAlert}
            onChange={setNewAlert}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}
