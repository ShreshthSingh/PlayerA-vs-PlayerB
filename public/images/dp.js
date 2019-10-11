import React from 'react';
import Ironman from './ironman.jpg' ;
import classes from './dp.module.css';
const ironman = (props) =>(
    <div className={classes.dp} style={{height: props.height}}  >
        <img src={Ironman} alt="ironman"/>
    </div>
)

export default ironman;
