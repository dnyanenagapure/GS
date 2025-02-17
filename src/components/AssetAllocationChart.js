// src/components/AssetAllocationChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { observer } from 'mobx-react';
import assetStore from '../stores/AssetStore';
import { Container, Paper } from '@mui/material';

const AssetAllocationChart = observer(() => {
    const ref = useRef();

    useEffect(() => {
        if (assetStore.assets.length) {
            drawChart();
        }
    }, [assetStore.assets]); 

    const drawChart = () => {
        const data = assetStore.assets;
        const width = 800;  // Increased width to accommodate the legend
        const height = 360;
        const radius = Math.min(width, height) / 2;
    
        d3.select(ref.current).selectAll("*").remove(); 
    
        const svg = d3.select(ref.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${radius - 50}, ${height / 2})`); // Move chart to left
    
        const color = d3.scaleOrdinal()
            .domain(data.map(d => d.name))
            .range(["#D8DBF0", "#61B75E", "#3B98E2"]);
    
        const pie = d3.pie()
            .value(d => d.value)
            .sort(null);
    
        const arc = d3.arc()
            .innerRadius(80)
            .outerRadius(radius - 50);
    
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
            .style("font-size", "12px")
            .text(d => `${((d.data.value / d3.sum(data, d => d.value)) * 100).toFixed(1)}%`);
    
        // Legend positioned to the right side
        const legend = d3.select(ref.current).select("svg")
            .append("g")
            .attr("transform", `translate(${width - 130}, ${height / 3})`); // Move legend to right
    
        color.domain().forEach((d, i) => {
            const legendRow = legend.append("g")
                .attr("transform", `translate(0, ${i * 25})`);
    
            legendRow.append("rect")
                .attr("width", 12)
                .attr("height", 12)
                .attr("fill", color(d));
    
            legendRow.append("text")
                .attr("x", 20)
                .attr("y", 10)
                .style("font-size", "12px")
                .style("text-anchor", "start")
                .text(d);
        });
    };
    
    return (
        <Paper elevation={3}>
            <Container>
                <div ref={ref}></div>
            </Container>
        </Paper>
    );
});

export default AssetAllocationChart;
