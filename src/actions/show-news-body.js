import { SHOW_NEWS_BODY } from './action-types';
import {getNewsBody} from '../news-body/actions'

function showNewsBodySuccess(data) {
  return({data, type: 'SHOW_NEWS_BODY_SUCCESS'});
}

export default function showNewsBody(data) {
  return (dispatch, getState) => {
    dispatch({data, type: SHOW_NEWS_BODY});
    const {news_id} = data;

    if (!getState().newsBody.newsBody[news_id]) {
      // If no one else is interested in dispatching the getNewsBody action then
      // we should delete that action and instead use promises to pass on data
      dispatch(getNewsBody(news_id)).then(() => dispatch(showNewsBodySuccess(data)));
    } else {
      showNewsBodySuccess(data);
    }
  }
};
