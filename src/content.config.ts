// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blogs/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      linkDescription: z.string(),
      postDescription: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

// const photography = defineCollection({
//     loader: glob({ pattern: '**/[^_]*.md', base: "./src/blogs/photography" }),
//     schema: z.object({
//       title: z.string(),
//       pubDate: z.date(),
//       linkDescription: z.string(),
//       postDescription: z.string(),
//       author: z.string(),
//       image: z.object({
//         url: z.string(),
//         alt: z.string()
//       }),
//       tags: z.array(z.string())
//     })
// });

const work = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blogs/work" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      linkDescription: z.string(),
      postDescription: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const workPrivate = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blogs/work/private" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      linkDescription: z.string(),
      postDescription: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, photography, work, workPrivate };