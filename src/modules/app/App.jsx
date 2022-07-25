import { Routes, Route } from "react-router-dom";

import { Home } from "../routes/home/Home";
import { Navigation } from "../routes/navigation/Navigation";

const Shop = () => {
  return (
    <>
      <h1>I am a Shop page</h1>
    </>
  );
};

export const App = () => {
  return (
    <>
      <Routes>
        {/* Ось це буде на всіх роутах */}
        <Route path="/" element={<Navigation />}>
          {/* index позначає домашню сторінку(основну) */}
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};
