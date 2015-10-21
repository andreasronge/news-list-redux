import { SHOW_NEWS_BODY } from './../../actions';

const initialState = 0;

export default function selected(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_NEWS_BODY_SUCCESS':
      return action.data.news_id;
    default:
      return state;
  }
}
