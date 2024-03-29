import Navigation from "./components/navigationBar/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./App.scss";
import Home from "./components/Home/home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Sign up/Sign up.jsx";
import Service from "./components/Service/Service";
import Artisan from "./components/Artisan/Artisan.jsx";
import Records from "./components/Records/Records.jsx";
import AdminPanel from "./components/AdminPanel/AdminPanel.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { useState } from "react";
import ArtisanSelect from "./components/ArtisanSelect/ArtisanSelect.jsx";
import AddArtisans from "./components/AdminPanel/pages/AddArtisans/AddArtisans.jsx";
import Services from "./components/AdminPanel/pages/services/services";
import Logout from "./components/Logout/Logout";
import ServiceSelect from "./components/Service/serviceSelect.jsx";
import RecordRoute from "./components/PrivateRoute/RecordRoute.jsx";
import SideBar from "./components/AdminPanelSideBar/sideBar.jsx";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Admin_register from "./components/admin_register/Admin_register.jsx";
import ArtisanUpdate from "./components/AdminPanel/pages/ArtisanUpdate/ArtisanUpdate.jsx";
import NewArtisan from "./components/AdminPanel/pages/NewArtisan/NewArtisan.jsx";
import ServiceUpdate from "./components/AdminPanel/pages/ServiceUpdate/ServiceUpdate.jsx";
import NewService from "./components/AdminPanel/pages/NewService/NewService.jsx";
import FindArtisan from "./components/FindArtisans/FindArtisan.jsx";

function App() {
  const [user, setUser] = useState({ customer_username: "", password: "" });
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout
              setIsAuthenticated={setIsAuthenticated}
              setIsLoggedIn={setIsloggedIn}
            />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/find">
            <FindArtisan />
          </Route>
          <Route path="/AdminRegister">
            <Admin_register />
          </Route>
          <Route exact path="/service">
            <Navigation />
            <div className="sections">
              <Service />
              <Footer />
            </div>
          </Route>
          <Route exact path="/artisan">
            <Navigation />
            <div className="sections">
              <Artisan />
              <Footer />
            </div>
          </Route>
          <Route exact path="/artisan/:artisanId" component={ArtisanSelect}>
            <Navigation />
            <div className="sections">
              <ArtisanSelect />
              <Footer />
            </div>
          </Route>
          <Route exact path="/service/:service_id" component={ServiceSelect}>
            <Navigation />
            <div className="sections">
              <ServiceSelect />
              <Footer />
            </div>
          </Route>
          <PrivateRoute path="/records" component={RecordRoute} />
          <PrivateRoute path="/admin" component={AdminRoute} />
          <Route path="/artisans">
            <AdminPanel />
            <div className="side">
              <SideBar />
              <AddArtisans />
            </div>
          </Route>
          <Route path="/services">
            <AdminPanel />
            <div className="side">
              <SideBar />
              <Services />
            </div>
          </Route>
          <Route path="/newArtisan">
            <AdminPanel />
            <div className="side">
              <SideBar />
              <NewArtisan />
            </div>
          </Route>
          <Route path="/newService">
            <AdminPanel />
            <div className="side">
              <SideBar />
              <NewService />
            </div>
          </Route>
          <Route exact path="/artisanEdit/:artisanID">
            <AdminPanel />
            <div className="side">
              <SideBar />
              <ArtisanUpdate />
            </div>
          </Route>
          <Route exact path="/serviceEdit/:serviceID">
            <AdminPanel />
            <div className="side">
              <SideBar />
              <ServiceUpdate />
            </div>
          </Route>
          <Route path="/service">
            <Navigation />
            <div className="sections">
              <Service />
              <Footer />
            </div>
          </Route>
          <Route path="/artisan">
            <Navigation />
            <div className="sections">
              <Artisan />
              <Footer />
            </div>
          </Route>
          <Route path="/records">
            <Navigation />
            <div className="sections">
              <Records />
              <Footer />
            </div>
          </Route>
          <Route path="/Home">
            <Navigation />
            <div className="sections">
              <Home />
              <Footer />
            </div>
          </Route>
          <Route path="/">
            <Navigation />
            <div className="sections">
              <Home />
              <Footer />
            </div>
          </Route>
          <Route path="/Dashboard">
            <Navigation />
            <div className="sections">
              <Dashboard />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
