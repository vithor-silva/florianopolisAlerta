import { Marker } from "@react-google-maps/api";
import type { Alert } from "../types/Alert";

type Props = {
  alert: Alert;
  onClick: () => void;
};

export function AlertMarker({ alert, onClick }: Props) {
  return (
    <Marker
      position={alert.position}
      onClick={onClick}
      icon={{
        url: "https://maps.google.com/mapfiles/ms/icons/yellow.png",
        scaledSize: new window.google.maps.Size(40, 40),
      }}
    />
  );
}
