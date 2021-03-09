---
title: 📚 bookshelf
description: my collection of books
layout: base.njk
eleventyNavigation:
    key: bookshelf
    order: 300
permalink:  "{{ page.filePathStem }}.html"
templateEngineOverride: njk,md
---

i've been an avid reader since i was young.

## recently read books

here are the last books that i've read.

{% include "partials/recently-read.njk" %}

## influential books and authors

there are a few authors who i will go out of my way to read all of their books. in a way this makes it hard for me to branch out.
