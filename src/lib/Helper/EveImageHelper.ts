const BASE_URL = 'https://image.eveonline.com/';

const AVAILABLE_WIDTHS = [
  32,
  64,
  128,
  256,
  512,
];

export function allianceIcon(allianceId: number, width: number) {
  return `${BASE_URL}/Alliance/${allianceId}_${width}.png`;
}

export function corporationIcon(corpId: number, width: number) {
  return `${BASE_URL}/Corporation/${corpId}_${width}.png`;
}

export function characterIcon(characterId: number, width: number) {
  return `${BASE_URL}/Character/${characterId}_${width}.jpg`;
}
