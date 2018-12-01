import * as service from "../../service/auth";

export default {
  state: {
    loading: false,
    userData:null,
  },
  reducers: {
    onRequest(state) {
      return {
        ...state,
        loading: true
      };
    },
    onSuccess(state, data) {
      return {
        ...state,
        loading: false
      };
    },
    onError(state,err) {
      console.log("ERRR",err);
      return {
        ...state,
        loading: false
      };
    },
    onData(state, data) {
      console.log(data);
      return {
        ...state,
        loading: false,
        userData: data
      };
    },
  },
  effects: {
    async fetchUser(rootState) {
      try {
        this.onRequest();
        let res = await service.getUser();
        this.onData(res);
        return res;
      } catch (e) {
        this.onError(e);
        throw e;
      }
    }
  }
};
