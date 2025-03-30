import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChartHeaderSelectItem } from './chartHeaderSelectItem';

interface ChartHeaderSelectProps {
  timeRange: string;
  setTimeRange: (timeRange: string) => void;
}

export function ChartHeaderSelect({
  timeRange,
  setTimeRange,
}: ChartHeaderSelectProps) {
  return (
    <>
      <Select value={timeRange} onValueChange={setTimeRange}>
        <SelectTrigger
          className="@[767px]/card:hidden flex w-40"
          aria-label="Select a value"
        >
          <SelectValue placeholder="Last 3 months" />
        </SelectTrigger>
        <SelectContent className="rounded-xl">
          <ChartHeaderSelectItem value="90d" title="Last 3 months" />
          <ChartHeaderSelectItem value="30d" title="Last 30 days" />
          <ChartHeaderSelectItem value="7d" title="Last 7 days" />
        </SelectContent>
      </Select>
    </>
  );
}
