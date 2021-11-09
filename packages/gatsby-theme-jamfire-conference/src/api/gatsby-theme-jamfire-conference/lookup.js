const axios = require("axios").default
const RequestIp = require("@supercharge/request-ip")

export default async function handler(req, res) {
  let url = "http://ip-api.com/json/"
  const ip = RequestIp.getClientIp(req)

  if (ip !== "127.0.0.1") {
    url = `${url}${ip}`
  }

  try {
    const result = await axios.get(url).then(res => {
      return res.data
    })

    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
