const baseUrl = 'https://electricity-board-backend.onrender.com';

const getHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};
export { baseUrl, getHeader };