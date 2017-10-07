import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import { Text } from 'react';
import AppBar from 'material-ui/AppBar';
class Sync extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: this.props.data,
      displayUserData: []
    }
  }
  componentDidMount() {
    let userData = [];
    for (let key of Object.keys(this.state.userData)) {
      if(!!this.state.userData[key]) {
        userData.push([<span>{key}': '{this.state.userData[key]}</span>,<br/>]);
      }
    }
    this.setState({
      displayUserData: userData
      }
    );
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title='Insta Note'
            />
            <br/>
          </div>
        </MuiThemeProvider>
        <div className="sync">
          {this.state.displayUserData}
        </div>
      </div>
    );
  }
}

export default Sync;