import React, { useState,Component } from "react";
import { Container } from "react-bootstrap";
import DonutChart from 'react-donut-chart';
export default class Donut extends Component {
	render() {
        return(
            <Container>
            <div>
      <form className="donut">
      <DonutChart className="donutChart"
    data={this.props.data} />

      </form>
      </div>
      </Container>


        )
        

    }

}