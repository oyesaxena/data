import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import View from "./components/card-list"
import Donut from "./components/donut-chart"
import Line from "./components/lineChart";
import './App.css'
import BarChart from './BarChart'
class App extends Component {
   render() {
   return (
      <div className='App'>
      <React.Fragment>
      <Router>
          <NavigationBar />
      </Router>
      <Line />
      <View heading="Top Errors" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <View heading="Assigned to me" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <View heading="Highest Impact" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <View heading="Activity Stream" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Donut  data={[{
        label: 'Give up',
        value: 25
    },{
        label: 'Not even tried',
        value: 20
    },
    {
        label: 'Not even assigned',
        value: 5
    },
    {
        label: 'Never give up',
        value: 50,
    }]} />
    <Donut  data={[{
        label: 'Data 1',
        value: 20
    },{
        label: 'Data 2',
        value: 20
    },
    {
        label: 'Data 3',
        value: 10
    },
    {
        label: 'Empty Data',
        value: 50,
        isEmpty: true
    }]} />
      </React.Fragment>
      </div>
   )
   }
}export default App