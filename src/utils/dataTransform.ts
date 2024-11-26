import { Employee } from '../models/Employee';
import { EmployeeApi } from '../models/EmployeeApi';

export const toCamelCase = (employee: EmployeeApi): Employee => ({
  id: employee.id,
  name: employee.name,
  job: employee.job,
  admissionDate: employee.admission_date,
  phone: employee.phone,
  image: employee.image,
});
