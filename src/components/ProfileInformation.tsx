"use client";

import { PersonalInformation } from "./PersonalInformation";
import { ProfileNavigator } from "./ProfileNavigator";
import { useState } from "react";
type employee = {
  name: string;
  image: string;
  imageAlt: string;
  jobTitle: string;
  email: string;
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
};

export function ProfileInformation({ information }: { information: employee }) {
  const [activeTab, setActiveTab] = useState("personal information");
  const { personalInformation } = information;
  const renderView = () => {
    switch (activeTab) {
      case "personal information":
        return (
          <PersonalInformation personalInformation={personalInformation} />
        );
      case "professional information":
      // return <ProfessionalInformation />;
      case "contact information":
      // return <ContactInformation />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <ProfileNavigator activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderView()}
    </div>
  );
}
