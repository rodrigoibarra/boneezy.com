import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: import.meta.env.GHOST_URL,
  key: import.meta.env.GHOST_CONTENT_API_KEY,
  version: "v5.0",
});

const mapPost = (post) => ({
  id: post.slug,
  data: {
    title: post.title,
    pubDate: new Date(post.published_at),
    description: post.custom_excerpt || post.excerpt || "",
    tags: post.tags
      .filter((t) => !t.slug.startsWith("hash-"))
      .map((t) => t.name),
    postType: "note" as const,
    html: post.html,
    ogTitle: post.og_title || post.title,
    ogDescription:
      post.og_description || post.custom_excerpt || post.excerpt || "",
    ogImage: post.og_image || post.feature_image || null,
    twitterTitle: post.twitter_title || post.title,
    twitterDescription:
      post.twitter_description || post.custom_excerpt || post.excerpt || "",
    twitterImage: post.twitter_image || post.feature_image || null,
    canonicalUrl: `https://rodrigoibarra.rocks/notes/${post.slug}/`,
  },
});

export async function getPosts() {
  const posts = await api.posts.browse({
    include: ["tags"],
    limit: "all",
    order: "published_at DESC",
  });
  return posts.map(mapPost);
}

export async function getPostBySlug(slug: string) {
  const post = await api.posts.read({ slug }, { include: ["tags"] });
  return mapPost(post);
}
