import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import initialState from './state';
import reducers from './reducer';
import variables from '../../config/variables';
import { stat } from '../../types/stat';

const slice = createSlice({
  name: 'stat',
  initialState,
  reducers,
});

export default slice.reducer;
export const { setStats } = slice.actions;

export function getStats() {
  return async (dispatch: Dispatch) => {
    try {
      let apiUrl = 'http://localhost:8080/api/stats';
      if (typeof (window) !== 'undefined') {
        const isStg = variables.domainsStg.includes(document.domain);
        const isPrd = variables.domainsPrd.includes(document.domain);
        if (isStg) {
          apiUrl = 'https://api.booost.app/api/stats';
        } else if (isPrd) {
          apiUrl = 'https://api.ogp-gal.com/api/stats';
        }
      }
      const response = await axios(apiUrl);
      const stats = response.data;
      // (a.count > b.count ? -1 : 0) make problem with firefox
      stats.sort((a: stat, b: stat) => (a.count > b.count ? -1 : 1));
      dispatch(setStats(stats));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
}
