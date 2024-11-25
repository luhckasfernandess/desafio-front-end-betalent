import React, { useState } from 'react';
import { EmployeeCardProps } from '../models/EmployeeCardProps';

export const EmployeeCards: React.FC<EmployeeCardProps> = ({ employees }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="table-container">
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <div className="employee-header">
            <img src={employee.image} alt={employee.name} />
            <h3>{employee.name}</h3>
            <button
              className="expand-btn"
              onClick={() => toggleDetails(employee.id)}
            >
              {expandedId === employee.id ? '▲' : '▼'}
            </button>
          </div>
          {expandedId === employee.id && (
            <div className="employee-details">
              <p><strong>Cargo:</strong> {employee.job}</p>
              <p><strong>Data de Admissão:</strong> {new Date(employee.admissionDate).toLocaleDateString()}</p>
              <p><strong>Telefone:</strong> {employee.phone}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
