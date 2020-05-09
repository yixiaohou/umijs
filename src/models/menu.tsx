import { getMenusData } from '@/service/getMenusData';
export default {
  namespace: 'menu',
  state: {
    menusData: [],
  },

  effects: {
    *getMenuData(_, { put, call }) {
      const { data = [] } = yield call(getMenusData, {});
      console.log(data);
      yield put({
        type: 'save',
        payload: {
          menusData: data,
        },
      });
    },
  },

  reducers: {
    save(state: any, action: any) {
      return { ...state, ...action.payload };
    },
  },
};
