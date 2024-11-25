import React from 'react';
import { Employee } from '../models/Employee';
import '../styles/Table.css';

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
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>{new Date(employee.admission_date).toLocaleDateString()}</td>
            <td>{employee.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};