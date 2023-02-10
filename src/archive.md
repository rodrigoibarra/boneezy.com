---
title: Archive
layout: "layouts/blogPost.njk"
---

This is a test for the archive page. 

{% for post in collections.Archive %}

-  [{{post.data.title}}]({{post.url}})

{% endfor %}