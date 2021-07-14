export default {
  name: "cookies",
  label: "Cookies",
  folder: "content/site/cookies",
  media_folder: "",
  public_folder: "",
  create: false,
  i18n: true,
  fields: [
    {
      name: "templateKey",
      widget: "hidden",
      default: "cookie-policy",
    },
    {
      name: "title",
      label: "Title",
      widget: "string",
      default: "Cookie Policy",
      i18n: true,
    },
    {
      name: "cookieNotification",
      label: "Cookie Notifiation",
      widget: "object",
      i18n: true,
      fields: [
        {
          name: "title",
          widget: "string",
          default: "Your choice regarding cookies",
          i18n: true,
        },
        {
          name: "content",
          widget: "markdown",
          i18n: true,
        },
      ],
    },
    {
      name: "necessaryCookies",
      label: "Necessary Cookies",
      widget: "object",
      i18n: true,
      fields: [
        {
          name: "enabled",
          widget: "hidden",
          defaut: true,
        },
        {
          name: "title",
          widget: "string",
          default: "Necessary Cookies",
          i18n: true,
        },
        {
          name: "content",
          widget: "markdown",
          i18n: true,
        },
      ],
    },
    {
      name: "analyticsCookies",
      label: "Analytics Cookies",
      widget: "object",
      i18n: true,
      fields: [
        {
          name: "enabled",
          widget: "boolean",
          defaut: true,
          required: false,
          i18n: "duplicate",
        },
        {
          name: "title",
          widget: "string",
          default: "Analytics Cookies",
          i18n: true,
        },
        {
          name: "content",
          widget: "markdown",
          i18n: true,
        },
      ],
    },
  ],
}
