import "./CategoryItem.scss";

const CategoryItem = ({ id, title, imageUrl }) => {
  return (
    <>
      <div className="category-container" key={id}>
        <img src={imageUrl} alt={title} />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    </>
  );
};

export { CategoryItem };
