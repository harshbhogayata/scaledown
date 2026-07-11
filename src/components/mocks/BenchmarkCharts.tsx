"use client";

import { BENCHMARK_DATA } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export function BenchmarkCharts() {
  return (
    <div className="flex w-full flex-col gap-24 md:gap-32 pb-20">
      {Object.entries(BENCHMARK_DATA).map(([key, bench], index) => (
        <Reveal key={key} y={40} delay={index === 0 ? 0.2 : 0}>
          <div className="flex flex-col gap-12">
            
            {/* Task Header (matching screenshot style) */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-1.5">
                <h3 className="text-[1.75rem] font-bold tracking-tight text-foreground md:text-[2rem]">
                  {bench.title}
                </h3>
                <ArrowUpRight className="size-5 text-primary mb-1" strokeWidth={2.5} />
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Standard Workload
              </div>
            </div>
            
            {/* Metrics Grid (Lollipop Charts) */}
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-16">
              {bench.metrics.map((metric) => {
                const maxVal = Math.max(...metric.data.map((d) => d.value));
                // Add 10% headroom so the tallest lollipop doesn't touch the very top line
                const chartMax = maxVal * 1.1; 
                
                const isCost = metric.name.includes("Cost");
                
                // Generate 5 Y-axis ticks (100%, 75%, 50%, 25%, 0%)
                const ticks = [1, 0.75, 0.5, 0.25, 0];

                return (
                  <div key={metric.name} className="flex flex-col">
                    {/* Chart Title */}
                    <div className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      {metric.name}
                    </div>
                    
                    {/* Chart Area */}
                    <div className="relative h-[240px] w-full">
                      
                      {/* Background Grid Lines & Y-Axis Labels */}
                      <div className="absolute inset-0 flex flex-col justify-between pb-8">
                        {ticks.map((tickPercentage, i) => {
                          const rawVal = chartMax * tickPercentage;
                          let formattedVal = rawVal.toFixed(1);
                          if (isCost) {
                            formattedVal = `$${rawVal.toFixed(0)}`;
                          } else if (rawVal > 1000) {
                            formattedVal = `${(rawVal / 1000).toFixed(0)}k`;
                          } else if (rawVal === 0) {
                            formattedVal = isCost ? "$0" : "0";
                          }

                          return (
                            <div key={i} className="relative flex w-full items-center">
                              <div className="w-12 pr-4 text-right text-[10px] font-medium text-[#a1a1aa]">
                                {formattedVal}
                              </div>
                              <div className="h-[1px] flex-1 bg-[#f4f4f5]" />
                            </div>
                          );
                        })}
                      </div>

                      {/* Lollipops */}
                      <div className="absolute inset-0 left-12 flex items-end justify-around pb-[31px]">
                        {metric.data.map((entry) => {
                          const isScaleDown = entry.model === "ScaleDown";
                          
                          // Calculate height percentage relative to chartMax
                          const percentage = Math.max(2, (entry.value / chartMax) * 100);

                          return (
                            <div 
                              key={entry.model} 
                              className="relative flex w-10 flex-col items-center justify-end group" 
                              style={{ height: `${percentage}%` }}
                            >
                              {/* Hover Tooltip */}
                              <div className="absolute -top-8 opacity-0 transition-opacity group-hover:opacity-100 text-[11px] font-bold text-foreground bg-white border border-[#e5e5e5] px-2 py-1 rounded shadow-sm z-20 pointer-events-none whitespace-nowrap">
                                {isCost ? `$${entry.value}` : entry.value.toLocaleString()}
                              </div>

                              {/* Circle (Lollipop Head) */}
                              <div className={`relative z-10 size-2.5 rounded-full transition-transform group-hover:scale-125 ${
                                isScaleDown ? "bg-primary" : "bg-[#d4d4d8]"
                              }`} />
                              
                              {/* Line (Lollipop Stick) */}
                              <div className={`w-[2px] flex-1 ${
                                isScaleDown ? "bg-primary" : "bg-[#e4e4e7]"
                              }`} />
                              
                              {/* X-Axis Label */}
                              <div className="absolute -bottom-7 text-[10px] font-medium text-muted-foreground whitespace-nowrap">
                                {entry.model}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
