import React,{Component} from 'react';
import Heroes from '../heroes/heroes';
import Scores from '../scores';


class PlayerB extends Component{

  constructor(props) {
    super(props);

    this.state = {
        type : "ironman"
    };

    this.handleChange = this.handleChange.bind(this);
}
 





 handleChange(event){
   this.setState({type:event.target.value})

 }
  
  render()
  {  

    
    return (
       <div>
         {Heroes.score}
      
       
         <Heroes type={this.state.type} />
         <form>
       
      
          <p>
             <label><b>Select Hero</b></label><br/>



             
             <select id = "myList" onChange={this.handleChange} >
               <option value = "ironman" >Iron Man</option>
               <option value = "CapAmerica">Captain America</option>
               <option value = "DrStrange">Doctor Strange</option>
               <option value = "CapMarvel">Captain Marvel</option>
               <option value = "Thor">Thor</option>
             </select>
          </p>
       
    </form>
    <Scores name={this.state.type}/> 

       </div>



    );



  }

  

}
export default PlayerB;
