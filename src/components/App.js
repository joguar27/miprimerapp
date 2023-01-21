import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";
import Footer from "./Footer";
import Header from "./Header";
//import ItemListContainer from"./ItemListContainer"

import Main from "./Main";

const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
};
export default App;


