import axios from "axios"
import Cookies from "js-cookie"

export const authentificateToStorage = async () => {
  const p = new Promise(async (resolve, reject) => {
    const authorizationToken = Cookies.get("storage_authorization_token")
    const apiUrl = Cookies.get("api_url")

    if ( authorizationToken && apiUrl ) {
      resolve({ authorizationToken, apiUrl })
    }

    try {
      const response: any = await axios.get('/api/b2_storage/authentificate')

      Cookies.set("storage_authorization_token", response.data.authorizationToken, { expires: 1 })
      Cookies.set("storage_api_url", response.data.apiUrl, { expires: 1 })

      const credentials = { apiUrl: response.data.apiUrl, authorizationToken: response.data.authorizationToken }
      resolve(credentials)
    } catch (e) {
      reject (e)
    }
  })

  return p
}