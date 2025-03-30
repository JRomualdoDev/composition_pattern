import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartHeaderToggleGroup } from './chartHeaderToggleGroup';
import { ChartHeaderSelect } from './chartHeaderSelect';

interface ChartHeaderProps {
  title: string;
  description: string;
  descriptionSpan: string;
  timeRange: string;
  setTimeRange: (timeRange: string) => void;
}

export function ChartHeader({
  title,
  description,
  descriptionSpan,
  timeRange,
  setTimeRange,
}: ChartHeaderProps) {
  return (
    <CardHeader className="relative">
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        <span className="@[540px]/card:block hidden">{description}</span>
        <span className="@[540px]/card:hidden">{descriptionSpan}</span>
      </CardDescription>
      <div className="absolute right-4 top-4">
        <ChartHeaderToggleGroup
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />

        <ChartHeaderSelect timeRange={timeRange} setTimeRange={setTimeRange} />
      </div>
    </CardHeader>
  );
}
