import React from 'react';

export default class IconBar extends React.Component{

    render(){
        return(
            <div>
            <div class="ui icon menu">
  <a class="item">
    <i class="list large icon" style={{color : "white"}}></i>
  </a>
  
  <a class="item">
    <i class="youtube large icon" style={{color : 'red'}}><span style={{color:'white'}}>Youtube</span></i>
  </a>
</div>

</div>
        )
    }
}