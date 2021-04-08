class Graph {
    constructor () {

    }

    update() {
        let svg = d3.select(".bar-chart")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500);
        
        let bar1 = svg.append("rect")
            .attr("fill", "red")
            .attr("x", 100)
            .attr("y", 20)
            .attr("height", 20)
            .attr("width", 10)
        
        let bar2 = svg.append("rect")
            .attr("fill", "blue")
            .attr("x", 120)
            .attr("y", 20)
            .attr("height", 20)
            .attr("width", 10)
        bar1.transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attr("height", 100)
    
        bar2.transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .delay(2000)
        .attr("height", 100)
    }

};

export default Graph;