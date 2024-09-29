import getDeviceType from "./getDeviceType";

const baseURL = import.meta.env.BASE_URL;

const generateImagePath = imageBasePath => {
  const { type, density } = getDeviceType();
  return `${baseURL}${imageBasePath}-${type}@${density}.webp`;
};

export default generateImagePath;
