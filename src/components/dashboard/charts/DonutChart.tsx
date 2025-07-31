import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const data = [
  { name: 'Organic Search', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Social Media', value: 25, color: 'hsl(var(--secondary))' },
  { name: 'Direct Traffic', value: 20, color: 'hsl(var(--accent))' },
  { name: 'Email Campaign', value: 10, color: 'hsl(var(--warning))' },
];

export const DonutChart: React.FC = () => {
  const chartConfig = {
    organic: { label: "Organic Search", color: "hsl(var(--primary))" },
    social: { label: "Social Media", color: "hsl(var(--secondary))" },
    direct: { label: "Direct Traffic", color: "hsl(var(--accent))" },
    email: { label: "Email Campaign", color: "hsl(var(--warning))" }
  };

  return (
    <div className="relative">
      <ChartContainer config={chartConfig} className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      </ChartContainer>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground neon-text">100K</div>
          <div className="text-sm text-muted-foreground">Total Visitors</div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-muted-foreground">{entry.name}</span>
            <span className="text-sm font-medium text-foreground ml-auto">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};