import React, { useState , useEffect } from 'react';
import reactDom , {ChatAPI} from 'react-dom';


class Hooks extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isOnline: null };
      this.handleStatusChange = this.handleStatusChange.bind(this);
    }
  
    componentDidMount() {
      ChatAPI.subscribeToHooks(
        this.props.friend.id,
        this.handleStatusChange
      );
    }
    componentWillUnmount() {
      ChatAPI.unsubscribeFromHooks(
        this.props.friend.id,
        this.handleStatusChange
      );
    }
    handleStatusChange(status) {
      this.setState({
        isOnline: status.isOnline
      });
    }
  
    render() {
      if (this.state.isOnline === null) {
        return 'Loading...';
      }
      return this.state.isOnline ? 'Online' : 'Offline';
    }
  }

export default Hooks;
