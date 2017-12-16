/*eslint-disable*/

import React from 'react';
import {connect} from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';

import './pet.css';
import { getPets } from '../actions/pets';

export class Pet extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPets());
    
  }

  render() {
    return (
      <Accordion 
        key={this.props.id}
        allowMultiple={true} 
        className="pet-parent">         
          {(this.props.pets).map((pet, i) => {
            console.log(this.props.pets);
            return (
              <AccordionItem
                key={i} 
                className="pet-box" 
                bodyClassName="pet-box-expanded" 
                duration={400}
                title={`${this.props.pets[i].name}`} 
                expanded={pet === 1}>
                  <div>
                    <h2>{`${pet} content`}</h2>
                    <h3>Weight</h3>
                    <h3>Age</h3>
                  </div>
              </AccordionItem>
            );
        })}
      </Accordion>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    pets: state.pets.data
});

export default connect(mapStateToProps)(Pet);