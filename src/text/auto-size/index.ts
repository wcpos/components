import { Group, GroupProps } from './group';
import { MaxLines, MaxLinesProps } from './max-lines';
import { MinFontSize, MinFontSizeProps } from './min-font-size';
import { OverflowReplacement, OverflowReplacementProps } from './overflow-replacement';
import { PresetFontSizes, PresetFontSizesProps } from './present-font-sizes';
import { StepGranularity, StepGranularityProps } from './step-granularity';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Arrow> = {
	Group,
	MaxLines,
	MinFontSize,
	OverflowReplacement,
	PresetFontSizes,
	StepGranularity,
};

export {
	GroupProps,
	MaxLinesProps,
	MinFontSizeProps,
	OverflowReplacementProps,
	PresetFontSizesProps,
	StepGranularityProps,
};
