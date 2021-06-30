/* eslint-disable consistent-return, default-case, no-param-reassign, no-unused-vars */
import produce from 'immer';

import {
  FETCH_HOME_PAGE_STATS_FAILURE,
  FETCH_HOME_PAGE_STATS_SUCCESS,
  FETCH_HOME_PAGE_STATS,
  SEND_CONTACT_FAILURE,
  SEND_CONTACT_SUCCESS,
  SEND_CONTACT,
} from './constants';

export const initialState = {
  error: null,
  loading: false,
  stats: {},
  success: null,
};

const homePageReducer = produce((draft, { payload, type }) => {
  switch (type) {
    case FETCH_HOME_PAGE_STATS_FAILURE: {
      draft.error = true;
      draft.loading = true;
      break;
    }
    case FETCH_HOME_PAGE_STATS_SUCCESS: {
      const { stats } = payload;
      draft.loading = false;
      draft.stats = stats;
      break;
    }
    case FETCH_HOME_PAGE_STATS: {
      draft.error = null;
      draft.loading = true;
      break;
    }
    case SEND_CONTACT_FAILURE: {
      draft.loading = false;
      draft.error = true;
      break;
    }
    case SEND_CONTACT_SUCCESS: {
      draft.loading = false;
      draft.success = true;
      break;
    }
    case SEND_CONTACT: {
      draft.error = null;
      draft.loading = true;
      draft.success = null;
      break;
    }
  }
}, initialState);

export default homePageReducer;
