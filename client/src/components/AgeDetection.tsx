import React, { useState } from "react";
import { detectAgeRapidAPI } from "../services/apiService";
import { storage } from "../../firebaseConfig"; // Import the storage instance
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AiOutlineCloudUpload, AiOutlineCamera } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Loading icon

const AgeDetection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setPreviewURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please upload an image.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      // Upload the file to Firebase Storage
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);

      // Get the download URL
      const imageURL = await getDownloadURL(storageRef);

      // Send the imageURL to the detectAgeRapidAPI function
      const response = await detectAgeRapidAPI(imageURL);
      setResult(response.data);
    } catch (err) {
      setError("Error detecting age.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <h1 className="text-xl font-semibold mb-6 font-josefin">
          Ai Age Detector
        </h1>

        {/* Image Preview Area */}
        <div className="flex justify-center items-center mb-4">
          {previewURL ? (
            <img
              src={previewURL}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              Drag photo here
            </div>
          )}
        </div>
        <p className="text-gray-500 mb-4 font-josefin">
          Potrait picture recomended
        </p>
        <p className="text-gray-400 mb-4">— or —</p>

        {/* File Upload Buttons */}
        <div className="flex justify-center gap-4">
          <label className="flex flex-col items-center cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
            <AiOutlineCloudUpload className="text-2xl mb-1" />
            <span className="text-sm">Upload from computer</span>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </label>

          <button
            onClick={handleSubmit}
            className="flex flex-col items-center cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            <AiOutlineCamera className="text-2xl mb-1" />
            <span className="text-sm">Take a picture</span>
          </button>
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center mt-4 text-blue-500">
            <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
            <span className="ml-2">Detecting Age...</span>
          </div>
        )}

        {/* Result Display */}
        {result && (
          <div className="mt-6 bg-gray-900 text-green-400 p-4 rounded-lg text-left font-mono text-sm max-w-full overflow-auto">
            <p> Age Detection Result:</p>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default AgeDetection;
