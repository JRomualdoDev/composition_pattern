import { Card } from '@/components/ui/card';

interface ChartRootProps {
  children: React.ReactNode;
}

export function ChartRoot({ children }: ChartRootProps) {
  return <Card className="@container/card">{children}</Card>;
}
