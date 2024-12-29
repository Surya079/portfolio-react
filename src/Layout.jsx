/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import { Main } from "./Components/Main";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "./context/SnackbarContext";
import React, { Suspense, useEffect, useState } from "react";
import SkeletonLoader from "./Components/SkeletonLoading/SkeletonLoad";
import { MetaDataProvider } from "./context/metaContext";
import Metadata from "./Seo/Metadata";
import Popup from "./Components/RootPopop/Popup";

const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));

export const Layout = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  // You can set a delay before closing the popup (e.g., for a few seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(false);
    }, 5000); // Closes the popup after 5 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="flex flex-col min-h-screen">
          <Popup
            isOpen={isPopupOpen}
            closePopup={() => setIsPopupOpen(false)}
          />
          <MetaDataProvider>
            <Metadata />
            <Suspense fallback={<SkeletonLoader variant={"header"} />}>
              <Header />
            </Suspense>

            <SnackbarProvider>
              <Main children={children} />
            </SnackbarProvider>
            <Suspense fallback={<SkeletonLoader variant={"footer"} />}>
              <Footer />
            </Suspense>
          </MetaDataProvider>
        </div>
      </PersistGate>
    </Provider>
  );
};
