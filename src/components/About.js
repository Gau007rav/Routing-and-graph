import React,{useState,useRef,useEffect} from 'react'
import * as d3 from 'd3';

export default function About() {
  const data = useState([3,5,7,9,20,12,26,28])
  const svgRef = useRef();
  useEffect(()=>{
   const w = parseInt(400);
   const h = parseInt(300);
   const svg = d3.select(svgRef.current)
   .attr("width",w)
   .attr("height",h)
   .style("overflow","visible")
   .style("margin-top","75px")
   const xScale = d3.scaleBand()
   .domain(data.map((val,i)=>i))
   .range([0,w])
   .padding(0.5);
   const yScale = d3.scaleLinear()
   .domain([0,h])
   .range([h,0])
   const xAxis = d3.axisBottom(xScale)
   .ticks(data.length)
   const yAxis = d3.axisLeft(yScale)
   .ticks(5)
   svg.append("g")
   .call(xAxis)
   .attr("transform",`translate(0,${h})`)
   svg.append("g")
   .call(yAxis);
   svg.selectAll('.bar')
   .data(data)
   .join('rect')
   .attr('x',(v,i)=>xScale(i))
   .attr('y',yScale)
   .attr("width",xScale.bandwidth())
   .attr("height", val => h - yScale(val));
  },[data])
  return (
    <div>
   this is graph
<svg ref={svgRef}></svg>
    </div>
  )
}

