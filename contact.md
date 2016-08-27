---
layout: default
title: Contact Me
---

<div id="articles">
  <h1>Contact Me!</h1>
  <ul class="posts noList">
    {% for post in site.posts %}
      <li>
      	<span class="date">{{ post.date | date_to_string }}</span>
      	<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      	<p class="description">{% if post.description %}{{ post.description  | strip_html | strip_newlines | truncate: 120 }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 120 }}{% endif %}</p>
      </li>
    {% endfor %}
  </ul>
</div>

### Contact Me

Email is the best way to reach me! 

Email: kjmoore@mit.edu

Connect with me on [LinkedIn](https://www.linkedin.com/in/karleighmoore)

My [github](https://github.com/kar-moore/) 