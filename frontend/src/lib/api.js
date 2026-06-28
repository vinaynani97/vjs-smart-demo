import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const submitInquiry = async (payload) => {
  const { data } = await axios.post(`${API}/inquiries`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};
