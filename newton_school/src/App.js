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

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/users-list" element={<UsersList />} />
      <Route path="/user/:id" element={<UserProfile />} />
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
