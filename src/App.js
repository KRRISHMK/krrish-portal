import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "rsuite/dist/rsuite.min.css";
import "../src/scss/style.scss"
import ItemDetail from "./pages/ItemDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout exact path="/" component={Home} />}
        ></Route>
         <Route
          path="/item-detail"
          element={<DefaultLayout exact path="/item-detail" component={ItemDetail} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
