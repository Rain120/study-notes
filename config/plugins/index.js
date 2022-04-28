const commonPluginContentDocs = {
    editCurrentVersion: true,
    showLastUpdateAuthor: true,
    showLastUpdateTime: true,
};

const docDirs = [
    {
        key: 'fe',
        sidebarKey: 'docs',
        options: {},
        navbar: {
            to: '/fe/guide',
            docId: 'guide',
            position: 'left',
            label: '前端',
            activeBaseRegex: '/fe/',
        },
    },
    // {
    // 	key: 'backend',
    // 	sidebarKey: 'docs',
    // 	options: {},
    // 	navbar: {
    // 		to: '/backend/guide',
    // 		docId: 'guide',
    // 		position: 'left',
    // 		label: '后端',
    // 		activeBaseRegex: '/backend/',
    // 	}
    // },
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
        },
    },
    // {
    // 	key: 'error-qa',
    // 	sidebarKey: 'docs',
    // 	options: {},
    // 	navbar: {
    // 		to: '/error-qa/guide',
    // 		position: 'left',
    // 		label: '开发问题收集',
    // 		activeBaseRegex: '/error-qa/',
    // 	},
    // },
    {
        key: 'interview',
        sidebarKey: 'docs',
        options: {},
        navbar: {
            to: '/interview/guide',
            position: 'left',
            label: '面试',
            activeBaseRegex: '/interview/',
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
    {
        key: 'review',
        sidebarKey: 'docs',
        options: {},
        navbar: {
            to: '/review/guide',
            position: 'right',
            label: '个人总结',
            docsPluginId: 'review',
            activeBaseRegex: '/review/',
        },
    },
    {
        key: 'life',
        sidebarKey: 'docs',
        options: {},
        navbar: {
            to: '/life/guide',
            position: 'right',
            label: '生活杂记',
            docsPluginId: 'life',
            activeBaseRegex: '/life/',
        },
    },
];

const docDirKeys = docDirs.map(({key}) => key);

const pluginContentDocsConfigList = docDirs.map(({key, options, sidebarKey}) => {
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
    };
});

const plugins = pluginContentDocsConfigList
    .map(pluginOptions => ['@docusaurus/plugin-content-docs', pluginOptions])
    .filter(Boolean)
    .concat([
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                language: ['en', 'zh'],
                hashed: true,
                docsRouteBasePath: docDirKeys,
                highlightSearchTermsOnTargetPage: true,
                // docsDir: docDirKeys,
            },
        ],
        // [
        // 	require.resolve('@docusaurus/plugin-google-gtag'), {
        // 		gtag: {
        // 		  // You can also use your 'G-' Measurement ID here.
        // 		  trackingID: 'UA-150864629-1',
        // 		  // Optional fields.
        // 		  anonymizeIP: true, // Should IPs be anonymized?
        // 		},
        // 	}
        // ],
        [
            require.resolve('@docusaurus/plugin-pwa'),
            {
                debug: true,
            },
        ],
        '@docusaurus/theme-live-codeblock',
    ]);

module.exports = {
    docDirs,
    plugins,
};
