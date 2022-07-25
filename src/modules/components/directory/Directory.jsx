import { CategoryItem } from "../category-item/CategoryItem";

import "./Directory.scss";

const Directory = ({ categories }) => {
  return (
    <>
      <div className="directory-container">
        {categories.map(category => {
          return <CategoryItem {...category} key={category.id} />;
        })}
      </div>
    </>
  );
};

export { Directory };
