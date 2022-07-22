import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./Components/Header"

import PagesRoute from "./Routes/routes"


const stylePopUp = {
  BackgroundColor: "#202020",
  FontSize: "2rem",
  p: {
    Color: "#202020"
  }
}

const App = () => {
  return (
    <div>
      <Header />
      <div className="circle"></div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        style={stylePopUp}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <PagesRoute />
    </div>
  );
}

export default App;
