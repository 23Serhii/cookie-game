const API_URL = 'https://befc-37-57-235-242.ngrok-free.app';

export const fetchCookies = async () => {
  const response = await fetch(`${API_URL}/cookies`);
  const data = await response.json();
  return data;
};