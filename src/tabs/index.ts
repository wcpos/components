import { TabBarSkeleton, TabsSkeleton } from './skeleton';
import { TabBar } from './tab-bar';
import { Tabs } from './tabs';

export default Object.assign(Tabs, { TabBar, TabBarSkeleton, Skeleton: TabsSkeleton });
