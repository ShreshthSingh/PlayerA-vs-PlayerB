import React,{Component} from 'react';
import Hero from '../hero/hero';



class heroes extends Component {
   
     
    
    render(){ 
     var hero_data = null;
     switch (this.props.type){
         
         
         
         
        
         case ('ironman'):  
               var hero_data =  {
                imgadress:"./images/ironman.jpg",
                name:"Iron Man",
                power:"78" ,
                immortality:"65", 
                mind : "96" ,
                leadership:"65" };

         break ;
         case ('CapAmerica'):
               var hero_data =  {
                    imgadress:"./images/captainamerica.jpg",
                    name:"Captain America",
                     power:"70" ,
                     immortality:"85", 
                     mind : "88" ,
                     leadership:"97" };

            
         break ;
         case ('CapMarvel'):
                var hero_data =  {
                    imgadress:"./images/captainmarvel.jpg",
                    name:"Captain Marvel",
                     power:"96" ,
                     immortality:"81", 
                     mind : "82" ,
                     leadership:"79" };
         
         break ;
         case ('DrStrange'):
                   var hero_data =  {
                    imgadress:"./images/docstrange.jpg",
                    name:"Doctor Strange",
                     power:"94" ,
                     immortality:"77", 
                     mind : "96" ,
                     leadership:"72" };
         
         break ;
         case ('Thor'):
                   var hero_data =  {
                    imgadress:"./images/thor.jpg",
                    name:"Thor",
                     power:"97" ,
                     immortality:"91", 
                     mind : "84" ,
                     leadership:"77" };
      
                 
         
         break ;
         
         
         default:
            var hero_data = null; }
     const score = parseInt(hero_data.power, 10)  + parseInt(hero_data.leadership, 10) + parseInt(hero_data.immortality, 10)+ parseInt(hero_data.mind , 10);       
    
     return (<Hero
        score={score} 
        name={hero_data.name} 
        imgadress={hero_data.imgadress}
         power={hero_data.power} 
         immortality={hero_data.immortality} 
         mind={hero_data.mind} 
         leadership={hero_data.leadership}/>
         
            
          
         
         );

    
 
 }
 }
 
 export default (heroes);

