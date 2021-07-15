import jwt_decode from 'jwt-decode';

const getAuthToken = () => {
  const token = localStorage.getItem('accessToken');
  const decoded = jwt_decode(token);
  console.log(decoded);

  return token;
}

export default getAuthToken;