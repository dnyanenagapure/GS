// src/components/MarketChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { observer } from 'mobx-react-lite';
import assetStore from '../stores/AssetStore';

const MarketChart = observer(() => {
    const ref = useRef();

    useEffect(() => {
        drawChart();
    }, [assetStore.data]); // Redraw when data changes

    const drawChart = () => {
        const margin = { top: 20, right: 30, bottom: 30, left: 60 };
        const width = 1000 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Remove the old svg
        d3.select(ref.current).selectAll("svg").remove();

        const svg = d3.select(ref.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleTime()
            .domain(d3.extent(assetStore.data, d => d.date))
            .range([0, width]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(assetStore.data, d => d.value)])
            .range([height, 0]);

        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));

        const line = d3.line()
            .x(d => x(d.date))
            .y(d => y(d.value));

        svg.append("path")
            .datum(assetStore.data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);

        // Tooltip container
        const tooltip = d3.select(ref.current)
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("background", "white")
            .style("border", "1px solid #ccc")
            .style("padding", "5px");

        // Add circles and tooltips
        svg.selectAll("dot")
            .data(assetStore.data)
            .enter().append("circle")
            .attr("r", 5)
            .attr("cx", d => x(d.date))
            .attr("cy", d => y(d.value))
            .on("mouseover", (event, d) => {
                tooltip.html(`Date: ${d.date.toDateString()}<br>Value: ${d.value}`)
                    .style("visibility", "visible")
                    .style("left", `${event.pageX + 10}px`)
                    .style("top", `${event.pageY + 10}px`);
            })
            .on("mouseout", () => tooltip.style("visibility", "hidden"));
    };

    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
});

export default MarketChart;