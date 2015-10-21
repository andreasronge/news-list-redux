import React from 'react';
import { connect } from 'react-redux';
import { getNewsBody } from './actions';

import NewsBody from './news-body';

class NewsBodyContainer extends React.Component {
  render() {
    return (
      <NewsBody getNewsBody={this.props.getNewsBody} selected={this.props.selected} body={this.props.body}/>
    );
  }
}

function mapStateToProps({newsBody}) {
  const selectedBody = newsBody.newsBody[newsBody.selected];

  return {
    selected: newsBody.selected,
    body: selectedBody && selectedBody.body,
    isFetching: newsBody.isFetching
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getNewsBody: () => dispatch(getNewsBody())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsBodyContainer);
