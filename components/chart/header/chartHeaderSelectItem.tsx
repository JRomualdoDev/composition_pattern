import { SelectItem } from '@/components/ui/select';

interface ChartHeaderProps {
  value: string;
  title: string;
}

export function ChartHeaderSelectItem({ value, title }: ChartHeaderProps) {
  return (
    <SelectItem value={value} className="rounded-lg">
      {title}
    </SelectItem>
  );
}
