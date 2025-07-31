import React from 'react';
import { DashboardHeader } from '@/components/dashboard/Header';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ChartCard } from '@/components/dashboard/ChartCard';
import { CustomLineChart } from '@/components/dashboard/charts/LineChart';
import { CustomBarChart } from '@/components/dashboard/charts/BarChart';
import { DonutChart } from '@/components/dashboard/charts/DonutChart';
import { DataTable } from '@/components/dashboard/DataTable';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Target,
  ArrowUp,
  ArrowDown,
  Activity,
  Globe
} from 'lucide-react';
import heroImage from '@/assets/hero-analytics.jpg';

const metrics = [
  {
    title: 'Total Revenue',
    value: '$284,530',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: DollarSign,
    gradient: 'primary' as const
  },
  {
    title: 'Active Users',
    value: '125,420',
    change: '+8.2%',
    changeType: 'positive' as const,
    icon: Users,
    gradient: 'secondary' as const
  },
  {
    title: 'Conversions',
    value: '8,942',
    change: '+15.3%',
    changeType: 'positive' as const,
    icon: Target,
    gradient: 'accent' as const
  },
  {
    title: 'Growth Rate',
    value: '23.8%',
    change: '-2.1%',
    changeType: 'negative' as const,
    icon: TrendingUp,
    gradient: 'neon' as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1">
          <DashboardHeader />
          
          <main className="p-6 space-y-6">
            {/* Hero Section */}
            <Card className="glass-card border-card-border relative overflow-hidden animate-scale-in">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10 p-8">
                <div className="max-w-2xl">
                  <Badge className="gradient-neon text-black font-medium border-0 mb-4">
                    <Activity className="h-3 w-3 mr-1" />
                    Real-time Analytics
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 neon-text">
                    Welcome to the Future of 
                    <span className="gradient-primary bg-clip-text text-transparent"> Analytics</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Experience mesmerizing data visualization with dynamic insights that transform how you understand your digital performance.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="gradient-primary text-black border-0">
                      <Globe className="h-3 w-3 mr-1" />
                      Global Reach
                    </Badge>
                    <Badge variant="outline" className="gradient-secondary text-black border-0">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Growing Fast
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={metric.title} style={{ animationDelay: `${index * 0.1}s` }}>
                  <MetricCard {...metric} />
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartCard title="Revenue & User Growth">
                  <CustomLineChart />
                </ChartCard>
              </div>
              
              <ChartCard title="Traffic Sources">
                <DonutChart />
              </ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Device Performance">
                <CustomBarChart />
              </ChartCard>

              <Card className="glass-card border-card-border p-6 hover-glow animate-slide-up">
                <h3 className="text-xl font-semibold text-foreground mb-6">Live Activity Feed</h3>
                <div className="space-y-4">
                  {[
                    { action: 'New conversion', time: '2 minutes ago', value: '+$420', type: 'success' },
                    { action: 'Campaign optimized', time: '5 minutes ago', value: '+8.2%', type: 'info' },
                    { action: 'Traffic spike detected', time: '12 minutes ago', value: '+156 users', type: 'warning' },
                    { action: 'Goal achieved', time: '18 minutes ago', value: '🎯 Target met', type: 'success' },
                  ].map((activity, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-card-hover/30 border border-card-border/50 hover-glow animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'success' ? 'bg-success animate-pulse-glow' :
                          activity.type === 'warning' ? 'bg-warning animate-pulse-glow' :
                          'bg-secondary animate-pulse-glow'
                        }`} />
                        <div>
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${
                          activity.type === 'success' ? 'text-success border-success/50' :
                          activity.type === 'warning' ? 'text-warning border-warning/50' :
                          'text-secondary border-secondary/50'
                        }`}
                      >
                        {activity.value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Data Table */}
            <DataTable />

            {/* Footer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card border-card-border p-6 text-center hover-glow animate-scale-in">
                <div className="gradient-primary w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                  <ArrowUp className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-foreground neon-text">99.9%</h3>
                <p className="text-muted-foreground">System Uptime</p>
              </Card>

              <Card className="glass-card border-card-border p-6 text-center hover-glow animate-scale-in">
                <div className="gradient-secondary w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                  <Globe className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-foreground neon-text">127</h3>
                <p className="text-muted-foreground">Countries Reached</p>
              </Card>

              <Card className="glass-card border-card-border p-6 text-center hover-glow animate-scale-in">
                <div className="gradient-accent w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                  <Activity className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-foreground neon-text">2.3M</h3>
                <p className="text-muted-foreground">Data Points Analyzed</p>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
