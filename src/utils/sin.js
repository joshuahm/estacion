/**
 *
 * @param {number} min
 * @param {number} max
 * @param {number} val
 */
export function sinBetween(min, max, val) {
  let middle = (max - min) / 2;
  let result = min + middle + Math.sin(val) * middle;
  return result;
}

/**
 *
 * @param {number} totalPhases
 * @param {number} totalWaves
 * @param {number} min
 * @param {number} max
 * @param {number} val
 */
export function sinCurves(totalPhases, totalWaves, min, max, val) {
  let middle = (max - min) / 2;
  var result = Math.sin(val * ((Math.PI * totalWaves) / totalPhases));
  result = min + middle + result * middle;
  return result;
}
