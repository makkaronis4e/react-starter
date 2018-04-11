import { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from './AppState';
import Spinner from './'
import './App.styl';

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

 
  render() {
    let jokes = this.props.data;

    if (this.props.isLoading) {
      return <Spinner /> 
    } else { 
      return <Jokes joke = {jokes}/>  
    }
  }
}

export default connect(
  state => state.AppState
)(App);
