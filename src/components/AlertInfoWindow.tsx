import { InfoWindow } from "@react-google-maps/api";
import type { Alert } from "../types/Alert";

type AlertInfoWindowProps = {
  alert: Alert;
  onClose: () => void;
};

export function AlertInfoWindow({ alert, onClose }: AlertInfoWindowProps) {
  return (
    <InfoWindow position={alert.position} onCloseClick={onClose}>
      <div className="p-3" style={{ minWidth: "250px" }}>
        <h5 className="mb-3 text-warning">⚠️ Alerta</h5>
        <p className="mb-1">
          <strong>Data:</strong>{" "}
          <span className="text-muted">{alert.date}</span>
        </p>
        <p>
          <strong>Descrição:</strong>{" "}
          <span className="text-secondary">{alert.description}</span>
        </p>
      </div>
    </InfoWindow>
  );
}
