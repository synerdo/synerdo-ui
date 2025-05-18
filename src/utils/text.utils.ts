export const toFirstCapital = (str: string): string => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const getHexColors = (str: string): [string, string] => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = Math.abs(hash) % 360;
  const s = 60 + (Math.abs(hash) % 20);
  const l = 50 + (Math.abs(hash) % 10);

  const color1 = `hsl(${h}, ${s}%, ${l}%)`;
  const color2 = `hsl(${(h + 20) % 360}, ${s}%, ${l - 10}%)`;

  return [color1, color2];
};
