const getSizeArr = (sizesArr, size) => {
  if (sizesArr.includes(size)) {
    return [...sizesArr].filter((item) => item !== size);
  } else {
    return [...sizesArr].concat(size);
  }
};

export { getSizeArr };
