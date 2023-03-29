import { TextSkeleton } from './skeleton';
import { Text, TextProps } from './text';

export type { TextProps };

export default Object.assign(Text, { Skeleton: TextSkeleton });
