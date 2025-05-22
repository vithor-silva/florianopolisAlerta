import { InfoWindow } from "@react-google-maps/api";
import type { Alert } from "../types/Alert";

type AlertInfoWindowProps = {
  alert: Alert;
  onClose: () => void;
};

export function AlertInfoWindow({ alert, onClose }: AlertInfoWindowProps) {
  return (
    <InfoWindow position={alert.position} onCloseClick={onClose}>
      <div>
        <h3>Alerta</h3>
        <p>
          <strong>Data:</strong> {alert.date}
        </p>
        <p>
          <strong>Descrição:</strong> {alert.description}
        </p>
      </div>
    </InfoWindow>
  );
}
