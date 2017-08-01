import chroma from 'chroma-js';

const getMain = ({
  acousticness,
  energy,
  valence,
  danceability,
  loudness,
  mode
}) => {
  const h = 720 * Math.asin((acousticness + 0.3) % 1) / Math.PI;
  const c = 30 * (energy + danceability);
  // cbrt normalizes brightness so that colors don't get too muddy at low valences
  const l = 30 * Math.cbrt(10 + loudness + 20 * valence);

  console.log({
    acousticness,
    energy,
    valence,
    danceability,
    loudness,
    mode
  });
  console.log(`hcl: ${h} ${c} ${l}`);
  // cool down songs in minor mode
  return mode === 0
    ? chroma.hcl((h + 225) / 2, c, l).hex()
    : chroma.hcl(h, c, l).hex();
};

const getSecondary = color => {
  const [h, c, l] = chroma(color).hcl();
  const newL = l > 60 ? l - 10 : l + 10;
  return chroma.hcl((h + 120) % 360, c, newL).hex();
};

const generateColors = songInfo => {
  const main = getMain(songInfo);
  const secondary = getSecondary(main);
  return chroma.scale([main, secondary]).mode('hcl').colors(5);
};

export default generateColors;
