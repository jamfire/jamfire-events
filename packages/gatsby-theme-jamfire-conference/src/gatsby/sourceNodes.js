// import libs
const path = require("path")

module.exports = async ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `

		type MarkdownRemarkFrontmatterPageGraphics {
			featuredImage: File
		}

		type MarkdownRemarkFrontmatterEventGraphics {
			favicon: File
			headerLogo: File
			lobbyImage: File
		}

		type MarkdownRemarkFrontmatterEventRooms {
			slug: String
			title: String
			description: String
			image: File 
		}

		type MarkdownRemarkFrontmatter implements Node @infer {
			logo: File
			favicon: File
			eventRooms: MarkdownRemarkFrontmatterEventRooms
			eventGraphics: MarkdownRemarkFrontmatterEventGraphics
			pageGraphics: MarkdownRemarkFrontmatterPageGraphics
		}
	
	`

  await createTypes(typeDefs)
}
