import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './header';
import Form from './form';


  const Card = (props) => {
    const setActiveCard = (e) => {
          e.preventDefault();
          props.setActiveCard(props.card);
          //alert(0);
      };
    return(
      <div onClick={setActiveCard} className="row p-3">
        <div className="col-md-2">
          <img 
            className="rounded"
            height="100"
            width="100"
            alt ={props.name} 
            src={props.avatar_url}/>  	  
        </div>
        <div className="col-md-10" style={{}}>
          Name: {props.name}
          <br/>
          Comapany: 
          {props.company}

        </div>
      </div>
    );
  };


  const CardList = (props) => {
    return(
      <div className="container"> 
        <div className="row">
          <p><strong>Card List</strong></p>
        </div>
          {props.cards.map(card => <Card 
            name={card.name} 
            card={card}
            avatar_url={card.avatar_url} 
            company={card.company}
            setActiveCard={props.setActiveCard}/>)}
      </div>
    );
  }

  const CardDetail = (props) => {
    return(
      <div>
        <div className="row">
          <p><strong>Card Detail</strong></p>
        </div>
        <div className="row" >

          <div className="col-md-6" >
            Login: {props.card.login}
            <br/>
            Name: {props.card.name}
            <br/>
            public_repos: 
            {props.card.public_repos}
            <br/>
            followers: 
            {props.card.followers}
            <br/>
            following: 
            {props.card.following}
            <br/>
            created_at: 
            {props.card.created_at}
            <br/>
            updated_at: 
            {props.card.updated_at}
          </div>
          <div className="col-md-4">
            <img 
              className="rounded"
              width="200"
              height="200"
              alt ={props.card.name} 
              src={props.card.avatar_url}/>  	  
          </div>
          <div className="col-md-2" onClick={props.backtolist} >
            <a onClick={props.backtolist} href="#">
              Back to List
            </a>
          </div>
        </div>
      </div>
    );
  };

class App extends Component {
  state = {
    cards : [],
    activeCard:null
  };
    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo),
        activeCard:null
      }));
    };
    setActiveCard = (card) => {
      this.setState({activeCard: card});
    };
    backtolist = () => {
      this.setState({activeCard: null});
    };
    workInProgress = () =>{
      alert("This is still work in progress")
    };
    render(){
      let activeComponent = null;
      if(this.state.activeCard){
        activeComponent = <CardDetail card={this.state.activeCard} backtolist={this.backtolist} />;
      }
      if(this.state.cards.length > 0   && !this.state.activeCard){
        activeComponent = <CardList cards={this.state.cards} setActiveCard={this.setActiveCard}  />;
      }

      return(
      <div className="container">
        <div className="row">
          <div className="col-md-8 btn-warning">
            <h4><a href="#">Github Users</a></h4>
          </div>
          <div className="col-md-4">
            <Form onSubmit={this.addNewCard}/>
          </div>
        </div>
      <div className="row">
        <div className="col-md-8" id="wrapper">
          
          {activeComponent}
        </div>
        <div className="col-md-4">
            <p><strong>Navigation Here</strong></p>
            <ul>
                <li><a href="#" onClick={this.workInProgress}>Home</a></li>
                <li><a href="#" onClick={this.workInProgress}>Github Users</a></li>
            </ul>
        </div>
      </div>
      <div className="container">
      <div className="row">
            
            
        </div>
        <div className="row">
            
        </div>
        </div>
          

          
        
          
          </div>
      );
    }
}

export default App;