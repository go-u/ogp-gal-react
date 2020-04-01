import { stat } from '../../types/stat';

const reducers = {
  setStats: (state:any, action:any) => ({ ...state, stats: action.payload as stat[] }),
};

export default reducers;
