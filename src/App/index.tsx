import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { CharacterList, Footer, Header } from "../components";
import { toCharacters } from "./routes";

const App = () => (
  <HashRouter>
    <Header>Rick and Morty app</Header>

    <main>
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
    </main>

    <Footer footerText="© 2022 | Coded by Karol Cieśluk" />
  </HashRouter>
);

export default App;
