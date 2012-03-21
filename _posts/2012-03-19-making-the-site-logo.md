---
title: Making the Site Logo with D3.js
layout: post
intro: |
    See the `A T` logo in the sidebar?  Click it, and see what happens! You can also drag the individual nodes around, and watch as they interact with each other!

    This is all thanks to the magic of [Mike Bostock's][mbostock] [D3.js][d3.js] Javascript library, which provides an efficient set of methods to manipulate the DOM.  From the [website][d3.js], 

    >D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document. As a trivial example, you can use D3 to generate a basic HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.

    
    [mbostock]: http://bost.ocks.org/mike
    [d3.js]: http://mbostock.github.com/d3
    [d3.js tutorials]: http://mbostock.github.com/d3/api/
    [d3.js gallery]: http://mbostock.github.com/d3/ex/#user_gallery
    [d3.js examples]: http://mbostock.github.com/d3/ex/
---

See the `A T` logo in the sidebar?  Click it, and see what happens! You can also drag the individual nodes around, and watch as they interact with each other!

This is all thanks to the magic of [Mike Bostock's][mbostock] [D3.js][d3.js] Javascript library, which provides an efficient set of methods to manipulate the DOM.  From the [website][d3.js], 

> D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document. As a trivial example, you can use D3 to generate a basic HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.

### Introduction to D3.js

There are a vast number of tutorials on D3.js, some of which have been collected [here][d3.js tutorials].  The key patterns is that we load some data - be it JSON, CSV, Javascript array, etc., then bind this data to a *selection* (a collection of DOM nodes), and finally modify the attributes of our selected objects with functions operating on the data.

### Making the Logo

The code for the logo is attached below.

{% highlight javascript %}
// Nodes, links for A
var an1 = {x: 20, y: 60, letter: "A"},
    an2 = {x: 40, y: 10, letter: "A"},
    an3 = {x: 60, y: 60, letter: "A"},
    an4 = {x: 30, y: 35, letter: "A"},
    an5 = {x: 50, y: 35, letter: "A"};

var al1 = {source: an1, target: an4},
    al2 = {source: an4, target: an2},
    al3 = {source: an3, target: an5},
    al4 = {source: an5, target: an3},
    al5 = {source: an4, target: an5},
    al6 = {source: an5, target: an2};

// Nodes, links for T
var tn0 = {x: 140, y: 10, letter: "T"},
    tn1 = {x: 160, y: 10, letter: "T"},
    tn2 = {x: 180, y: 10, letter: "T"},
    tn3 = {x: 160, y: 60, letter: "T"};
    
var tl0 = {source: tn0, target: tn1},
    tl1 = {source: tn1, target: tn2},
    tl2 = {source: tn1, target: tn3};

// Putting it together
var nodes = [an1, an2, an3, an4, an5, 
           	tn0, tn1, tn2, tn3];

var links = [al1, al2, al3, al4, al5, al6, 
           	tl0, tl1, tl2];
{% endhighlight %}

This initialisation code is fairly self-explanatory.  I played a bit to create the x- and y-coordinates for the letter nodes, but the code is fairly straightforward.  All this data could be extracted into a JSON file and loaded asynchronously, but for pedagogical purposes this may be a clearer approach.

{% highlight javascript %}
var w = 220,
  h = 100,
  fill = d3.scale.category20c(),
  r = 5;

var vis = d3.select("#d3-logo").append("svg")
  .attr("width", w)
  .attr("height", h)

var force = d3.layout.force()
  .charge(-50)
  .nodes(nodes)
  .links(links)
  .size([w, h])
{% endhighlight %}

We then setup our SVG element that will contain our logo, and initialise the graviational force that provides the dynamic effects.  Note the first useage of the `select` method, which is familiar to users of JQuery - we select our containing div with the `select`, then append an SVG element to this div, set it's attributes, and then return our SVG element for further manipulation.

{% highlight javascript %}
var link = vis.selectAll("line.link")
  .data(links)
.enter().insert("line")
  .attr("class", "link")
  .attr("x1", function(d) { return d.source.x; })
  .attr("y1", function(d) { return d.source.y; })
  .attr("x2", function(d) { return d.target.x; })
  .attr("y2", function(d) { return d.target.y; })
  .attr("stroke", "#999");

var node =  vis.selectAll("circle.node")
  .data(nodes)
.enter().insert("circle")
  .attr("class", "node")
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("r", r)
  .attr("fill", function(d) { return fill(d.letter); })
  .call(force.drag);
{% endhighlight %}

We now add our letter data to the SVG element.  As before, we use a selection operator (here, `selectAll`) to generate our lines, bind the letter positioning data with the `data` method, and use the `enter` method to set various the attributes of the generated nodes.

{% highlight javascript %}
force.on("tick", function() {
link
  .attr("x1", function(d) { return d.source.x; })
  .attr("y1", function(d) { return d.source.y; })
  .attr("x2", function(d) { return d.target.x; })
  .attr("y2", function(d) { return d.target.y; });

node
  .attr("cx", function(d) { 
  	return d.x = Math.max(r, Math.min(w - r, d.x)); 
  })
  .attr("cy", function(d) { 
  	return d.y = Math.max(r, Math.min(h - r, d.y)); 
  });
});

vis.on("click", function() {
	force.start()
})
{% endhighlight %}

Finally, we specify how the graviational force interacts with the nodes.  The `on` method allows us to specify how the attributes of the DOM node interact with the gravitational force.  The function

{% highlight javascript %}
function(d) { 
	return d.x = Math.max(r, Math.min(w - r, d.x)); 
}
{% endhighlight %} 
is a simple collision-detection function - we do not let any part of the node go outside the bounding box.

Finally, we add a `click` event listener to the SVG element, that causes the force to take effect when the visualisation is clicked.

### Summary

That's all there is to it! For further resources on D3.js, have a look at the [tutorials][d3.js tutorials], [examples][d3.js examples] and [gallery][d3.js gallery] on the D3.js [homepage][d3.js].


[mbostock]: http://bost.ocks.org/mike
[d3.js]: http://mbostock.github.com/d3
[d3.js tutorials]: http://mbostock.github.com/d3/api/
[d3.js gallery]: http://mbostock.github.com/d3/ex/#user_gallery
[d3.js examples]: http://mbostock.github.com/d3/ex/