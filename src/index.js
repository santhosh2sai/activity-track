import { hello,goodbye } from "./lib";
import ReactDOM from 'react-dom';
import React from "react";
const {render} = ReactDOM
import {App} from './components/App'
import { SkiDayCount } from "./components/SkiDayCount"
import {Router,Route,hashHistory} from 'react-router'
import {Whoops404} from './components/Whoops404'

window.React = React

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({
            date : new Date()
        });
    }
    render(){
        return(
            <div>
                    <p><b>{this.state.date.toLocaleTimeString()}.</b> </p>
                </div>

        )
    }
}
/*class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" 
              value={this.state.value} onChange={this.handleChange}
              ></textarea>
              <label for="textarea1">Essay</label>
            </div>
          </div>
        </form>
      </div>
            
      );
    }
  }
*/
render(
    <div>
    
    <Router history = {hashHistory} >
    <Route path = "/" component = {App} />
    <Route path = "add-day" component = {App} />
    <Route path = "list-days" component = {App} >
        <Route path = ":filter" component = {App} />
    </Route>
    <Route path = "*" component = {Whoops404} />
    
    </Router>
    </div>,
    document.getElementById('react-container')
)

    