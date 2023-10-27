import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  var fileName = req.body.fileName
  var fileId = req.body.fileId
  var credentials = req.body.credentials

  axios.post(
    credentials.apiUrl + '/b2api/v1/b2_delete_file_version',
    {
        fileName: fileName,
        fileId: fileId
    },
    { headers: { Authorization: credentials.authorizationToken } })
    .then(function (response) {
        res.status(200).json('success')
    })
    .catch(function (err) {
        res.status(500).json(err) // an error occurred
    });

}