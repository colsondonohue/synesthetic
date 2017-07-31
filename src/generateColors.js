import chroma from 'chroma-js';

const getMain = ({ acousticness, energy, valence, danceability }) => {
  const hueVar = acousticness >= 0.6 ? acousticness - 0.6 : acousticness + 0.4;
  const h = 720 * Math.asin(hueVar) / Math.PI;
  const c = 35 * (energy + danceability);
  const l = 100 * valence;

  return chroma.hcl(h, c, l).hex();
};

const getSecondary = color => {
  const [h, c, l] = chroma(color).hcl();
  return chroma.hcl((h + 180) % 360, c, l).hex();
};

const generateColors = songInfo => {
  const main = getMain(songInfo);
  const secondary = getSecondary(main);
  return chroma.scale([main, secondary]).mode('hcl').colors(5);
};

export default generateColors;
