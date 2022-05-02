import "./Page404.css";
import { ShoedogContainer } from "../../Components/Wrapper/ShoedogContainer";
const Page404 = () => {
  return (
    <ShoedogContainer>
      <div className="page404-container flex-col align-center-flex justify-center-flex">
        <h2>Whoops! something went wrong, page not found</h2>
        <h3>Status : 404</h3>
        <h1>🙄</h1>
      </div>
    </ShoedogContainer>
  );
};

export { Page404 };
