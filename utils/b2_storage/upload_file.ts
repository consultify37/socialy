import axios from "axios"
import { authentificateToStorage } from "./authentificateToStorage"

export const uploadFile = async (file: File) => {
  var credentials 
  try {
    credentials = await authentificateToStorage()
  } catch (e) {
    throw e
  }

  let data = new FormData()
  data.append("image", file)
  data.append('credentials', JSON.stringify(credentials))

  const res = await axios.post('/api/b2_storage/upload_file', data)
  if(res.status == 200) {
    return res.data
  }
  else throw 'upload image error'
}