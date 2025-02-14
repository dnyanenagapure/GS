// src/components/AssetAllocationChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { observer } from 'mobx-react';
import assetStore from '../stores/AssetStore';

const AssetAllocationChart = observer(() => {
    const ref = useRef();

    useEffect(() => {
        if (assetStore.assets.length) {//{assetStore} this is coming from mobx store
            drawChart();
        }
    }, [assetStore.assets]); 

    const drawChart = () => {
        const data = assetStore.assets;
        const width = 360;
        const height = 360;
        const radius = Math.min(width, height) / 2;
        const legendHeight = 80; 
    
        d3.select(ref.current).selectAll("*").remove(); 
    
        const svg = d3.select(ref.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height + legendHeight)  
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);
    
        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.name))
            .range(["#D8DBF0", "#61B75E", "#3B98E2"]);
    
        const pie = d3.pie()
            .value(d => d.value)
            .sort(null);
    
        const arc = d3.arc()
            .innerRadius(100)
            .outerRadius(radius);
    
        const arcs = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
    
        arcs.append("path")
            .attr("d", arc)
            .attr("fill", d => color(d.data.name));
    
        arcs.append("text")
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .attr("text-anchor", "middle")
            .text(d => `${((d.data.value / d3.sum(data, d => d.value)) * 100).toFixed(1)}%`);
    
        //  legend setup to place below the chart
        const legend = svg.append("g")
            .attr("transform", `translate(${-width / 1.5}, ${radius + 20})`); // Move legend below the chart
    
        color.domain().forEach((d, i) => {
            const legendRow = legend.append("g")
                .attr("transform", `translate(0, ${i * 20})`) 
                .attr("style", 'font-size:12px;margin-left:-100px');
    
            legendRow.append("rect")
                .attr("x", width / 2 - 18)
                .attr("y", (d, i) => 20 * i + 5)
                .attr("width", 10)
                .attr("height", 10)
                .style("fill", color(d));
    
            legendRow.append("text")
                .attr("x", width / 2)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(d);
        });
    };
    
    return <div ref={ref}></div>;
    
});

export default AssetAllocationChart;
