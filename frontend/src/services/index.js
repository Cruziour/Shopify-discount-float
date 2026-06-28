import { axiosInstance } from "../api/index.js";

export const sendAnnouncementTextService = async (announcementText) => {
  console.log(announcementText);
  try {
    const { data } = await axiosInstance.post("/api/v1/announcement/text", {
      announcementText,
    });
    return data;
  } catch (error) {
    console.error(
      "sendAnnouncementTextService error:",
      error.response?.data || error.message,
    );
    throw error;
  }
};
