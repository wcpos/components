import { Text, TextProps } from './text';
import { TextSkeleton } from './skeleton';

export type { TextProps };

export default Object.assign(Text, { Skeleton: TextSkeleton });
