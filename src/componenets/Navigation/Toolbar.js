import React from 'react'
import classes from './Toolbar.css'
const redirect = () => (
    //<Link to="https://www.gamesradar.com/legend-of-zelda-breath-of-the-wild-best-cooking-recipes-guide/7/" />
    window.location.assign('https://www.gamesradar.com/legend-of-zelda-breath-of-the-wild-best-cooking-recipes-guide/7/')
)
const toolbar =( props ) =>(
    <header>
        <div className = {classes.Toolbar}><button onClick = {redirect}>MENU</button></div>
        <nav> 
            <ul>...</ul>
        </nav>
    </header>
); 

export default toolbar;
