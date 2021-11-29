const docDirs = [
	{
		key: 'docs',
		options: {}
	},
];

const presetClassicConfigList = {};

docDirs.forEach(({ key, options }) => {
	presetClassicConfigList[key] = {
		sidebarPath: require.resolve(`../sidebars/${key}.js`),
		// Please change this to your repo.
		editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
	}
});

const presets = [
	[
		'@docusaurus/preset-classic',
		/** @type {import('@docusaurus/preset-classic').Options} */
		({
			...presetClassicConfigList,
			blog: {
				showReadingTime: true,
				// Please change this to your repo.
				editUrl:
					'https://github.com/rain120/study-notes/edit/main/blog/',
			},
			theme: {
				customCss: require.resolve('../src/css/custom.css'),
			},
		}),
	],
].filter(Boolean);

module.exports = presets;