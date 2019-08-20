import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";
import LocationList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js"

// TODO: Add missing tabs below
export default function TabNav() {

    const panes = [
        {
            menuItem: { 
                content: 'Home Page',
                icon: 'home'
            }, render: () => <Tab.Pane><WelcomePage/></Tab.Pane>
        },
        { menuItem: {
            content:'Characters', 
            icon: 'users'
        }, render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
        { menuItem: {
            content: 'Locations',
            icon: 'map'
        }, render: () => <Tab.Pane><LocationList /></Tab.Pane> },
        { menuItem: {
            content: 'Episodes',
            icon: 'video camera'
        }, render: () => <Tab.Pane><EpisodeList /></Tab.Pane> },
      ]
      console.log(panes[1]);
    return (
        <div>
            <Tab panes={panes} />
        </div>
        
    );

};
