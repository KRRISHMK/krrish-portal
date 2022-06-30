import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.min.css";
import "../src/scss/style.scss";
import ItemDetail from "./pages/ItemDetail";
import RelatedProductList from "./pages/RelatedProductList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<DefaultLayout exact path="/" component={Home} />}
        ></Route>
        {/* Item Detail */}
        <Route
          path="/item-detail/:id"
          element={
            <DefaultLayout exact path="/item-detail" component={ItemDetail} />
          }
        ></Route>
        {/* Related Product */}
        <Route
          path="/related-product/:id"
          element={
            <DefaultLayout exact path="/related-product" component={RelatedProductList} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
