import Image from "next/image";

type EmployeeCardProps = {
  name: string;
  image: string;
  position: string;
  department: string;
};

export function EmployeeCard({
  name,
  image,
  position,
  department,
}: EmployeeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image src={image} alt={name} width={100} height={100} />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{position}</p>
      <p className="text-sm text-gray-500">{department}</p>
    </div>
  );
}
