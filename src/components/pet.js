/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';
import LineExample from './line-graph';

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
            // console.log(this.props.pets);
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
                    <LineExample data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: this.props.pets[i].name,
                          fill: false,
                          lineTension: 0.1,
                          backgroundColor: 'rgba(75,192,192,0.4)',
                          borderColor: 'rgba(75,192,192,1)',
                          borderCapStyle: 'butt',
                          borderDash: [],
                          borderDashOffset: 0.0,
                          borderJoinStyle: 'miter',
                          pointBorderColor: 'rgba(75,192,192,1)',
                          pointBackgroundColor: '#fff',
                          pointBorderWidth: 1,
                          pointHoverRadius: 5,
                          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                          pointHoverBorderColor: 'rgba(220,220,220,1)',
                          pointHoverBorderWidth: 2,
                          pointRadius: 1,
                          pointHitRadius: 10,
                          data: this.props.pets[i].weight
                        }
                      ]
                    }} />
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