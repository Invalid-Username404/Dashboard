export default function TasksPage({ params: { employee } }: { params: { employee: string } }) {
  employee = employee.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return <div>{employee} Tasks</div>;
}