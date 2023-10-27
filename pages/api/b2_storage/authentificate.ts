import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  var accountId = 'f35fec03a57a'
  var applicationKey = '0051f93ecb525901b17a1de98d1d95d05f12143157'
  var credentials
  var encodedBase64 = Buffer.from(accountId + ':' + applicationKey).toString('base64')

  axios.post(
    `https://api.backblazeb2.com/b2api/v1/b2_authorize_account`,
    {},
    {
        headers: { Authorization: 'Basic ' + encodedBase64 }
    })
    .then(function (response) {
        var data = response.data
        credentials = {
            accountId: accountId,
            applicationKey: applicationKey,
            apiUrl: data.apiUrl,
            authorizationToken: data.authorizationToken,
            downloadUrl: data.downloadUrl,
            recommendedPartSize: data.recommendedPartSize
        }
        res.status(200).json(credentials)
    })
    .catch(function (err) {
        res.status(500).json(err)
        // an error occurred
    })
}