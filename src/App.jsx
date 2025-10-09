import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Navbar from "./components/Home/Navbar";
import HomePage from "./components/Home/HomePage";
import Main from "./components/Home/Main";
import Features from "./components/Home/Features";
import Categories from "./components/Home/Categories";

import About from "./components/About/About";
import Terms from "./components/About/Terms";
import ContactUs from "./components/About/ContactUs";

import Register from "./components/Register";
import Cart from "./components/Cart/Cart";

import CartProvider from "./components/Cart/CartItems";

import Payment from "./components/Payment/Payment";
import Success from "./components/Payment/Success";
import Failure from "./components/Payment/Failure";

import MainLayout from "./components/Home/MainLayout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Navbar visible on all pages */}
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Explore & Products */}
          <Route
            path="/explore"
            element={
              <MainLayout>
                <Main />
              </MainLayout>
            }
          />
          <Route
            path="/explore-items"
            element={
              <MainLayout>
                <Categories />
              </MainLayout>
            }
          />

          {/* User Registration / Login */}
          <Route
            path="/register"
            element={
              <MainLayout>
                <Register type="signup" />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Register type="login" />
              </MainLayout>
            }
          />

          {/* Features */}
          <Route
            path="/features"
            element={
              <MainLayout>
                <Features />
              </MainLayout>
            }
          />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* About & Info */}
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/terms"
            element={
              <MainLayout>
                <Terms />
              </MainLayout>
            }
          />

          {/* Payment */}
          <Route
            path="/payment"
            element={
              <MainLayout>
                <Payment />
              </MainLayout>
            }
          />
          <Route
            path="/success"
            element={
              <MainLayout>
                <Success />
              </MainLayout>
            }
          />
          <Route
            path="/failure"
            element={
              <MainLayout>
                <Failure />
              </MainLayout>
            }
          />

          {/* Optional: 404 page */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
