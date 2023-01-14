import * as React from 'react';

interface PopoverContextProps {}

export const PopoverContext = React.createContext<PopoverContextProps | null>(null);
