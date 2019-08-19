import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
// import AppRouter from "./components/AppRouter.js";
import {Route} from "react-router-dom"
import CharacterCard from "./components/CharacterCard.js"
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
 

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterCard} />
      {/* <TabNav /> */}
      {/* <AppRouter /> */}
    </main>
  );
}
