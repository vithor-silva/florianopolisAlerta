import React from "react";
import type { Alert } from "../types/Alert";

type AlertFormProps = {
  alert: Partial<Alert>;
  onChange: (alert: Partial<Alert>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
};

export function AlertForm({
  alert,
  onChange,
  onSubmit,
  onCancel,
}: AlertFormProps) {
  return (
    <div
      className="position-absolute bg-white p-4 shadow"
      style={{ top: 20, left: 300, zIndex: 1000, minWidth: 320 }}
    >
      <h2 className="mb-4">Novo Alerta</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="dateInput" className="form-label">
            Data do Ocorrido:
          </label>
          <input
            id="dateInput"
            type="date"
            className="form-control"
            value={alert.date || ""}
            onChange={(e) => onChange({ ...alert, date: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">
            Descrição:
          </label>
          <textarea
            id="descriptionInput"
            className="form-control"
            rows={4}
            value={alert.description || ""}
            onChange={(e) =>
              onChange({ ...alert, description: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Salvar
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
}
