import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Settings, User, Download, RefreshCw } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <header className="glass-card border-card-border border-b sticky top-0 z-50 backdrop-blur-xl">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-6">
          <div>
            <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent neon-text">
              ADmyBRAND
            </h1>
            <p className="text-sm text-muted-foreground">Insights Dashboard</p>
          </div>
          <Badge variant="outline" className="gradient-neon text-black font-medium border-0 px-3 py-1">
            Live Data
          </Badge>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="border-card-border hover-glow"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>

          <Button variant="outline" size="sm" className="border-card-border hover-glow">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="border-card-border hover-glow relative">
              <Bell className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse-glow" />
            </Button>

            <Button variant="outline" size="icon" className="border-card-border hover-glow">
              <Settings className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon" className="border-card-border hover-glow">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};