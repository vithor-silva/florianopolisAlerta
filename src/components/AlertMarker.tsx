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
        url: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png",
        scaledSize: new window.google.maps.Size(40, 40),
      }}
    />
  );
}
