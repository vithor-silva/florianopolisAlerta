type SidebarMenuProps = {
  onCreateAlertClick: () => void;
};

export function SidebarMenu({ onCreateAlertClick }: SidebarMenuProps) {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        height: "100vh",
      }}
    >
      <h2>Menu</h2>
      <button
        onClick={() => {
          onCreateAlertClick();
          alert("Clique em um local no mapa para criar um alerta.");
        }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Criar um Alerta
      </button>
    </div>
  );
}
