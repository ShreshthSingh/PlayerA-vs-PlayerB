import React from 'react';

import classes from './hero.module.css';

const hero = ( props ) => {
    
    return (
        <div className={classes.hero}>
            <img src = {props.imgadress} height="175" width="200" /><br/>             
             Name:<b>  &nbsp; {props.name}  </b><br />
             Power:<b>  &nbsp; {props.power}  </b><br />
             Immortality:<b>  &nbsp; {props.immortality}</b><br />
             Mind:<b> &nbsp; {props.mind}</b><br />
             LeaderShip:<b> &nbsp;{props.leadership}</b><br />
             Score : <b>&nbsp;{props.score}</b>


            <p>{props.children}</p>
        </div>
    )
};

export default hero ;