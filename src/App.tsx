import Toolbar from "./components/Toolbar/Toolbar.tsx";
import {Route, Routes} from "react-router-dom";
import SummaryPage from "./components/SummaryPage/SummaryPage.tsx";
import Admin from "./components/Admin/Admin.tsx";

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container mt-4">
          <div className="row">
              <Routes>
                  <Route path="/"  element={ <SummaryPage/>} />
                  <Route path="/admin" element={ <Admin />} />
                  <Route path="/pages/:id" element={ <SummaryPage/> } />
                  <Route path="*" element={<h3>Page not found</h3>} />
              </Routes>
          </div>
      </main>
    </>
  );
};

export default App;
