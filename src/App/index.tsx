import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { CharacterList, Header } from "../components";

const App = () => (
  <HashRouter>
    <Header>Rick and Morty app</Header>

    <main>
      <Routes>
        <Route
          path="characters"
          element={<CharacterList />}
        />
        <Route
          path="*"
          element={<Navigate to="characters" />}
        />
      </Routes>
    </main>
  </HashRouter>
);

export default App;
