import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

const App = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <div className=" my-5">
      <Form/>
      <ListItem/>
      </div>
      <footer className="align-items-end">
        <Footer />
      </footer>
    </Fragment>
  );
};

export default App;
