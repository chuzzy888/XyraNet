// ContentModeration.tsx
// import React, { useState } from "react";
// import { moderateContent } from "../services/apiService";

// const ContentModeration = () => {
//   const [text, setText] = useState<string>("");
//   const [result, setResult] = useState<any>(null);
//   const [error, setError] = useState<string>("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!text) {
//       setError("Please enter some text.");
//       return;
//     }
//     try {
//       const response = await moderateContent(text);
//       setResult(response.data);
//       setError("");
//     } catch (err) {
//       setError("Error moderating content.");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Content Moderation</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={text}
//           onChange={handleInputChange}
//           placeholder="Enter text to moderate"
//         />
//         <button type="submit" className="bg-blue-500">
//           Moderate Content
//         </button>
//       </form>
//       {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default ContentModeration;

// import React, { useState } from "react";
// import { moderateContent } from "../services/apiService";

// const ContentModeration = () => {
//   const [text, setText] = useState<string>("");
//   const [guardianEmail, setGuardianEmail] = useState<string>(""); // New state for guardian email
//   const [result, setResult] = useState<any>(null);
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!text || !guardianEmail) {
//       setError("Please enter some text and provide a guardian email.");
//       return;
//     }
//     try {
//       const response = await moderateContent(text, guardianEmail); // Pass guardianEmail to the API
//       setResult(response.data);
//       setError("");
//     } catch (err) {
//       setError("Error moderating content.");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <h2>Content Moderation</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={text}
//           onChange={e => setText(e.target.value)}
//           placeholder="Enter text to moderate"
//         />
//         <input
//           type="email"
//           value={guardianEmail}
//           onChange={e => setGuardianEmail(e.target.value)}
//           placeholder="Enter guardian email"
//           required
//         />
//         <button type="submit" className="bg-blue-500">
//           Moderate Content
//         </button>
//       </form>
//       {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default ContentModeration;

import React, { useState } from "react";
import { moderateContent } from "../services/apiService";
import { FiSend, FiMail, FiLoader } from "react-icons/fi";

const ContentModeration = () => {
  const [text, setText] = useState<string>("");
  const [guardianEmail, setGuardianEmail] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Loader state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text || !guardianEmail) {
      setError("Please enter some text and provide a guardian email.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await moderateContent(text, guardianEmail); // Pass guardianEmail to the API
      setResult(response.data);
      setError("");
    } catch (err) {
      setError("Error moderating content.");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="m-5  p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Content Moderation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Guardian Email Input */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <FiMail className="text-gray-500 mr-3" />
          <input
            type="email"
            value={guardianEmail}
            onChange={e => setGuardianEmail(e.target.value)}
            placeholder="Enter guardian email"
            required
            className="w-full bg-transparent text-gray-700 focus:outline-none"
          />
        </div>

        {/* Text Input for Moderation */}
        <div className="flex items-center border-b border-gray-300 py-2">
          <FiSend className="text-gray-500 mr-3" />
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text to moderate"
            required
            className="w-full bg-transparent text-gray-700 focus:outline-none resize-none h-24"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center"
        >
          {loading ? (
            <FiLoader className="animate-spin mr-2" />
          ) : (
            "Moderate Content"
          )}
        </button>
      </form>

      {/* Result Display */}
      {loading && (
        <p className="mt-4 text-center text-gray-500 font-medium">
          Moderating...
        </p>
      )}
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold text-gray-700">Moderation Result:</h3>
          <pre className="text-gray-600 mt-2">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default ContentModeration;
