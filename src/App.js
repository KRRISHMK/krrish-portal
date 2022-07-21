import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.min.css";
import "../src/scss/style.scss";
import ItemDetail from "./pages/ItemDetail";
import RelatedProductList from "./pages/RelatedProductList";
import AdminFooter from "./admin/footer/AdminFooter";
import AdminHeader from "./admin/header/AdminHeader";
import CategoryList from "./admin/category/CategoryList";
import AdminList from "./admin/list/AdminList";
import Edit from "./admin/list/Edit";
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

        {/* Admin Route */}
        <Route
          path="/admin/header"
          element={
            <DefaultLayout exact component={AdminHeader} />
          }
        ></Route>
        <Route
          path="/admin/category"
          element={
            <DefaultLayout exact component={CategoryList} />
          }
        ></Route>
        <Route
          path="/admin/product"
          element={
            <DefaultLayout exact component={AdminList} />
          }
        ></Route>
        <Route
          path="/admin/product/edit"
          element={
            <DefaultLayout exact component={Edit} />
          }
        ></Route>
        <Route
          path="/admin/footer"
          element={
            <DefaultLayout exact component={AdminFooter} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
