import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Search, Download, Filter } from 'lucide-react';

interface TableData {
  id: string;
  campaign: string;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  revenue: number;
  status: 'active' | 'paused' | 'ended';
}

const mockData: TableData[] = [
  { id: '1', campaign: 'Summer Sale 2024', impressions: 125000, clicks: 3200, ctr: 2.56, cpc: 1.25, revenue: 8500, status: 'active' },
  { id: '2', campaign: 'Black Friday Prep', impressions: 98000, clicks: 2800, ctr: 2.86, cpc: 1.45, revenue: 9200, status: 'active' },
  { id: '3', campaign: 'Product Launch Q4', impressions: 156000, clicks: 4100, ctr: 2.63, cpc: 1.35, revenue: 11500, status: 'active' },
  { id: '4', campaign: 'Retargeting Campaign', impressions: 67000, clicks: 1900, ctr: 2.84, cpc: 0.95, revenue: 5800, status: 'paused' },
  { id: '5', campaign: 'Brand Awareness', impressions: 189000, clicks: 3800, ctr: 2.01, cpc: 1.85, revenue: 7200, status: 'active' },
  { id: '6', campaign: 'Holiday Special', impressions: 145000, clicks: 4500, ctr: 3.10, cpc: 1.15, revenue: 13200, status: 'ended' },
];

export const DataTable: React.FC = () => {
  const [data, setData] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof TableData>('revenue');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (field: keyof TableData) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedData = React.useMemo(() => {
    return [...data].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }
      
      return sortDirection === 'asc' 
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [data, sortField, sortDirection]);

  const filteredData = sortedData.filter(item =>
    item.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-success';
      case 'paused': return 'text-warning';
      case 'ended': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/20 border-success/50';
      case 'paused': return 'bg-warning/20 border-warning/50';
      case 'ended': return 'bg-muted/20 border-muted/50';
      default: return 'bg-muted/20 border-muted/50';
    }
  };

  return (
    <Card className="glass-card p-6 border-card-border animate-slide-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h3 className="text-xl font-semibold text-foreground">Campaign Performance</h3>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background-secondary border-card-border"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-card-border">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-card-border">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-card-border">
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort('campaign')}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  Campaign
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort('impressions')}
                  className="flex items-center gap-2 hover:text-foreground transition-colors ml-auto"
                >
                  Impressions
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort('clicks')}
                  className="flex items-center gap-2 hover:text-foreground transition-colors ml-auto"
                >
                  Clicks
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort('ctr')}
                  className="flex items-center gap-2 hover:text-foreground transition-colors ml-auto"
                >
                  CTR %
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort('revenue')}
                  className="flex items-center gap-2 hover:text-foreground transition-colors ml-auto"
                >
                  Revenue
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-center py-3 px-4 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr 
                key={row.id} 
                className="border-b border-card-border/50 hover:bg-card-hover/50 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <td className="py-4 px-4">
                  <div className="font-medium text-foreground">{row.campaign}</div>
                </td>
                <td className="py-4 px-4 text-right text-foreground">
                  {row.impressions.toLocaleString()}
                </td>
                <td className="py-4 px-4 text-right text-foreground">
                  {row.clicks.toLocaleString()}
                </td>
                <td className="py-4 px-4 text-right text-foreground">
                  {row.ctr.toFixed(2)}%
                </td>
                <td className="py-4 px-4 text-right font-medium text-foreground">
                  ${row.revenue.toLocaleString()}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusBg(row.status)} ${getStatusColor(row.status)}`}>
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-card-border">
        <p className="text-sm text-muted-foreground">
          Showing {filteredData.length} of {data.length} campaigns
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled className="border-card-border">
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled className="border-card-border">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
};