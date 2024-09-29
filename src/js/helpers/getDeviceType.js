const getDeviceType = () => {
  const screenWidth = window.innerWidth;
  const devicePixelRatio = window.devicePixelRatio || 1;

  let density = "1x";
  if (devicePixelRatio >= 3) density = "3x";
  else if (devicePixelRatio >= 2) density = "2x";

  if (screenWidth < 768) {
    return { type: "mobile", density };
  } else if (screenWidth >= 768 && screenWidth < 1280) {
    return { type: "tablet", density };
  } else {
    return { type: "desktop", density };
  }
};

export default getDeviceType;
