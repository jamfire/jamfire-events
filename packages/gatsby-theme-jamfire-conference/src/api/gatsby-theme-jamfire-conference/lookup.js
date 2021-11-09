const axios = require("axios").default
const RequestIp = require("@supercharge/request-ip")

export default async function handler(req, res) {
  const url = "http://ip-api.com/json/"
  const ip = RequestIp.getClientIp(req)

  try {
    const result = await axios.get(`${url}${ip}`).then(res => {
      return res.data
    })

    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
