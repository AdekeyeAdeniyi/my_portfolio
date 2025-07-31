import { defineType, defineField } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
            },
            {
              name: "url",
              type: "url",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "contactEmail",
      type: "string",
    }),
    defineField({
      name: "contactPhone",
      type: "string",
    }),
  ],
});
