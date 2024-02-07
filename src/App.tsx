import { Zoom, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/main";

const App = () => {
  return (
    <>
      <Main />
      <ToastContainer 
        autoClose={2000}
        closeOnClick
        transition={Zoom}
      />
    </>
  );
};

export default App;
