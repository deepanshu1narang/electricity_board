const baseUrl = 'http://localhost:3001';

const getHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};
export { baseUrl, getHeader };