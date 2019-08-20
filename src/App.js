import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
// import AppRouter from "./components/AppRouter.js";
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js"
import LocationsList from "./components/LocationsList.js"
import EpisodeList from "./components/EpisodeList.js"

export default function App() {

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
      {/* <TabNav /> */}
      {/* <AppRouter /> */}
    </main>
  );
}
