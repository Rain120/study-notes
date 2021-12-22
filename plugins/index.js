const commonPluginContentDocs = {
	editCurrentVersion: true,
	showLastUpdateAuthor: true,
	showLastUpdateTime: true
}

const docDirs = [
	{
		key: 'fe',
		sidebarKey: 'docs',
		options: {},
		navbar: {
			to: '/fe/guide',
			docId: 'guide',
			position: 'left',
			label: '(学)前端',
			activeBaseRegex: '/fe/',
		}
	},
	{
		key: 'backend',
		sidebarKey: 'docs',
		options: {},
		navbar: {
			to: '/backend/guide',
			docId: 'guide',
			position: 'left',
			label: '(学)后端',
			activeBaseRegex: '/backend/',
		}
	},
	{
		key: 'engineering',
		sidebarKey: 'docs',
		options: {},
		navbar: {
			to: '/engineering/guide',
			docId: 'guide',
			position: 'left',
			label: '工程能力',
			activeBaseRegex: '/engineering/',
		}
	},
	{
		key: 'error-qa',
		sidebarKey: 'docs',
		options: {},
		navbar: {
			to: '/error-qa/guide',
			position: 'left',
			label: '开发问题收集',
			activeBaseRegex: '/error-qa/',
		},
	},
	{
		key: 'tools',
		sidebarKey: 'docs',
		options: {},
		navbar: {
			to: '/tools/guide',
			position: 'left',
			label: '工具',
			activeBaseRegex: '/tools/',
		},
	},
	{
		key: 'resources',
		sidebarKey: 'docs',
		options: {},
		navbar: {
			to: '/resources/guide',
			position: 'left',
			label: '资源',
			docsPluginId: 'resources',
			activeBaseRegex: '/resources/',
		},
	},
	{
		key: 'books',
		sidebarKey: 'docs',
		options: {
			exclude: [
				'**/read/components/**/*'
			],
		},
		navbar: {
			to: '/books/guide',
			position: 'left',
			label: '书籍分享',
			docsPluginId: 'books',
			activeBaseRegex: '/books/',
		},
	},
];

const docDirKeys = docDirs.map(({ key }) => key);

const pluginContentDocsConfigList = docDirs.map(({ key, options, sidebarKey }) => {
	/** @type {import('@docusaurus/plugin-content-docs').Options} */
	return {
		id: key,
		path: key,
		routeBasePath: key,
		// editUrl: ({ locale, versionDocsDirPath, docPath }) => {
		// 	return `https://github.com/rain120/study-notes`;
		// },
		sidebarPath: require.resolve(`../sidebars/${sidebarKey}.js`),
		...commonPluginContentDocs,
		...options,
	}
});

const plugins = pluginContentDocsConfigList.map(pluginOptions => ([
	'@docusaurus/plugin-content-docs',
	pluginOptions,
])).filter(Boolean).concat([
	[
		require.resolve('@easyops-cn/docusaurus-search-local'), {
			language: ['en', 'zh'],
			hashed: true,
			docsRouteBasePath: docDirKeys,
			// docsDir: docDirKeys,
		},
	],
	[
		require.resolve('@docusaurus/plugin-pwa'), {
			debug: true,
		}
	]
]);

module.exports = {
	docDirs,
	plugins
}
