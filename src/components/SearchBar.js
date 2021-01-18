import React from 'react';


export default class SearchBar extends React.Component{
    state = {term : ''}

    onChange = event =>{
      
      this.setState({term:event.target.value});
      console.log(this.state.term)

    }

    onSubmit = event =>{

        event.preventDefault();

        this.props.onFormSubmit(this.state.term)


    }

    render(){
        return(
            <div className="search-bar">
                <form className="ui form" onSubmit = {this.onSubmit}>
                    <div className="ui fluid action input">
                        <input type="text" onChange = {this.onChange} style={{backgroundColor : 'black',border :'solid grey 1px',color:'grey'}}></input>
                        <div class="ui button" style={{background:'transparent',border : 'solid grey 1px'}}><i class="search grey icon"></i></div>
                       </div>
                </form>    
            </div>
        )

        
    }
}