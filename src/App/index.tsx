import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { CharacterList, Layout } from "../components";
import { toCharacters } from "./routes";

const App = () => (
  <HashRouter>
    <Layout>
      <Routes>
        <Route
          path={toCharacters()}
          element={<CharacterList />}
        />
        <Route
          path="*"
          element={<Navigate to={toCharacters()} />}
        />
      </Routes>
    </Layout>
  </HashRouter>
);

export default App;
