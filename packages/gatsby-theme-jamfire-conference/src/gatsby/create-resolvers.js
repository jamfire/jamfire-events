// get constants
const defaultLocale = process.env.GATSBY_DEFAULT_LOCALE || "en"

module.exports = async ({ createResolvers }) => {
  const resolvers = {
    Query: {
      eventByLocale: {
        type: "MarkdownRemark",
        args: {
          locale: "String!",
          slug: "String!",
        },
        async resolve(source, args, context, info) {
          return await context.nodeModel.findOne({
            query: {
              filter: {
                frontmatter: { slug: { eq: args.slug } },
                fields: {
                  locale: { eq: args.locale },
                  templateKey: { eq: "event" },
                },
              },
            },
            type: "MarkdownRemark",
            firstOnly: true,
          })
        },
      },
      eventsByLocale: {
        type: ["MarkdownRemark"],
        args: {
          locale: "String!",
          limit: "Int!",
          skip: "Int!",
        },
        async resolve(source, args, context, info) {
          return await context.nodeModel.findAll({
            query: {
              filter: {
                limit: args.limit,
                skip: args.skip,
                fields: {
                  locale: { eq: args.locale },
                  templateKey: { eq: "event" },
                },
              },
            },
            type: "MarkdownRemark",
            firstOnly: false,
          })
        },
      },
      pageByLocale: {
        type: "MarkdownRemark",
        args: {
          locale: "String!",
          slug: "String!",
        },
        async resolve(source, args, context, info) {
          return await context.nodeModel.findOne({
            query: {
              filter: {
                frontmatter: { slug: { eq: args.slug } },
                fields: {
                  locale: { eq: args.locale },
                  templateKey: { eq: "page" },
                },
              },
            },
            type: "MarkdownRemark",
            firstOnly: true,
          })
        },
      },
      configByLocale: {
        type: "MarkdownRemark",
        args: {
          locale: "String!",
        },
        async resolve(source, args, context, info) {
          return await context.nodeModel.findOne({
            query: {
              filter: {
                fields: {
                  locale: { eq: args.locale },
                  templateKey: { eq: "configuration" },
                },
              },
            },
            type: "MarkdownRemark",
            firstOnly: true,
          })
        },
      },
      cookiesByLocale: {
        type: "MarkdownRemark",
        args: {
          locale: "String!",
        },
        async resolve(source, args, context, info) {
          return await context.nodeModel.findOne({
            query: {
              filter: {
                fields: {
                  locale: { eq: args.locale },
                  templateKey: { eq: "cookies" },
                },
              },
            },
            type: "MarkdownRemark",
            firstOnly: true,
          })
        },
      },
    },
  }
  return await createResolvers(resolvers)
}
