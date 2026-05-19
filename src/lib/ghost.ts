import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: import.meta.env.GHOST_URL,
  key: import.meta.env.GHOST_CONTENT_API_KEY,
  version: "v5.0",
});

export async function getPosts() {
  const posts = await api.posts.browse({
    include: ["tags"],
    limit: "all",
    order: "published_at DESC",
  });

  return posts.map((post) => ({
    id: post.slug,
    data: {
      title: post.title,
      pubDate: new Date(post.published_at),
      description: post.custom_excerpt || post.excerpt || "",
      tags: post.tags.filter((t) => !t.slug.startsWith("#")).map((t) => t.name),
      postType: "note" as const,
      html: post.html,
    },
  }));
}

export async function getPostBySlug(slug: string) {
  const post = await api.posts.read({ slug }, { include: ["tags"] });

  return {
    id: post.slug,
    data: {
      title: post.title,
      pubDate: new Date(post.published_at),
      description: post.custom_excerpt || post.excerpt || "",
      tags: post.tags.filter((t) => !t.slug.startsWith("#")).map((t) => t.name),
      postType: "note" as const,
      html: post.html,
    },
  };
}
