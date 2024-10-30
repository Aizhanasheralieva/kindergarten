import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/AboutUs/AboutUs.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container mt-4">
          <div className="row">
              <Routes>
                  <Route path="/" element={ <Home />} />
                  <Route path="/about" element={ <About /> } />
                  <Route path="/contacts" element={ <Contacts /> } />
                  <Route path="*" element={<h3>Page not found</h3>}/>
              </Routes>
          </div>
      </main>
    </>
  );
};

export default App;
