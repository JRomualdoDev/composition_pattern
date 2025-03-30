import { ToggleGroup } from '../../ui/toggle-group';
import { ChartHeaderToggleGroupItem } from './chartHeaderToggleGroupItem';

interface ChartHeaderToggleGroupProps {
  timeRange: string;
  setTimeRange: (timeRange: string) => void;
}

export function ChartHeaderToggleGroup({
  timeRange,
  setTimeRange,
}: ChartHeaderToggleGroupProps) {
  return (
    <ToggleGroup
      type="single"
      value={timeRange}
      onValueChange={setTimeRange}
      variant="outline"
      className="@[767px]/card:flex hidden"
    >
      <ChartHeaderToggleGroupItem title="Last 3 months" value="90d" />
      <ChartHeaderToggleGroupItem title="Last 30 days" value="30d" />
      <ChartHeaderToggleGroupItem title="Last 7 days" value="7d" />
    </ToggleGroup>
  );
}
