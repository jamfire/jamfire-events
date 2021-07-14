import { primaryColor, primaryColorHover } from "./configuration"

export default {
  name: "pages",
  label: "Pages",
  label_singular: "Page",
  folder: "content/pages",
  path: "{{slug}}/{{slug}}",
  media_folder: "",
  public_folder: "",
  create: true,
  i18n: true,
  preview_path: "{{fields.slug}}",
  fields: [
    {
      name: "templateKey",
      widget: "hidden",
      default: "pages",
      i18n: "duplicate",
    },
    {
      name: "slug",
      widget: "string",
      hint: "In path format: /about",
      i18n: "duplicate",
    },
    {
      name: "title",
      label: "Title",
      widget: "string",
      i18n: true,
    },
    {
      name: "body",
      label: "Body",
      widget: "markdown",
      required: false,
      i18n: true,
    },
    {
      name: "pageBranding",
      label: "Page Branding",
      widget: "object",
      hint: "Customize page branding colors",
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
          label: "Primary Hover Color",
          default: primaryColorHover,
          widget: "color",
          i18n: "duplicate",
        },
      ],
    },
    {
      name: "pageGraphics",
      label: "Page Graphics",
      widget: "object",
      hint: "Upload graphics for use on the main page",
      i18n: true,
      fields: [
        {
          name: "headerLogo",
          label: "Header Logo",
          widget: "image",
          allow_multiple: false,
          required: false,
          i18n: "duplicate",
        },
        {
          name: "featuredImage",
          label: "Featured Image",
          widget: "image",
          allow_multiple: false,
          required: false,
          i18n: "duplicate",
        },
      ],
    },
  ],
}
