import { EmployeeCard } from "@/components/EmployeeCard";
import Link from "next/link";

export default function Employees() {
  // TODO: Fetch employees from the database

  return (
    <div className="flex flex-col gap-6">
      <h1>Employees</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {employees.map((employee) => (
          <Link
            href={`/dashboard/employees/${employee.name}/profile`}
            key={employee.name}
            className="hover:scale-105 transition-all duration-300"
          >
            <EmployeeCard
              name={employee.name}
              image={employee.image}
              position={employee.position}
              department={employee.department}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

const employees = [
  {
    name: "Mariam Ali",
    image: "/mariam-ali.png",
    position: "UI/UX Designer",
    department: "Engineering",
  },
  {
    name: "Mariam Ali",
    image: "/mariam-ali.png",
    position: "UI/UX Designer",
    department: "Engineering",
  },
  {
    name: "Mariam Ali",
    image: "/mariam-ali.png",
    position: "UI/UX Designer",
    department: "Engineering",
  },
  {
    name: "Mariam Ali",
    image: "/mariam-ali.png",
    position: "UI/UX Designer",
    department: "Engineering",
  },
  {
    name: "Mariam Ali",
    image: "/mariam-ali.png",
    position: "UI/UX Designer",
    department: "Engineering",
  },
];
