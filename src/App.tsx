import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import CharacterList from "./CharacterList";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
