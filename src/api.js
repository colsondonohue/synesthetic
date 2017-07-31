import queryString from 'query-string';
import axios from 'axios';

const authorize = id => {
  const baseUri =
    process.env.NODE_ENV === 'production'
      ? 'https://synesthetic.com'
      : 'http://localhost:3000';
  window.location = `https://accounts.spotify.com/authorize?client_id=${id}&redirect_uri=${baseUri}/search&response_type=token`;
};

const getToken = () => {
  const { access_token } = queryString.parse(window.location.hash);
  return access_token;
};

const searchSongs = async (token, song) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${song}&type=track&limit=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const formatSong = song => ({
    thumbnail: song.album.images[2].url, // 64 x 64 image size
    artist: song.artists[0].name, // ignore features/other artists
    name: song.name,
    id: song.id
  });

  const formatSongs = songs => {
    if (songs.length === 0) return songs;
    return songs.map(formatSong);
  };

  return response.data.tracks ? formatSongs(response.data.tracks.items) : [];
};

export default authorize;
export { getToken, searchSongs };
