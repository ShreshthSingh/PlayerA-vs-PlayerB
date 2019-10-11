import React,{Component} from 'react';
import Heroes from '../heroes/heroes';
import classes from './PlayerA.module.css';


class PlayerA extends Component{

  constructor(props) {
    super(props);

    this.state = {types:{type1 : "ironman",
    type2 : "ironman"},
    scores:{ironman:304,
      CapAmerica:340,
      DrStrange:339,
      CapMarvel:338,
      Thor:349},
    result:null  
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
 

}
 





 handleChange1(event){
   this.setState({types:{...this.state.types,type1:event.target.value}})
   

 }

 handleChange2(event){
  this.setState({types:{...this.state.types,type2:event.target.value}})

}

// compareHandler(score1,score2){
      
//   let result = null ;
//   if (score1>score2){
//      result = "Player A Wins!!!!"
//   }
//   else if (score1=score2){
//      result = "Fuckkkk Its a Draw!!!!"
//   }
//   else {
//      result = "Player B wins!!!"
//   }
//  this.setState({result:result});

// }





 

  render()
  {  

  
  let score1 =  this.state.scores[this.state.types.type1]
  let score2 =  this.state.scores[this.state.types.type2]


  

  

    
    return (  <>
       <div>
      
       
         <Heroes type={this.state.types.type1} />
         <form>
       
      
          <p>
             <label><b>Select Hero</b></label><br/>



             
             <select id = "myList" onChange={this.handleChange1} >
               <option value = "ironman" >Iron Man</option>
               <option value = "CapAmerica">Captain America</option>
               <option value = "DrStrange">Doctor Strange</option>
               <option value = "CapMarvel">Captain Marvel</option>
               <option value = "Thor">Thor</option>
             </select>
          </p>
       
    </form>
  {score1}

       </div>
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;


<div>
      
       
      <Heroes type={this.state.types.type2} />
      <form>
    
   
       <p>
          <label><b>Select Hero</b></label><br/>



          
          <select id = "myList" onChange={this.handleChange2} >
            <option value = "ironman" >Iron Man</option>
            <option value = "CapAmerica">Captain America</option>
            <option value = "DrStrange">Doctor Strange</option>
            <option value = "CapMarvel">Captain Marvel</option>
            <option value = "Thor">Thor</option>
          </select>
       </p>
    
 </form>
{score2}

    </div>

    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;



    <button type="button" className={classes.button} onClick={()=>{let result = null ;
  if (score1>score2){
     result = "Player A Wins!!!!"
  }
  else if (score1==score2){
     result = "Fuckkkk Its a Draw!!!!"
  }
  else {
     result = "Player B wins!!!"
  }
 this.setState({result:result});


    }} >FIGHT</button>
    
    <b>{this.state.result}</b>
    
     </>



    );



  }

  

}
export default PlayerA;
