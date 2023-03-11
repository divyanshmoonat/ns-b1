import { Outlet } from "react-router";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Layout.css";
import Container from "../../components/Container/Container";

const Layout = () => {
  return (
    <div className="app-layout">
      <Container>
        <>
          <Header />
          {/* {
                / => Home
                /contact-us => ContactUs
                /about-us => AboutUs
            } */}
          {/* {CONTENT WILL BE PLACED HERE BASED ON THE ROUTE} */}
          <Outlet />
          <Footer />
        </>
      </Container>
    </div>
  );
};

export default Layout;
