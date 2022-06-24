import { NikeLogo, AdidasLogo, ReebokLogo, PumaLogo } from "../assets";
const getTheCategoryLogo = (category, isCategorySelected) => {
  switch (category) {
    case "Nike":
      return <NikeLogo isCategorySelected={isCategorySelected} />;
    case "Adidas":
      return <AdidasLogo isCategorySelected={isCategorySelected} />;
    case "Puma":
      return <PumaLogo isCategorySelected={isCategorySelected} />;
    case "Reebok":
      return <ReebokLogo isCategorySelected={isCategorySelected} />;
    default:
      return;
  }
};

export { getTheCategoryLogo };
