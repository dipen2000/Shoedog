const shortenProductName = (name) => {
  if (name.length > 21) {
    return name.slice(0, 21) + "...";
  } else {
    return name;
  }
};

export { shortenProductName };
