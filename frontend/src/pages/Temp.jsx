import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Temp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize formData with default values or data passed via location.state
  const [formData, setFormData] = useState(
    location.state?.formData || {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      dateOfBirth: "",
      permanentAddress: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      },
      emergencyContact: {
        name: " ",
        phone: "",
      },
      relocation: true,
      education: [
        {
          school: " ",
          qualification: "",
          percentage: "",
          passOutYear: "",
        },
      ],
      trainings: [
        {
          program: "",
          contents: "",
          organizedBy: "",
          duration: "",
        },
      ],
      certifications: [{ srNo: "", certification: "", duration: "" }],
      familyMembers: [{ relation: "", occupation: "", location: "" }],
    }
  );

  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");

    if (nameParts.length > 1) {
      // Nested structure (like permanentAddress)
      setFormData((prevData) => ({
        ...prevData,
        [nameParts[0]]: {
          ...prevData[nameParts[0]],
          [nameParts[1]]: value, // Update the specific property inside permanentAddress
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // For flat properties
      }));
    }
  };

  const handleArrayChange = (e, arrayName, index) => {
    const { name, value } = e.target;
    const newArray = [...formData[arrayName]];
    newArray[index] = { ...newArray[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: newArray,
    }));
  };

  const handleAddNew = (arrayName) => {
    const newItem =
      arrayName === "education"
        ? {
            school: "",
            qualification: "",
            percentage: "",
            passOutYear: "",
          }
        : arrayName === "trainings"
        ? { program: "", contents: "", organizedBy: "", duration: "" }
        : arrayName === "certifications"
        ? { srNo: "", certification: "", duration: "" }
        : { relation: "", occupation: "", location: "" };

    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: [...prevData[arrayName], newItem],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/overview", { state: { formData } });
  };

  return (
    <div className="container mx-auto ">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="min-h-screen bg-gradient-to-b bg-gray-100 p-8 from-blue-50 to-blue-100">
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Onboarding Form
              </h1>

              {/* Personal Information */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Personal Information
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName} // This binds the value to the state
                      onChange={handleInputChange} // This calls handleInputChange on input change
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Middle Name
                    </label>
                    <input
                      name="middleName"
                      type="text"
                      value={formData.middleName || ""} // Use empty string for undefined values
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName} // Bind value to formData
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth} // Bind value to formData
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      name="age"
                      type="number"
                      value={formData.age} // Bind value to formData
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender} // Bind value to formData
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Address Information */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Permanent Address
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Street
                    </label>
                    <input
                      name="permanentAddress.street"
                      type="text"
                      value={formData.permanentAddress.street} // Bind to formData.permanentAddress.street
                      onChange={handleInputChange} // Use handleInputChange to update state
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      name="permanentAddress.city"
                      type="text"
                      value={formData.permanentAddress.city} // Bind to formData.permanentAddress.city
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      name="permanentAddress.state"
                      type="text"
                      value={formData.permanentAddress.state} // Bind to formData.permanentAddress.state
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <input
                      name="permanentAddress.zipCode"
                      type="text"
                      value={formData.permanentAddress.zipCode} // Bind to formData.permanentAddress.zipCode
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      name="permanentAddress.country"
                      type="text"
                      value={formData.permanentAddress.country} // Bind to formData.permanentAddress.country
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Emergency Contact */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Emergency Contact
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      name="emergencyContact.name"
                      type="text"
                      value={formData.emergencyContact.name} // Bind to formData.emergencyContact.name
                      onChange={handleInputChange} // Call handleInputChange to update state
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <input
                      name="emergencyContact.phone"
                      type="tel"
                      value={formData.emergencyContact.phone} // Bind to formData.emergencyContact.phone
                      onChange={handleInputChange} // Call handleInputChange to update state
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Education */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Education
                </legend>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="px-2">
                      <th className="px-4 py-2 text-sm font-medium border-gray-300 text-gray-700">
                        Degree
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Institution
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Percentage
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Pass Out Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.education.map((edu, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="degree"
                            type="text"
                            value={edu.degree} // Bind to edu.degree
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="institution"
                            type="text"
                            value={edu.institution} // Bind to edu.institution
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="percentage"
                            type="number"
                            value={edu.percentage} // Bind to edu.percentage
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="passOutYear"
                            type="text"
                            value={edu.passOutYear} // Bind to edu.passOutYear
                            onChange={(e) =>
                              handleArrayChange(e, "education", index)
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("education")}
                  className="mt-4 text-blue-500"
                >
                  Add Education
                </button>
              </fieldset>

              {/* Trainings Table */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Training
                </legend>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="">
                      <th className="px-4 py-2 border text-sm font-medium border-gray-300 text-gray-700">
                        Training Program
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Contents
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Organized By
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.trainings.map((train, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="program"
                            type="text"
                            value={train.program} // Bind to train.program
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            } // Update the correct item
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="contents"
                            type="text"
                            value={train.contents} // Bind to train.contents
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            } // Update the correct item
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="organizedBy"
                            type="text"
                            value={train.organizedBy} // Bind to train.organizedBy
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            } // Update the correct item
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="duration"
                            type="text"
                            value={train.duration} // Bind to train.duration
                            onChange={(e) =>
                              handleArrayChange(e, "trainings", index)
                            } // Update the correct item
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("trainings")} // Add a new training entry
                  className="mt-4 text-blue-500"
                >
                  Add Training
                </button>
              </fieldset>

              {/* Certifications Table */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Certifications
                </legend>
                <table className="table-auto w-full border-collapse border text-gray-700 border-gray-300">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Certification Number
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Certification Name
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.certifications.map((cert, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="srNo"
                            type="text"
                            value={cert.srNo} // Bind to cert.srNo
                            onChange={
                              (e) =>
                                handleArrayChange(e, "certifications", index) // Update the corresponding certification
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="certification"
                            type="text"
                            value={cert.certification} // Bind to cert.certification
                            onChange={
                              (e) =>
                                handleArrayChange(e, "certifications", index) // Update the corresponding certification
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="duration"
                            type="text"
                            value={cert.duration} // Bind to cert.duration
                            onChange={
                              (e) =>
                                handleArrayChange(e, "certifications", index) // Update the corresponding certification
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("certifications")} // Add a new certification entry
                  className="mt-4 text-blue-500"
                >
                  Add Certification
                </button>
              </fieldset>

              {/* Family Members Table */}
              <fieldset className="border border-gray-300 p-4 rounded-md">
                <legend className="text-lg font-semibold text-gray-600 px-2">
                  Family Members
                </legend>
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Relation
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Occupation
                      </th>
                      <th className="px-4 py-2 border text-sm font-medium text-gray-700 border-gray-300">
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.familyMembers.map((fam, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="relation"
                            type="text"
                            value={fam.relation} // Bind to the `relation` field
                            onChange={
                              (e) =>
                                handleArrayChange(e, "familyMembers", index) // Update family member's relation
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="occupation"
                            type="text"
                            value={fam.occupation} // Bind to the `occupation` field
                            onChange={
                              (e) =>
                                handleArrayChange(e, "familyMembers", index) // Update family member's occupation
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <input
                            name="location"
                            type="text"
                            value={fam.location} // Bind to the `location` field
                            onChange={
                              (e) =>
                                handleArrayChange(e, "familyMembers", index) // Update family member's location
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={() => handleAddNew("familyMembers")} // Add a new family member entry
                  className="mt-4 text-blue-500"
                >
                  Add Family Member
                </button>
              </fieldset>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="py-2 px-6 bg-gray-900 text-white rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-75"
                >
                  Save & next
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Temp;
