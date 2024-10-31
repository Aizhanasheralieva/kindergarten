import Toolbar from "./components/Toolbar/Toolbar.tsx";
import { Route, Routes } from "react-router-dom";
import SummaryPage from "./components/SummaryPage/SummaryPage.tsx";
import Admin from "./containers/Admin/Admin.tsx";
import EditPageContainer from "./containers/EditPageContainer/EditPageContainer.tsx";

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <Routes>
            <Route path="/home" element={<SummaryPage />} />
            <Route path="/pages/admin" element={<Admin />} />
            <Route path="/pages/:id" element={<SummaryPage />} />
            <Route path="/pages/:pageId/edit" element={<EditPageContainer />} />
            <Route path="*" element={<h3>Page not found</h3>} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
