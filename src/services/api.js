import axios from '../axiosConfig';

const API = axios.create({
  baseURL: 'http://localhost:8081', // Backend base URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('authToken');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const register = (data) => API.post('/users/register', data);
export const login = (data) => API.post('/users/login', data);
export const postDoubt = (data) => API.post('/doubts', data);
export const fetchDoubts = () => API.get('/doubts');
export const placeBid = (doubtId, data) => API.post(`/doubts/${doubtId}/bids`, data);
export const getBids = (doubtId) => API.get(`/doubts/${doubtId}/bids`);
export const acceptBid = (doubtId, bidId) => API.patch(`/doubts/${doubtId}/accept`, { bidId });
