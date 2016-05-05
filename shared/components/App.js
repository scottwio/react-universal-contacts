import React from 'react';
import { connect } from 'react-redux';

@connect(state => (
  {
    loading: state.loadingReducer
  }
))
export class App extends React.Component {
  render() {
    let isLoading = () => {
      if (this.props.loading.isLoading) {
        return (<div>loading....</div>)
      }
    }

    return (
      <section>
        { this.props.children }
        { isLoading() }
      </section>
    )
  }
}