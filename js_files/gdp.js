var margin = {top: 20, right: 20, bottom: 30, left: 90},
   width = 1100 - margin.left - margin.right,
   height = 600 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
   .rangeRoundBands([0, width], 0.5  );

var y = d3.scale.linear()
   .range([height, 0]);

var xAxis = d3.svg.axis()
   .scale(x)
   .orient("bottom");

var yAxis = d3.svg.axis()
   .scale(y)
   .orient("left");

var svg = d3.select("body").append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
 .append("g")
   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("../js_files/gdp_Country.json", function(error, data) {

data.forEach(function(d) {
       d.Country_Name=d.Country_Name;
       d.gdp_2013 = +d.gdp_2013;

   });

data.sort(function(a,b){
   return b.gdp_2013 - a.gdp_2013;
});

console.log(data);
 if (error) throw error;

 x.domain(data.map(function(d) { return d.Country_Name; }));
 y.domain([0, d3.max(data, function(d) {  return d.gdp_2013; })]);

 svg.append("g")
     .attr("class", "x axis")
     .attr("transform", "translate(0," + height + ")")
     .call(xAxis)
   .selectAll("text")
     .style("text-anchor", "end")
     .attr("dx", "-.8em")
     .attr("dy", "-.55em")
     .attr("transform", "rotate(-90)" );

     svg.append("g")
     .attr("class", "y axis")
     .call(yAxis)
   .append("text")
     .attr("transform", "rotate(-90)")
     .attr("y", 6)
     .attr("dy", ".71em")
     .style("text-anchor", "end")
     .text("GDP");

console.log(data);
 svg.selectAll("bar")
     .data(data)
   .enter().append("rect")
     .attr("class", "bar")
     .attr("x", function(d) { return x(d.Country_Name); })
     .attr("y",function(d){ return y(d.gdp_2013);} )
     .attr("width", x.rangeBand())
     .attr("height", function(d) { return (height - y(d.gdp_2013)); });

});
