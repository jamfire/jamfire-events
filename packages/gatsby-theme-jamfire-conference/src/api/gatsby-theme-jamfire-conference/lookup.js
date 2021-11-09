import fetch from "node-fetch"

export default async function handler(req, res) {
  let url = "http://ip-api.com/json"

  try {
    const result = await fetch(url).then(res => {
      return res.json()
    })

    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
