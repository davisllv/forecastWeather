import { ToastContainer } from "react-toastify";
import Main from "./components/main";

const App = () => {
  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={200}

      />
      <Main />
    </>
    );
};

export default App;
