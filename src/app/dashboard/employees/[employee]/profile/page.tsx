import Image from "next/image";
import { EditButton } from "@/components/EditButton";
import { ProfileInformation } from "@/components/ProfileInformation";

export default function Profile({ params }: { params: { employee: string } }) {
  // TODO: get employee data from database
  const { employee } = params;

  return (
    <div className="flex flex-col gap-6">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm font-medium">
          <li>Employees</li>
          <li aria-hidden="true">
            <Image src="/arrow-right.svg" alt="" width={8} height={8} />
          </li>
          <li>{employee}</li>
        </ol>
      </nav>

      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-6">
        <div className="flex items-center gap-4">
          <Image
            src={mariam.image}
            alt={mariam.imageAlt}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{mariam.name}</h1>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <Image
                src="/briefcase.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />
              <span>{mariam.jobTitle}</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <Image
                src="/gmail.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />
              <span>{mariam.email}</span>
            </p>
          </div>
        </div>
        <EditButton />
      </section>

      <ProfileInformation information={mariam} />
    </div>
  );
}

const mariam = {
  name: "Mariam Ali",
  image: "/mariam-ali.png",
  imageAlt: "mariam ali",
  jobTitle: "UI/UX Designer",
  email: "mariam.ali@gmail.com",
  personalInformation: {
    label: "Personal Information",
    data: {
      firstName: "Mariam",
      lastName: "Ali",
      mobileNumber: "01010101010",
      emailAddress: "mariam.ali@gmail.com",
      dateOfBirth: "July 14, 1995",
      maritalStatus: "Single",
      gender: "Female",
      nationality: "Egyptian",
      address: "Maadi",
      city: "Cairo",
      state: "Cairo",
      zipCode: "11311",
      workHours: "180 hours",
      salaryHour: "300 EGP",
      totalSalary: "54000 EGP",
    },
  },
};
