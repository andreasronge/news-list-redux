import React from 'react';
import { connect } from 'react-redux';
import { getNewsBody } from './actions';

import NewsBody from './news-body';

class NewsBodyContainer extends React.Component {
  render() {
    return (
      <NewsBody getNewsBody={this.props.getNewsBody} body={this.props.body}/>
    );
  }
}

function mapStateToProps({newsBody}) {
  const selectedBody = newsBody.newsBody[newsBody.selected];

  return {
    body: selectedBody && selectedBody.body,
    isFetching: newsBody.isFetching
  }
}


export default connect(mapStateToProps)(NewsBodyContainer);
