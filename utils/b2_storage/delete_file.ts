import axios from "axios"
import { authentificateToStorage } from "./authentificateToStorage"

type Props = {
  fileName: string
  fileId: string
}

export const deleteFile = async ({ fileName, fileId }: Props) => {
  var credentials 
  try {
    credentials = await authentificateToStorage()
  } catch (e) {
    throw e
  }

  const res = await axios.post('/api/b2_storage/delete_file', { fileName, fileId, credentials })
  if(res.status == 200) {
    return res.data
  }
  else throw 'delete image error'
}