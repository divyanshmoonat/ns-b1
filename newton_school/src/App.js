import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MyContextProvider from "./contexts/MyContext";
import AboutUs from "./containers/AboutUs/AboutUs";
import ContactUs from "./containers/ContactUs/ContactUs";
import Home from "./containers/Home/Home";
import Layout from "./containers/Layout/Layout";
import UsersList from "./components/9March/UsersList/UsersList";
import UserProfile from "./containers/UserProfile/UserProfile";
import NotFound from "./components/NotFound/NotFound";
import Login from "./containers/Login/Login";
import UserDetails from "./containers/UserDetails/UserDetails";
import Profile from "./components/12March/Profile/Profile";
import Account from "./components/12March/Account/Account";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/dashboard" element={<UsersList />} />
      {/* <Route path="/user/:id" element={<UserProfile />} /> */}
      {/* <Route path="/user" element={<UserProfile />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<UserDetails />}>
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about-us",
//     element: <AboutUs />,
//   },
//   {
//     path: "/contact-us",
//     element: <ContactUs />,
//   },
// ]);

const App = () => {
  return (
    <MyContextProvider>
      <RouterProvider router={routes} />
    </MyContextProvider>
  );
};

export default App;
