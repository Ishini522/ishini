import React from "react";
import {Toaster} from 'react-hot-toast';

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

export default function App({ Component, pageProp }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
