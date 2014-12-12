# Offscreen Menu

Inspired by the work done by [David Bushell](http://dbushell.com/) on [responsive off-canvas navigation](http://coding.smashingmagazine.com/2013/01/15/off-canvas-navigation-for-responsive-website/), I wanted to create a very simple offscreen menu solution that would:

- Work down to IE8 (patched with respond.js)
- Be mobile first but kick off only when screen size was below 62.5em (1000px)-
- Have small and medium screens versions

[View Demo](http://jeromecoupe.github.io/offscreen_menu/)

## Details

Browsers have to support both JavaScript and media queries to get the full experience. Any browser not supporting one or the other gets a mobile first version of the menu. The only exception is IE8, which gets respond.js to make it support simple width based media queries.

The offscreen menu works by having a `.page <div>` that serves as positioning context for the navigation menu that is positioned absolutely offscreen. When the nav is active, the left position of the `.page <div>` is updated to make the menu visible or hidden. a `.wrapper <div>` defines the width of the site and ensure that everything off limits stays invisible by using `overflow:hidden`.

`min-height` is used on the content to make sure it is at least the height of the menu to prevent the menu from being cut off by the `overflow:hidden;`. Using `vh` units with a pixel fallback for the browsers not supporting these units.

## Technologies

Used [Modernizr](http://modernizr.com/) to detect JavaScript and SVG support.

[Respond.js](https://github.com/scottjehl/Respond) by [Scott Jehl](http://scottjehl.com/) was used as a media queries polyfill for IE8. Full IE8 support was needed for the project I was working on but you could easily skip that and only fully support IE9.

I used SASS to code the whole thing. All CSS rules dealing with the positionning of the `.page <div>` and menu as well as with the menu styles are encapsulated in media queries and `.js` Modernizr rules.

The JavaScript is really basic here as I wanted to focus on the CSS.

Javascript is just used to toggle a class on the `<body>` tag and to inject the toogle naviagtion button code into the page. All of this could have been done just with vanilla JavaScript but I usually choose to rely on jQuery wherever I have to support IE8. See [this excellent post](http://remysharp.com/2013/04/19/i-know-jquery-now-what/) by Remy Sharp on the topic.
