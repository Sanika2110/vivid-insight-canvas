import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';

const data = [
  { name: 'Jan', revenue: 45000, users: 2400, conversions: 240 },
  { name: 'Feb', revenue: 52000, users: 1398, conversions: 210 },
  { name: 'Mar', revenue: 48000, users: 9800, conversions: 290 },
  { name: 'Apr', revenue: 61000, users: 3908, conversions: 320 },
  { name: 'May', revenue: 55000, users: 4800, conversions: 280 },
  { name: 'Jun', revenue: 67000, users: 3800, conversions: 350 },
];

export const CustomLineChart: React.FC = () => {
  const chartConfig = {
    revenue: { label: "Revenue", color: "hsl(var(--primary))" },
    users: { label: "Users", color: "hsl(var(--secondary))" }
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0.1}/>
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
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
          activeDot={{ r: 8, fill: 'hsl(var(--primary))', strokeWidth: 2 }}
        />
        <Line 
          type="monotone" 
          dataKey="users" 
          stroke="hsl(var(--secondary))"
          strokeWidth={3}
          dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 6 }}
          activeDot={{ r: 8, fill: 'hsl(var(--secondary))', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
    </ChartContainer>
  );
};