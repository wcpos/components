import { View, Text as RNText } from 'react-native';

import { verifyInstallation } from 'nativewind';

import '../../global.css';

export const Text = ({ text }) => {
	verifyInstallation();

	return (
		<View className="flex-1 items-center justify-center">
			<RNText className="text-[--theme-fg]">{text}</RNText>
		</View>
	);
};
