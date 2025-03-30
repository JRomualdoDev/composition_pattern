import { ToggleGroupItem } from '../../ui/toggle-group';

interface ChartHeaderToggleGroupItemProps {
  title: string;
  value: string;
}

export function ChartHeaderToggleGroupItem({
  title,
  value,
}: ChartHeaderToggleGroupItemProps) {
  return (
    <>
      <ToggleGroupItem value={value} className="h-8 px-2.5">
        {title}
      </ToggleGroupItem>
    </>
  );
}
