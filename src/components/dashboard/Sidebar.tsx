import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Calendar,
  Settings,
  HelpCircle,
  Zap
} from 'lucide-react';

const navigationItems = [
  { icon: BarChart3, label: 'Overview', active: true },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: Users, label: 'Audience' },
  { icon: Target, label: 'Campaigns' },
  { icon: DollarSign, label: 'Revenue' },
  { icon: Calendar, label: 'Schedule' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help & Support' },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="glass-card border-card-border border-r w-64 h-screen sticky top-0 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-card-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center animate-float">
            <Zap className="h-6 w-6 text-black" />
          </div>
          <div>
            <h2 className="font-bold text-foreground">ADmyBRAND</h2>
            <p className="text-xs text-muted-foreground">Analytics Pro</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="space-y-1">
          {navigationItems.map((item, index) => (
            <Button
              key={item.label}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start text-left hover-glow animate-slide-up ${
                item.active 
                  ? 'gradient-primary text-black font-medium shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-card-hover'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Performance Card */}
      <div className="p-4">
        <Card className="glass-card border-card-border p-4 hover-glow">
          <div className="text-center">
            <div className="w-12 h-12 gradient-secondary rounded-full mx-auto mb-3 flex items-center justify-center animate-pulse-glow">
              <TrendingUp className="h-6 w-6 text-black" />
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-1">Performance</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Your campaigns are performing 23% above average!
            </p>
            <Button size="sm" className="gradient-accent text-black hover-glow w-full">
              View Details
            </Button>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-card-border space-y-1">
        {bottomItems.map((item, index) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-card-hover hover-glow"
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </div>
    </aside>
  );
};