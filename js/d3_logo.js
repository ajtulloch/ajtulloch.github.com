
$(document).ready( function() {
  var node1 = {x: 20, y: 60, letter: "A"};
  var node2 = {x: 40, y: 10, letter: "A"};
  var node3 = {x: 60, y: 60, letter: "A"};
  var node4 = {x: 30, y: 35, letter: "A"};
  var node5 = {x: 50, y: 35, letter: "A"};

  var l1 = {source: node1, target: node4};
  var l2 = {source: node4, target: node2};
  var l3 = {source: node3, target: node5};
  var l4 = {source: node5, target: node3};
  var l5 = {source: node4, target: node5};
  var l6 = {source: node5, target: node2};

  // var jn0 = {x: 80, y: 80, letter: "J"};
  // var jn1 = {x: 80, y: 90, letter: "J"};
  // var jn2 = {x: 115, y: 90, letter: "J"};
  // var jn3 = {x: 120, y: 40, letter: "J"};
  // var jn4 = {x: 120, y: 85, letter: "J"};
  // 
  // var jl0 = {source: jn0, target: jn1};
  // var jl1 = {source: jn1, target: jn2};
  // var jl2 = {source: jn2, target: jn4};
  // var jl3 = {source: jn4, target: jn3};

  var tn0 = {x: 140, y: 10, letter: "T"};
  var tn1 = {x: 160, y: 10, letter: "T"};
  var tn2 = {x: 180, y: 10, letter: "T"};
  var tn3 = {x: 160, y: 60, letter: "T"};

  var tl0 = {source: tn0, target: tn1};
  var tl1 = {source: tn1, target: tn2};
  var tl2 = {source: tn1, target: tn3};

  var nodes = [node1, node2, node3, node4, node5, 
               // jn0, jn1, jn2, jn3, jn4,
               tn0, tn1, tn2, tn3];

  var links = [l1, l2, l3, l4, l5, l6, 
               // jl0, jl1, jl2, jl3,
               tl0, tl1, tl2];

  console.log(links);
  console.log(nodes);

  var w = 220,
      h = 100,
      fill = d3.scale.category20c(),
      r = 5;

  var vis = d3.select(".d3-logo").append("svg")
      .attr("width", w)
      .attr("height", h)

  // vis.append("rect")
  //     .attr("height", h)
  //     .attr("width", w)
  //     .attr("stroke", "none")
  //     .attr("fill", "none")

  var force = d3.layout.force()
      .charge(-50)
      // .linkDistance(20)
      // .linkStrength(1)
      // .friction(0.1)
      .nodes(nodes)
      .links(links)
      .size([w, h])

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

  force.on("tick", function() {
    link
      .attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

    node
      .attr("cx", function(d) { return d.x = Math.max(r, Math.min(w - r, d.x)); })
      .attr("cy", function(d) { return d.y = Math.max(r, Math.min(h - r, d.y)); });
  });

  vis.on("click", function() {
    force.start()
    mixpanel.track("d3 Logo Click")
  })
});
