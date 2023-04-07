import Layout from "./Components/Layout/Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Toaster } from "react-hot-toast";

import "./App.css"
function App() {
  return (
    <>
  <Toaster/>
  <Layout />
  </>
  )
}

export default App;
