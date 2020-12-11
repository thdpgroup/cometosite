import api from './api'

export default {
  getTheme() {
    return api.get('/themes')
  }
}
