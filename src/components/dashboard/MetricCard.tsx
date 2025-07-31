import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  gradient: 'primary' | 'secondary' | 'accent' | 'neon';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  gradient
}) => {
  const getGradientClass = (type: string) => {
    switch (type) {
      case 'primary': return 'gradient-primary';
      case 'secondary': return 'gradient-secondary';
      case 'accent': return 'gradient-accent';
      case 'neon': return 'gradient-neon';
      default: return 'gradient-primary';
    }
  };

  const getChangeColor = (type: string) => {
    switch (type) {
      case 'positive': return 'text-success';
      case 'negative': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="glass-card hover-glow relative overflow-hidden p-6 border-card-border animate-scale-in">
      {/* Animated background gradient */}
      <div className={`absolute inset-0 ${getGradientClass(gradient)} opacity-10`} />
      
      {/* Floating icon */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${getGradientClass(gradient)} animate-float`}>
          <Icon className="h-6 w-6 text-black/80" />
        </div>
        <div className={`text-sm font-medium ${getChangeColor(changeType)}`}>
          {change}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-muted-foreground text-sm font-medium mb-1">{title}</p>
        <p className="text-3xl font-bold text-foreground neon-text">{value}</p>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className={`absolute inset-0 ${getGradientClass(gradient)} opacity-20 blur-xl`} />
      </div>
    </Card>
  );
};