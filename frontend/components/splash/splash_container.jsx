import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
// debugger
  return {
    currentUser:state.entities.users[state.session.currentUserId]
   };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
})


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
