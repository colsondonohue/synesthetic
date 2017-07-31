import React from 'react';
import styled from 'styled-components';
import PropTypes from 'proptypes';

const propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

const Thumbnail = styled.img`
  width: 64;
  height: 64;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistText = styled.p`
  font-size: 0.6em;
  text-align: right;
  color: slategrey;
`;

const SongText = styled.p`
  font-size: 1em;
  text-align: right;
  color: black;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid slategrey;
  justify-content: space-between;
  padding: 0.5em;
  cursor: pointer;
`;

const SearchItem = ({ song, onClick }) =>
  <ItemContainer onClick={onClick} id={song.id} title={song.name}>
    <Thumbnail src={song.thumbnail} alt={`${song.name} album art`} />
    <InfoContainer>
      <SongText>
        {song.name}
      </SongText>
      <ArtistText>
        {song.artist}
      </ArtistText>
    </InfoContainer>
  </ItemContainer>;

const SearchItems = ({ songs, onClick }) =>
  <div>
    {songs.map(song =>
      <SearchItem song={song} key={song.id} onClick={onClick} />
    )}
  </div>;

SearchItems.propTypes = propTypes;

export default SearchItems;
