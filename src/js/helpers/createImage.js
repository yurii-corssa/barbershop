import generateImagePath from "./generateImagePath";

const createImage = (src, alt) => {
  const imgElement = document.createElement("img");
  const imgUrl = generateImagePath(src);
  imgElement.alt = alt;
  imgElement.src = imgUrl;

  return imgElement;
};

export default createImage;
