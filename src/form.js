import React, { Component } from 'react';

import axios from 'axios';


class Form extends Component{
    state = {userName: ''}
      handleSubmit = (event) => {
        event.preventDefault();
        //console.log('Event: Form Submit', this.state.userName);
        axios.get('https://api.github.com/users/' + this.state.userName)
        .then(rsp => {
          this.props.onSubmit(rsp.data);
          //this.setState({userName:''});
          //console.log('Event: Form Submit', rsp.data);
        });
      };
      render(){
        return(
        <form onSubmit={this.handleSubmit} className="form-inline">
            <div class="form-group mb-2">
                <input className="form-control" type="text" 
                value={this.state.userName}
                onChange={(event) => this.setState( {userName: event.target.value})}
                placeholder="Github user name" required />
            </div>
            
            <button className="btn btn-primary mb-2" type="submit">Add card</button>  
          </form>
        );
      }
    }
    export default Form;