import React from 'react';

// const initialList = Bacon.fromPromise(fetch('/list'));
class NewsBody extends React.Component {

//  constructor() {
//    //initialList.onValue((items => this.setState({items: items}));
//  }

  componentWillUpdate({selected}) {
    if (selected !== this.props.selected) {
      this.props.getNewsBody();
    }
  }

  render() {
    if(this.props.isFetching) {
      return (
        <div>Loading news body..</div>
      );
    }

    const body = this.props.body;
    return (
      <div>{ body ? body : 'Nothing' }</div>
    );
  }
}


export default NewsBody;
