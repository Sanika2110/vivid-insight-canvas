import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const data = [
  { name: 'Q1', desktop: 45, mobile: 65, tablet: 25 },
  { name: 'Q2', desktop: 52, mobile: 70, tablet: 30 },
  { name: 'Q3', desktop: 48, mobile: 75, tablet: 35 },
  { name: 'Q4', desktop: 61, mobile: 80, tablet: 40 },
];

export const CustomBarChart: React.FC = () => {
  const chartConfig = {
    desktop: { label: "Desktop", color: "hsl(var(--primary))" },
    mobile: { label: "Mobile", color: "hsl(var(--secondary))" },
    tablet: { label: "Tablet", color: "hsl(var(--accent))" }
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barCategoryGap="20%">
        <defs>
          <linearGradient id="desktopBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.9}/>
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.6}/>
          </linearGradient>
          <linearGradient id="mobileBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.9}/>
            <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0.6}/>
          </linearGradient>
          <linearGradient id="tabletBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.9}/>
            <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.6}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="name" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            color: 'hsl(var(--foreground))'
          }}
        />
        <Bar 
          dataKey="desktop" 
          fill="url(#desktopBar)"
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="mobile" 
          fill="url(#mobileBar)"
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="tablet" 
          fill="url(#tabletBar)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
    </ChartContainer>
  );
};