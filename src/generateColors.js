import chroma from 'chroma-js';

const getMain = ({ acousticness, energy, valence, danceability, mode }) => {
  const h = 1440 * Math.asin(acousticness) / Math.PI % 360;
  const c = 30 * (energy + danceability);
  // sqrt normalizes brightness so that colors don't get too muddy at low valences
  const l = 90 * Math.sqrt(valence);

  const main = chroma.hcl(h, c, l).hex();
  // cool down songs in minor mode
  return mode === 1 ? chroma.mix(main, '#1b6ec2', 0.4, 'hcl') : main;
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
