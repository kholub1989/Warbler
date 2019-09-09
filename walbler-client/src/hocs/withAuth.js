import React,  { Component } from 'react';
import { connect } from 'react-redux';

export default function withAuth(ComponentToBeRenderd) {
  class Authhenticate extends Component {
    componentWillMount() {
      if(this.props.isAuthenticated === false) {
        this.props.history.push('signin');
      }
    }
    componentWillUpdate(nextProps) {
      if(nextProps.isAuthenticated === false) {
        this.props.history.push('signin');
      }
    }
    render() {
      return <ComponentToBeRenderd {...this.props} />
    }
  }
}

function mapStateProps(state) {
  return {
    isAuthenticated: state.currentUser.isAuthenticated
  }
}

return connect(mapStateProps)(Authhenticate);