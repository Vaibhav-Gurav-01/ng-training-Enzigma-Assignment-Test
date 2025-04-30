import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Overview = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely destructure formData with a fallback if it's null
  const formData = location.state?.formData;

  if (!formData) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Error: No data found
        </h1>
        <p className="text-center">
          Form data is missing. Please go back and try again.
        </p>
      </div>
    );
  }

  const handleEdit = () => {
    navigate(-1, { state: { formData } }); // Navigate back with form data
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1//detail/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Detail created successfully:", result);
        navigate("/confirm");
      } else {
        throw new Error("Error creating detail");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const renderTable = (data, headers) => (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 border-b">
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 text-left font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              {Object.values(item).map((value, idx) => (
                <td key={idx} className="py-2 px-4 text-gray-700 break-all">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Overview of Your Submission
      </h1>

      <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>First Name:</strong>
            <p>{formData.firstName}</p>
          </div>
          <div>
            <strong>Last Name:</strong>
            <p>{formData.lastName}</p>
          </div>
          <div>
            <strong>Gender:</strong>
            <p>{formData.gender}</p>
          </div>
          <div>
            <strong>Age:</strong>
            <p>{formData.age}</p>
          </div>
          <div>
            <strong>Date of Birth:</strong>
            <p>{formData.dateOfBirth}</p>
          </div>
        </div>
      </div>

      <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Street:</strong>
            <p>{formData.address?.street}</p>
          </div>
          <div>
            <strong>City:</strong>
            <p>{formData.address?.city}</p>
          </div>
          <div>
            <strong>State:</strong>
            <p>{formData.address?.state}</p>
          </div>
          <div>
            <strong>Zip Code:</strong>
            <p>{formData.address?.zip}</p>
          </div>
          <div>
            <strong>Country:</strong>
            <p>{formData.address?.country}</p>
          </div>
        </div>
      </div>

      <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Emergency Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Name:</strong>
            <p>{formData.emergencyContact?.name}</p>
          </div>
          <div>
            <strong>Contact Number:</strong>
            <p>{formData.emergencyContact?.phone}</p>
          </div>
        </div>
      </div>

      <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {renderTable(formData.education, [
          "Degree",
          "Institution",
          "Percentage",
          "Pass Out Year",
        ])}
      </div>

      <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Trainings</h2>
        {renderTable(formData.trainings, [
          "Program",
          "Contents",
          "Organized By",
          "Duration",
        ])}
      </div>

      <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        {renderTable(formData.certifications, [
          "Certification Number",
          "Certification Name",
          "Duration",
        ])}
      </div>

      <div className="bg-white mb-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Family Members</h2>
        {renderTable(formData.familyMembers, [
          "Relation",
          "Occupation",
          "Location",
        ])}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleEdit}
          className="mr-4 py-2 px-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={handleSubmit}
          className="py-2 px-4 bg-green-500 text-white rounded shadow hover:bg-green-600 transition duration-200"
        >
          Final Submit
        </button>
      </div>
    </div>
  );
};

export default Overview;
