import React from "react";
import type { Alert } from "../types/Alert";


type AlertFormProps = {
  alert: Partial<Alert>;
  onChange: (alert: Partial<Alert>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
};

export function AlertForm({ alert, onChange, onSubmit, onCancel }: AlertFormProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 300,
        background: "#fff",
        padding: 20,
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <h2>Novo Alerta</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Data do Ocorrido:</label>
          <br />
          <input
            type="date"
            value={alert.date || ""}
            onChange={(e) => onChange({ ...alert, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <br />
          <textarea
            value={alert.description || ""}
            onChange={(e) => onChange({ ...alert, description: e.target.value })}
            required
          />
        </div>
        <button type="submit">Salvar</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
}
