import { Card } from '../ui/card';

interface CardRootProps {
  children: React.ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return <Card>{children}</Card>;
}
