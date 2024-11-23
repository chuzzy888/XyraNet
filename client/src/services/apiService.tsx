import axios from "axios";

// const API_BASE_URL = "http://localhost:5000/api";
// const API_BASE_URL = "https://xyranetserver.onrender.com/api";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Upload file function with parameter typing
export const uploadFile = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.log("18", error);
  }
};

// Age detection function using RapidAPI with image URL typing
export const detectAgeRapidAPI = async (imageURL: string): Promise<any> => {
  return axios.post(`${API_BASE_URL}/detect-age-rapidapi`, { imageURL });
};

// NSFW detection function with file and guardian email parameter
export const detectNsfw = async (
  file: File,
  guardianEmail: string
): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("guardianEmail", guardianEmail);

  return axios.post(`${API_BASE_URL}/detect-nsfw`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Content Moderation function with text and guardian email parameter
export const moderateContent = async (
  text: string,
  guardianEmail: string
): Promise<any> => {
  return axios.post(`${API_BASE_URL}/moderate-content`, {
    text,
    guardianEmail,
  });
};
