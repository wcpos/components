import { Content } from './content';
import { Popover } from './popover';
import { Target } from './target';
export type { PopoverPlacement } from './placements';
export type { PopoverProps } from './popover';

export default Object.assign(Popover, { Target, Content });
