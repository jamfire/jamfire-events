export const primaryColor = "#E3053E"
export const primaryColorHover = "#FF0051"

export default {
  name: "configuration",
  label: "Configuration",
  folder: "content/site/configuration",
  media_folder: "",
  public_folder: "",
  create: false,
  i18n: true,
  fields: [
    {
      name: "templateKey",
      widget: "hidden",
      default: "configuration",
      i18n: "duplicate",
    },
    {
      name: "title",
      label: "Site Title",
      widget: "string",
      i18n: true,
      required: false,
    },
    {
      name: "description",
      label: "Site Description",
      widget: "text",
      i18n: true,
      required: false,
    },
    {
      name: "siteUrl",
      label: "Site URL",
      widget: "string",
      i18n: "duplicate",
    },
    {
      name: "colors",
      label: "Site Colors",
      widget: "object",
      i18n: true,
      fields: [
        {
          name: "primaryColor",
          label: "Primary Color",
          default: primaryColor,
          widget: "color",
          i18n: "duplicate",
        },
        {
          name: "primaryColorHover",
          label: "Primary Color Hover",
          default: primaryColorHover,
          widget: "color",
          i18n: "duplicate",
        },
        {
          name: "darkModeOnColor",
          label: "Dark Mode On Color",
          default: primaryColorHover,
          widget: "color",
          i18n: "duplicate",
        },
        {
          name: "darkModeOffColor",
          label: "Dark Mode Off Color",
          default: primaryColorHover,
          widget: "color",
          i18n: "duplicate",
        },
      ],
    },
    {
      name: "graphics",
      label: "Site Graphics",
      widget: "object",
      i18n: true,
      fields: [
        {
          name: "logo",
          label: "Site Logo",
          widget: "image",
          media_library: {
            config: {
              multiple: false,
            },
          },
          required: false,
          i18n: "duplicate",
        },
        {
          name: "favicon",
          label: "Favicon",
          widget: "image",
          media_library: {
            config: {
              multiple: false,
            },
          },
          required: false,
          i18n: "duplicate",
        },
      ],
    },
    {
      name: "socialLogin",
      label: "Social Login",
      widget: "object",
      i18n: true,
      fields: [
        {
          name: "facebook",
          label: "Facebook",
          widget: "boolean",
          default: true,
          i18n: "duplicate",
        },
        {
          name: "google",
          label: "Google",
          widget: "boolean",
          default: true,
          i18n: "duplicate",
        },
        {
          name: "twitter",
          label: "Twitter",
          widget: "boolean",
          default: true,
          i18n: "duplicate",
        },
        {
          name: "github",
          label: "Github",
          widget: "boolean",
          default: true,
          i18n: "duplicate",
        },
      ],
    },
  ],
}
