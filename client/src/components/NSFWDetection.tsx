import React, { useState } from "react";
import { detectNsfw } from "../services/apiService";
import { FiUpload, FiMail, FiLoader } from "react-icons/fi";

const NSFWDetection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // For image preview
  const [guardianEmail, setGuardianEmail] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Loader state

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // Generate preview URL
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !guardianEmail) {
      setError("Please upload a file and provide a guardian email.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const response = await detectNsfw(file, guardianEmail);
      setResult(response.data);
      setError("");
    } catch (err) {
      setError("Error detecting NSFW content.");
      console.error(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="m-5 p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        NSFW Detection
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

        {/* File Upload and Preview */}
        <div className="border border-dashed border-gray-400 rounded-lg p-4 text-center relative">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-48 object-cover rounded-md"
            />
          ) : (
            <div className="text-gray-400">
              <FiUpload className="mx-auto text-4xl mb-2" />
              <p>Upload an image file</p>
            </div>
          )}
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 flex items-center justify-center"
        >
          {loading ? <FiLoader className="animate-spin mr-2" /> : "Detect NSFW"}
        </button>
      </form>

      {/* Result Display */}
      {loading && (
        <p className="mt-4 text-center text-gray-500 font-medium">
          Detecting...
        </p>
      )}
      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold text-gray-700">Detection Result:</h3>
          <pre className="text-gray-600 mt-2">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default NSFWDetection;
