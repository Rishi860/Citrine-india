import Api from '../services/api'

export default{
  all () {
    return Api().get('collection/all')
  },
  index (search, page) {
    return Api().get('collections', {
      params: {
        page,
        search: search
      }
    })
  },
}