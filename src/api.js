import queryString from 'query-string';

const authorize = (id) => {
  const baseUri = process.env.NODE_ENV === 'production' ?
    'https://synesthetic.com' : 'http://localhost:3000';
  window.location = `https://accounts.spotify.com/authorize?client_id=${id}&redirect_uri=${baseUri}/home&response_type=token`;
};

const getToken = () => {
  const { access_token } = queryString.parse(window.location.hash);
  return access_token;
}

export default authorize;
export { getToken };
