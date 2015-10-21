import React from 'react';

class NewsBody extends React.Component {
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
