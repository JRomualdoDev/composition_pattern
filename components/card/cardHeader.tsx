import { CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ElementType } from 'react';

interface CardHeaderProps {
  description: string;
  title: string;
  badge_title: string;
  icon: ElementType;
}

export function CardHeaderComponents({
  description,
  title,
  badge_title,
  icon: Icon,
}: CardHeaderProps) {
  return (
    <CardHeader className="relative">
      <CardDescription>{description}</CardDescription>
      <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
        {title}
      </CardTitle>
      <div className="absolute right-4 top-4">
        <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
          <Icon className="size-3" />
          {badge_title}
        </Badge>
      </div>
    </CardHeader>
  );
}
