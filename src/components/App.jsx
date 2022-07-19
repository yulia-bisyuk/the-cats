import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const VotingPage = lazy(() => import("../pages/VotingPage/VotingPage"));
const ReactionsPage = lazy(() =>
  import("../pages/ReactionsPage/ReactionsPage")
);
const FavouritesPage = lazy(() =>
  import("../pages/FavouritesPage/FavouritesPage")
);

const SearchForBreedsPage = lazy(() =>
  import("../pages/SearchForBreedsPage/SearchForBreedsPage")
);

const BreedInfoPage = lazy(() =>
  import("../pages/BreedInfoPage/BreedInfoPage")
);

const BreedsPage = lazy(() =>
  import("../pages/BreedsPage/BreedsPage")
);

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="voting" element={<VotingPage />} />
          <Route exact path="likes" element={<ReactionsPage />} />
          <Route exact path="dislikes" element={<ReactionsPage />} />
          <Route exact path="favourites" element={<FavouritesPage />} />
          <Route
            exact
            path="breeds-search-by-name"
            element={<SearchForBreedsPage />}
          />
          <Route exact path="breeds" element={<BreedsPage />} />
          {/* поправити адресу на breeds/info */}
          <Route exact path="info" element={<BreedInfoPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};
