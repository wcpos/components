import * as React from 'react';

import Box from '../box';
import Collapsable from '../collapsible';

interface AccordionItemProps {
	title: React.ReactNode;
	content: React.ReactNode;
}

export interface AccordionProps {
	items: AccordionItemProps[];
}

export const Accordion = ({ items }: AccordionProps) => {
	const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);

	return (
		<Box>
			{items.map(({ title, content }, index) => {
				return (
					<Collapsable
						key={index}
						title={title}
						initExpand={index === currentIndex}
						onChangeState={(open) => {
							open && setCurrentIndex(index);
						}}
					>
						{content}
					</Collapsable>
				);
			})}
		</Box>
	);
};
