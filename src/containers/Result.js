import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { getToken } from '../api';
import generateColors from '../generateColors';
import Palette from '../components/Palette';

const sampleResponse = {
  danceability: 0.739,
  energy: 0.611,
  key: 11,
  loudness: -9.829,
  mode: 1,
  speechiness: 0.0622,
  acousticness: 0.00557,
  instrumentalness: 0.725,
  liveness: 0.04,
  valence: 0.789,
  tempo: 98.004,
  type: 'audio_features',
  id: '2cmRpmO04TLaKPzmAzySYZ',
  uri: 'spotify:track:2cmRpmO04TLaKPzmAzySYZ',
  track_href: 'https://api.spotify.com/v1/tracks/2cmRpmO04TLaKPzmAzySYZ',
  analysis_url:
    'https://api.spotify.com/v1/audio-analysis/2cmRpmO04TLaKPzmAzySYZ',
  duration_ms: 536471,
  time_signature: 4
};

class Result extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <h1>Dance Yrself Clean</h1>
        <Palette colors={generateColors(sampleResponse)} />
      </div>
    );
  }
}

export default Result;
