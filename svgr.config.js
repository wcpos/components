const path = require('path');

function defaultIndexTemplate(filePaths) {
	const exportEntries = filePaths.map((filePath) => {
		const basename = path.basename(filePath, path.extname(filePath));
		// const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
		return `export { default as ${basename} } from './${basename}'`;
	});
	return exportEntries.join('\n');
}

module.exports = {
	native: true,
	typescript: true,
	filenameCase: 'camel',
	index: false,
	indexTemplate: defaultIndexTemplate,
	svgoConfig: {
		plugins: [
			{
				name: 'preset-default',
				params: {
					overrides: {
						// cleanupIDs: false,
						removeUselessDefs: false,
					},
				},
			},
			'removeXMLNS',
		],
	},
};
