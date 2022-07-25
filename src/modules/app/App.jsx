import { Directory } from "../components/directory/Directory";

import Categories from "../components/categories.json";

export const App = () => {
  return (
    <>
      <Directory categories={Categories} />
    </>
  );
};
