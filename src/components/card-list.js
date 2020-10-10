import React, { useState,Component } from "react";
import { Container,Row } from 'react-bootstrap';
export default class View extends Component {
	render() {

        return (
            <Container>
            
		<div>
    
      <form className="view">
      <strong><input
          name="title"
          value={this.props.heading}
          placeholder="Title"
        /></strong>
        <textarea
        style={{color:"#222"}}
          name="content"
          value={this.props.content}
          placeholder="Take a note..."
          rows="3"
        />
      </form>
      </div>
      
      </Container>
        )
    }


}

