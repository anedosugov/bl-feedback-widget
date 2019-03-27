import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001';

export default {
    getFeedbackList: (page, limit) => axios.get("/list", {
      params: {
        _page: page,
        _limit: limit
      }
    })
    .then (res => {
      if (res.data) {
        return {
          data: res.data,
          totalCount: parseInt(res.headers['x-total-count'])
        }
      }
    })
    .catch(er => Promise.reject(er))
};
