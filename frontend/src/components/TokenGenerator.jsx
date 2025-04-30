import React, { useState } from "react";
import {
  FiCopy,
  FiSend,
  FiTrash,
  FiEdit,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const TokenUI = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tokens, setTokens] = useState([
    { id: 1, token: "12345-ABCDE", status: "Unused" },
    { id: 2, token: "67890-FGHIJ", status: "Unused" },
    { id: 3, token: "11223-KLMNO", status: "Used" },
    { id: 4, token: "44556-PQRST", status: "Unused" },
  ]);
  const [users] = useState([
    {
      id: 1,
      Token: "12345-ABCDE",
      application: "Application 1",
      status: "Verified",
    },
    {
      id: 2,
      Token: "67890-FGHIJ",
      application: "Application 2",
      status: "Pending",
    },
    {
      id: 3,
      Token: "44556-PQRST",
      application: "Application 3",
      status: "Verified",
    },
  ]);

  const [isUnusedTokensOpen, setIsUnusedTokensOpen] = useState(false);

  const handleGenerateToken = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomToken = Math.random().toString(36).substr(2, 8).toUpperCase();
      setToken(randomToken);
      setIsLoading(false);
    }, 1000);
  };

  const handleCopyToken = () => {
    if (token) {
      navigator.clipboard.writeText(token);
      alert("Token copied to clipboard!");
    }
  };

  const handleSendToken = () => {
    if (!email) {
      alert("Please enter an email to send the token.");
      return;
    }
    alert(`Token "${token}" sent to ${email}`);
  };

  const unusedTokens = tokens.filter((token) => token.status === "Unused");

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 p-8">Token Management</h1>
      <div className="p-6 flex flex-col items-center space-y-8">
        {/* Token Overview Table */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
          {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Tokens Overview
          </h2> */}
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-100">
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                  Token
                </th>
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                  Status
                </th>
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                  Application
                </th>
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`transition hover:bg-indigo-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {user.Token}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Verified"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {user.application}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-4">
                      <button className="text-indigo-500 hover:text-indigo-600">
                        <FiEdit className="text-xl" />
                      </button>
                      <button className="text-red-500 hover:text-red-600">
                        <FiTrash className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Unused Tokens and Token Generator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Unused Tokens */}
          <div className="bg-white shadow-md rounded-lg p-6 h-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
              Unused Tokens
              <button
                onClick={() => setIsUnusedTokensOpen(!isUnusedTokensOpen)}
              >
                {isUnusedTokensOpen ? (
                  <FiChevronUp className="text-xl text-gray-500" />
                ) : (
                  <FiChevronDown className="text-xl text-gray-500" />
                )}
              </button>
            </h2>
            {isUnusedTokensOpen && (
              <>
                {unusedTokens.length > 0 ? (
                  unusedTokens.slice(0, 3).map((token) => (
                    <div
                      key={token.id}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-2"
                    >
                      <span className="text-gray-700 font-medium text-sm">
                        {token.token}
                      </span>
                      <div className="flex space-x-4">
                        <button
                          className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center"
                          onClick={() =>
                            navigator.clipboard.writeText(token.token)
                          }
                        >
                          <FiCopy className="mr-1" /> Copy
                        </button>
                        <button
                          className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center"
                          onClick={() =>
                            setTokens(tokens.filter((t) => t.id !== token.id))
                          }
                        >
                          <FiTrash className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No unused tokens available.</p>
                )}
                {unusedTokens.length > 3 && (
                  <p className="text-center text-gray-500">
                    {unusedTokens.length - 3} more unused tokens...
                  </p>
                )}
              </>
            )}
          </div>

          {/* Token Generator */}
          <div className="rounded-lg p-6 h-full">
            {!token ? (
              <button
                onClick={handleGenerateToken}
                className={`w-full py-3 text-lg font-medium text-white rounded-lg transition ${
                  isLoading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {isLoading ? "Generating..." : "Generate Token"}
              </button>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    value={token}
                    readOnly
                    className="w-48 px-4 py-2 border border-gray-300 rounded-lg text-center text-lg font-mono font-semibold text-gray-800"
                  />
                  <button
                    onClick={handleCopyToken}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiCopy className="text-xl" />
                  </button>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleSendToken}
                    className="w-full py-3 text-white rounded-lg bg-green-600 hover:bg-green-700"
                  >
                    Send Token
                  </button>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenUI;
