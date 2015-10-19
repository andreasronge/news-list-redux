import React from 'react';

class NewsBody extends React.Component {
  componentWillUpdate(nextProps) {
    this.getNewsIfNeeded(nextProps);
  }

//  componentDidMount() {
//    this.getNewsIfNeeded();
//  }


  getNewsIfNeeded({selected}) {
    if (selected && selected !== this.props.selected) {
      this.props.getNewsBody();
    }
  }

  render() {
    if(this.props.isFetching) {
      return (
        <div>Loading news body..</div>
      );
    }

    // can be moved to the react-redux select method
    const newsBody = this.props.newsBody[this.props.selected];
    return (
      <div>{ newsBody ? newsBody.body : '' }</div>
    );
  }
}

export default NewsBody;
