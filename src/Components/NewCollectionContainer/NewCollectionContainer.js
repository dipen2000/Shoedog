import "./newCollectionContainer.css";
import { Collection } from "../Collection/Collection";

const NewCollectionContainer = () => {
  return (
    <div className="new-collection-container">
      <h2>New collections</h2>
      <div className="flex-row">
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </div>
    </div>
  );
};

export { NewCollectionContainer };
