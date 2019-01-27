import axios from "axios"

const ROOT_URL = "https://cnodejs.org/api/v1"

export function* getFetch(url) {
  const res = yield axios
    .get(ROOT_URL + url)
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      throw error
    })

  return res
}
