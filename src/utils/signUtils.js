import { SIGN_IMAGES } from '../constants/signImages';
import { COMMON_SIGNS } from '../constants/commonSigns';

export const hasCommonSign = (word) => {
  const lowerWord = word.toLowerCase().trim();
  return lowerWord in COMMON_SIGNS;
};

export const getCommonSignPath = (word) => {
  const lowerWord = word.toLowerCase().trim();
  return hasCommonSign(lowerWord) ? COMMON_SIGNS[lowerWord] : null;
};

export const hasSignImage = (char) => {
  const lowerChar = char.toLowerCase();
  return lowerChar in SIGN_IMAGES;
};

export const getSignImagePath = (char) => {
  const lowerChar = char.toLowerCase();
  return hasSignImage(lowerChar) ? SIGN_IMAGES[lowerChar] : null;
};