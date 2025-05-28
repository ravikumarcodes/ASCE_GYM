import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register user
export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Login user
export const loginUser = async (userData) => {
  const response = await api.post('/auth/login', userData);
  return response.data;
};

// Get protected profile (requires token)
export const getUserProfile = async (token) => {
  const response = await api.get('/protected/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
