import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import { Card } from './card';

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card.Root>
        <Card.Header
          description="Total Revenue"
          title="$1,250.00"
          badge_title="+12.5%"
          icon={TrendingUpIcon}
        />
        <Card.Footer
          title="Trending up this month"
          subtitle="Visitors for the last 6 months"
          icon={TrendingUpIcon}
        />
      </Card.Root>

      <Card.Root>
        <Card.Header
          description="New Customers"
          title="1,234"
          badge_title="-20%"
          icon={TrendingDownIcon}
        />
        <Card.Footer
          title="Down 20% this period"
          subtitle="Acquisition needs attention"
          icon={TrendingDownIcon}
        />
      </Card.Root>
      <Card.Root>
        <Card.Header
          description="Active Accounts"
          title="45,678"
          badge_title="+12.5%"
          icon={TrendingUpIcon}
        />
        <Card.Footer
          title="Strong user retention"
          subtitle="Engagement exceed targets"
          icon={TrendingUpIcon}
        />
      </Card.Root>
      <Card.Root>
        <Card.Header
          description="Growth Rate"
          title="4.5%"
          badge_title="+4.5%"
          icon={TrendingUpIcon}
        />
        <Card.Footer
          title="Steady performance"
          subtitle="Meets growth projections"
          icon={TrendingUpIcon}
        />
      </Card.Root>
    </div>
  );
}
