import { CardFooter } from '../ui/card';
import { ElementType } from 'react';

interface CardFooterProps {
  title: string;
  subtitle: string;
  icon: ElementType;
}
export function CardFooterComponents({
  title,
  subtitle,
  icon: Icon,
}: CardFooterProps) {
  return (
    <CardFooter className="flex-col items-start gap-1 text-sm">
      <div className="line-clamp-1 flex gap-2 font-medium">
        {title} <Icon className="size-4" />
      </div>
      <div className="text-muted-foreground">{subtitle}</div>
    </CardFooter>
  );
}
