import { Content } from './content';
import { Popover } from './popover';
import { Target } from './target';
export type { PopoverPlacement } from './helpers';
export type { PopoverProps } from './popover';

export default Object.assign(Popover, { Target, Content });
