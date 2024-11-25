import React from 'react';
import { Employee } from '../models/Employee';
import '../styles/Table.css';
import '../styles/Input.css';

interface EmployeeTableProps {
  employees: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de Admissão</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <img src={employee.image} alt={employee.name} width="50" />
            </td>
            <td data-label="Nome">{employee.name}</td>
            <td data-label="Cargo">{employee.job}</td>
            <td data-label="Data de Admissão">{new Date(employee.admission_date).toLocaleDateString()}</td>
            <td data-label="Telefone">{employee.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};