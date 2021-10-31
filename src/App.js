import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Tour from './Pages/Tour/Tour';
import Destination from './Pages/Destination/Destination';
import NearCity from './Pages/Home/NearCity/NearCity';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Admin from './Pages/Admin/Admin';
import SingleDestination from './Pages/Destination/SingleDestination';
import SingleTour from './Pages/Tour/SingleTour';
import AddTour from './Pages/Admin/AddTour';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/tour/:tourid">
              <SingleTour></SingleTour>
            </Route>
            <Route exact path="/tour">
              <Tour></Tour>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/addtour">
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute path="/booking/:booking">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/destination/:id">
              <SingleDestination></SingleDestination>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/nearcity">
              <NearCity></NearCity>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
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
