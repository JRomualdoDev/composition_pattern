'use client';

import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { chartConfig } from './chart/chartConfig';
import { chartData } from './chart/chartData';
import { Chart } from './chart';

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState('30d');

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange('7d');
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date('2024-06-30');
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Chart.Root>
      <Chart.Header
        title="Total Visitors"
        description="Total for the last 3 months"
        descriptionSpan="Last 3 months"
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />
      <Chart.Content chartConfig={chartConfig} filteredData={filteredData} />
    </Chart.Root>
  );
}
