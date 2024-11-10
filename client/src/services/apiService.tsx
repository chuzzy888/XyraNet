import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust for your backend URL

// Upload file function with parameter typing
export const uploadFile = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Age detection function using RapidAPI with image URL typing
export const detectAgeRapidAPI = async (imageURL: string): Promise<any> => {
  return axios.post(`${API_BASE_URL}/detect-age-rapidapi`, { imageURL });
};

// // NSFW detection function with file parameter typing
// export const detectNsfw = async (file: File): Promise<any> => {
//   const formData = new FormData();
//   formData.append("file", file);

//   return axios.post(`${API_BASE_URL}/detect-nsfw`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

// // Content Moderation function with text parameter typing
// export const moderateContent = async (text: string): Promise<any> => {
//   return axios.post(`${API_BASE_URL}/moderate-content`, { text });
// };

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
