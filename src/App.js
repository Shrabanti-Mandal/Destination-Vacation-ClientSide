import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import AuthProvider from "./Context/AuthProvider";
import AddServices from "./Components/AddServices/AddServices";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import PackageForm from "./Components/PackageForm/PackageForm";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import MyPackage from "./Components/MyPackage/MyPackage";
import ManageServices from "./Components/ManageServices/ManageServices";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/AboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path={"/packageForm/:Id"}>
              <PackageForm></PackageForm>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyPackage></MyPackage>
            </PrivateRoute>
            <PrivateRoute path="/manageAllService">
              <ManageServices></ManageServices>
            </PrivateRoute>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
