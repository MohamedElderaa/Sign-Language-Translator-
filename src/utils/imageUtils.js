import { SIGN_IMAGES } from '../constants/signImages';

/**
 * Check if a character has a corresponding sign image
 * @param {string} char - The character to check
 * @returns {boolean} - Whether the character has a sign image
 */
export const hasSignImage = (char) => {
  const lowerChar = char.toLowerCase();
  return lowerChar in SIGN_IMAGES;
};

/**
 * Get the sign image path for a character
 * @param {string} char - The character to get the sign for
 * @returns {string|null} - The image path or null if not found
 */
export const getSignImagePath = (char) => {
  const lowerChar = char.toLowerCase();
  return hasSignImage(lowerChar) ? SIGN_IMAGES[lowerChar] : null;
};