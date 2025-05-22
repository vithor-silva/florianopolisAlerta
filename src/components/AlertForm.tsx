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
    // Um container que ocupa a tela toda no mobile para facilitar clicar fora e fechar
    <div
      className="position-fixed top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-start p-3"
      style={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1050 }}
      onClick={onCancel} // fecha se clicar fora do formulário
    >
      {/* Evita fechar o modal ao clicar dentro do formulário */}
      <div
        className="bg-white p-4 shadow rounded"
        style={{ maxWidth: 400, width: "100%", marginTop: 20 }}
        onClick={(e) => e.stopPropagation()}
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
              className="form-control w-100"
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
              className="form-control w-100"
              rows={4}
              value={alert.description || ""}
              onChange={(e) =>
                onChange({ ...alert, description: e.target.value })
              }
              required
            />
          </div>
          <div className="d-flex justify-content-end gap-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ minWidth: 100, padding: "12px 0", fontSize: 16 }}
            >
              Salvar
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              style={{ minWidth: 100, padding: "12px 0", fontSize: 16 }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
