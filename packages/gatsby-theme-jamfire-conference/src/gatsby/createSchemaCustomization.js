module.exports = async ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `

		type MarkdownRemarkFrontmatterPageGraphics @infer {
			featuredImage: File @fileByRelativePath
		}

		type MarkdownRemarkFrontmatterEventGraphics @infer {
			favicon: File @fileByRelativePath
			headerLogo: File @fileByRelativePath
			lobbyImage: File @fileByRelativePath
		}

		type MarkdownRemarkFrontmatterEventRoom @infer {
			image: File @fileByRelativePath 
			slug: String!
			title: String!
			description: String
		}

		type MarkdownRemarkFrontmatterGraphics @infer {
			logo: File @fileByRelativePath
			favicon: File @fileByRelativePath
		}

		type MarkdownRemarkFrontmatter implements Node @infer {
			graphics: MarkdownRemarkFrontmatterGraphics
			eventRooms: [MarkdownRemarkFrontmatterEventRoom]
			eventGraphics: MarkdownRemarkFrontmatterEventGraphics
			pageGraphics: MarkdownRemarkFrontmatterPageGraphics
		}
	
	`

  createTypes(typeDefs)
}
