import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const Page = () => {
  return (
    <main className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default Page;
