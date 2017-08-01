import chroma from 'chroma-js';

const getBase = ({ energy, valence, danceability, loudness, mode, tempo }) => {
  // constrain to arcsin's domain (-1, 1)
  const hueVar = Math.min(Math.max(2 * valence + tempo / 200 - 1, -1), 1);
  // math.pow(...) / 18 makes values smaller than 320 smaller and bigger than 320 bigger
  const h = Math.pow(160 * Math.asin(hueVar) / Math.PI + 320, 1.5) / 18 % 360;
  const c = 35 * energy + 25 * danceability;
  // cbrt normalizes brightness so that colors don't get too muddy at low valences
  const l = 30 * Math.cbrt(10 + loudness + 12 * valence + 8 * danceability);

  // cool down songs in minor mode
  return mode === 0
    ? chroma.hcl((h + 225) / 2, c, l).hex()
    : chroma.hcl(h, c, l).hex();
};

const getScaleColors = color => {
  const [h, c, l] = chroma(color).hcl();
  const newL = l > 60 ? l - 10 : l + 10;
  return [
    chroma.hcl((h - 60) % 360, c, l).hex(),
    chroma.hcl((h + 60) % 360, c, newL).hex()
  ];
};

const generateColors = songInfo => {
  const base = getBase(songInfo);
  const scaleColors = getScaleColors(base);
  return chroma.scale(scaleColors).mode('hcl').colors(5);
};

export default generateColors;
