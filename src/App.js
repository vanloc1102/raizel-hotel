import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/" exact component={Rooms} />
                <Route path="/rooms/:slug" exact component={SingleRoom} />
                <Route path="/contact" exact component={ContactPage} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
