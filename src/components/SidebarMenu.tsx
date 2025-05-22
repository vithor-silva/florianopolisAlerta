import { ExclamationTriangleFill } from "react-bootstrap-icons";

type SidebarMenuProps = {
  onCreateAlertClick: () => void;
};

export function SidebarMenu({ onCreateAlertClick }: SidebarMenuProps) {
  return (
    <>
      {/* Menu desktop */}
      <div
        className="d-none d-md-flex flex-column bg-light p-3 shadow"
        style={{ width: 250, height: "100vh" }}
      >
        <h2 className="mb-4">Menu</h2>
        <button
          onClick={() => {
            onCreateAlertClick();
            alert("Clique em um local no mapa para criar um alerta.");
          }}
          className="btn btn-warning d-flex align-items-center gap-2"
        >
          <ExclamationTriangleFill />
          Criar um Alerta
        </button>
      </div>

      {/* Menu mobile - fixo embaixo */}
      <div className="d-flex d-md-none justify-content-around align-items-center bg-light border-top fixed-bottom p-2 shadow">
        <button
          onClick={() => {
            onCreateAlertClick();
            alert("Clique em um local no mapa para criar um alerta.");
          }}
          className="btn btn-warning d-flex align-items-center gap-1"
          style={{ fontSize: "1rem" }}
        >
          <ExclamationTriangleFill />
          <span>Criar</span>
        </button>
      </div>
    </>
  );
}
