import React from 'react';
import { Card } from '@/components/ui/card';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, children, className = '' }) => {
  return (
    <Card className={`glass-card hover-glow p-6 border-card-border animate-slide-up chart-container ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <div className="w-3 h-3 rounded-full bg-accent" />
        </div>
      </div>
      <div className="relative">
        {children}
      </div>
    </Card>
  );
};