import {Route, Routes} from "react-router-dom";
import HomePage from "Components/Homepage";
import ArtworkDetailPage from "Components/ArtworkDetailPage";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artwork-detail-page/:id" element={<ArtworkDetailPage />} />
    </Routes>
  );
};

export default RoutePage;
