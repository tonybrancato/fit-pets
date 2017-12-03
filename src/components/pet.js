import React from 'react';
import {connect} from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';

import './pet.css';

export class Pet extends React.Component {

  render() {
    return (
      <Accordion 
      allowMultiple={true} 
      easing={'ease'}
      className="pet-parent"> 
        {['Jack', 'Biz', 'Millie'].map(pet => {
          return (
            <AccordionItem 
            className="pet-box" 
            bodyClassName="pet-box-expanded" 
            duration={400}
            title={`${pet}`} 
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
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Pet);
