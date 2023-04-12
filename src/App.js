import Layout from "./Components/Layout/Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Toaster } from "react-hot-toast";

import "./App.css";
function App() {
  return (
    <>
      <Toaster
        gutter={24}
        toastOptions={{
          className: "",
          style: {
            border: "1px solid rgba(0, 0, 0, 0.12)",
            borderRadius: "40px 40px 40px 0px",
            fontWeight: "bold",
            padding: "16px",
            color: "Green",
            fontSize: "15px",
            backgroundColor: "Black",
          },
        }}
      />
      <Layout />
    </>
  );
}

export default App;
