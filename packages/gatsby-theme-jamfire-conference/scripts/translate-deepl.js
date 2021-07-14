// import libs
const path = require("path")
let fs = require("fs")
const chalk = require("chalk")
const fetch = require("sync-fetch")
const jsonxml = require("jsontoxml")
const parseString = require("xml2js").parseString

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

// specify target language
const lang = process.argv[2].split("=")[1]

// get the source
const source = process.argv.filter(arg => {
  let key = arg.split("=")[0]
  return key === "source"
})[0]

// get the target
const target = process.argv.filter(arg => {
  let key = arg.split("=")[0]
  return key === "target"
})[0]

// no source or target
if (source.length === 0 || target.length === 0) {
  console.log(
    `${chalk.bgBlack(
      chalk.red("[error]")
    )} You forgot to supply a source or target.`
  )
  return process.exit(1)
}

// get the api key
const apiKey = process.env.DEEPL_API_KEY || null

if (!apiKey) {
  console.log(
    `${chalk.bgBlack(
      chalk.red("[error]")
    )} You haven't specified your environment's DEEPL_API_KEY.`
  )
  return process.exit(1)
}

// read source file
const sourceLang = source.split("=")[1]
const targetLang = target.split("=")[1]
const sourceFile = __dirname + "/../src/locales/i18n/" + sourceLang + ".json"
const sourceData = require(sourceFile)

console.log(
  `\n${chalk.bgGreen(
    chalk.black(`[translate]`)
  )} ${`${sourceLang.toUpperCase()}->${targetLang.toUpperCase()}`}`
)

const sourceXml = jsonxml(sourceData)

const url = `https://api-free.deepl.com/v2/translate?auth_key=${apiKey}`

const params = new URLSearchParams()

params.append("text", sourceXml)
params.append("source_lang", sourceLang.toUpperCase())
params.append("target_lang", targetLang.toUpperCase())
params.append("tag_handling", "xml")
params.append("split_sentences", "nonewlines")

console.log(
  `${chalk.bgBlack(chalk.blue(`[${sourceLang.toUpperCase()}]`))} source loaded`
)

const response = fetch(url, {
  method: "POST",
  body: params,
}).json()

console.log(response)

// targetData
parseString(
  response.translations[0].text,
  {
    explicitArray: false,
  },
  (err, data) => {
    if (err) {
      console.log(err)
    }

    // target file
    const targetFile =
      __dirname + "/../src/locales/i18n/" + targetLang + ".json"

    fs.writeFile(targetFile, JSON.stringify(data, null, 2), error => {
      if (error) {
        console.log(error)
        return
      }

      console.log(
        `${chalk.bgBlack(
          chalk.green(`[${targetLang.toUpperCase()}]`)
        )} target translated to ${chalk.green(
          `./src/locales/i18n/${targetLang}.json`
        )}`
      )
    })
  }
)
