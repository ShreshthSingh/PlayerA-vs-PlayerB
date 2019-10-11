import React,{Component} from 'react';




class scores extends Component {
state={scores:{ironman:1,
  CapAmerica:2,
  DrStrange:3,
  CapMarvel:1}};



score1 = this.state.scores[this.props.name] ;
score2 = this.state.scores[this.props.name] ;


   


render(){ 
  var score = this.state.scores[this.props.name] 


  
     
     return (
         

       <bold>{score}</bold>
       
         
         );

    
 
 }
 }
 
 export default scores;

