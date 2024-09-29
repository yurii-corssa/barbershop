import getDeviceType from "./getDeviceType";

const baseURL = import.meta.env.BASE_URL;
const isProduction = import.meta.env.PROD;

const generateImagePath = imageBasePath => {
  const { type, density } = getDeviceType();

  console.log("first", import.meta.env);

  if (isProduction) {
    return `${baseURL}assets/${imageBasePath
      .split("/")
      .pop()}-${type}@${density}.webp`;
  } else {
    return `${baseURL}${imageBasePath}-${type}@${density}.webp`;
  }
};

export default generateImagePath;
