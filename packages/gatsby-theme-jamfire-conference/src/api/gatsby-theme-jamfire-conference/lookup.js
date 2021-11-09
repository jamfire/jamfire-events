// import fetch from "node-fetch"

const axios = require("axios").default

export default async function handler(req, res) {
  const url = "http://ip-api.com/json"

  try {
    const result = await axios.get(url).then(res => {
      return res.data
    })

    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
