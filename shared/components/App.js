import React from 'react';
import { connect } from 'react-redux';

@connect(state => (
  {
    loading: state.loading
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
      <section className="Wrapper">
        { this.props.children }
        { isLoading() }
      </section>
    )
  }
}