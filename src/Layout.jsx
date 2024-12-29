/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import { Main } from "./Components/Main";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "./context/SnackbarContext";
import React, { Suspense } from "react";
import SkeletonLoader from "./Components/SkeletonLoading/SkeletonLoad";

const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));

export const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="flex flex-col min-h-screen">
          <Suspense fallback={<SkeletonLoader variant={"header"} />}>
            <Header />
          </Suspense>
          <SnackbarProvider>
            <Main children={children} />
          </SnackbarProvider>
          <Suspense fallback={<SkeletonLoader variant={"footer"} />}>
            <Footer />
          </Suspense>
        </div>
      </PersistGate>
    </Provider>
  );
};
