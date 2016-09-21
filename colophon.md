---
layout: default
title:  "colophon"
date:   2016-08-28
slug: colophon

---
Colophon

This site is powered by <a href="http://jekyllrb.com">Jekyll </a> and this theme is based off of [@brianmaierjr](https://twitter.com/brianmaierjr)'s [Long Haul](https://github.com/brianmaierjr/long-haul). 

A change I made to the theme was to add a SVG to overlay on the banner image to create the sloping effect. In the original code, this was accomplished in CSS by positioning a rectanglular div and rotating it by two degrees. I discovered that on larger screens, the banner image would peak out underneath the rectangle. To fix this, I added

```css
#tri{
    position: absolute;
    right: 0;
    bottom:0;
}

@media all and (orientation: portrait){
    #tri{
        display:none;
    }

}
```

To the bottom of my css file (and removed the original css) and added

```html
<svg id="tri" width="100%" height="40%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon points="100,100 100,0 0,100" style="fill:white"/>
</svg>

```

Right before the last closing div tag in the header file. 


The banner image is something I made for a visual design class I took at MIT (CMS.405). The assignment was to create a self portrait in some non-obvious way (i.e. not a photo of myself/a person). I photoshopped together a screenshot of some code for a project I was working on at the time with a photo of an article I wrote for <i>The Tech</i>. 


