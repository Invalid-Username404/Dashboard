export function PersonalInformation({
  personalInformation,
}: {
  personalInformation: {
    label: string;
    data: {
      firstName: string;
      lastName: string;
      mobileNumber: string;
      emailAddress: string;
      dateOfBirth: string;
      maritalStatus: string;
      gender: string;
      nationality: string;
      address: string;
      city: string;
      state: string;
      zipCode: string;
      workHours: string;
      salaryHour: string;
      totalSalary: string;
    };
  };
}) {
  const { data } = personalInformation;

  const formatKey = (key: string) => {
    let formattedKey = key
      .replace(/([A-Z])/g, " $1") // Add space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter

    if (formattedKey === "Work Hours") {
      formattedKey = "Work's Hours";
    } else if (formattedKey === "Salary Hour") {
      formattedKey = formattedKey.replace(" ", "/");
    }

    return formattedKey;
  };

  return (
    <div className="grid grid-cols-5 gap-8">
      {Object.entries(data).map(([key, value]) => (
        <div
          className={`${
            key === "totalSalary" ? "col-span-1" : "col-span-2"
          } flex flex-col gap-1`}
          key={key}
        >
          <p
            className={`text-sm ${
              key === "totalSalary" ? "text-red-500" : "text-gray-500"
            }`}
          >
            {formatKey(key)}
          </p>
          <p className="text-base font-medium">{value}</p>
        </div>
      ))}
    </div>
  );
}
