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
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-md p-4 w-64 flex flex-col items-center justify-between border-2 border-blue-300 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
      <div className="w-full flex justify-end">
        <Image
          src="/cyparta-logo.svg"
          alt="Cyparta Logo"
          width={40}
          height={40}
          className="dark:invert"
        />
      </div>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
        <Image
          src={image}
          alt={name}
          width={128}
          height={128}
          objectFit="cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">
          {name}
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-400">{position}</p>
        <p className="text-sm text-blue-600 dark:text-blue-400">{department}</p>
      </div>
      <div className="w-full bg-white dark:bg-gray-800 p-2 rounded">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          ID: {generateEmployeeId()}
        </p>
      </div>
    </div>
  );
}

function generateEmployeeId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
