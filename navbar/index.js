// const navbar = [
// 	{
// 		to: '/fe/intro',
// 		docId: 'intro',
// 		position: 'left',
// 		label: '前端',
// 		activeBaseRegex: '/fe/',
// 	},
// ];

const { docDirs } = require('../plugins');

const navbar = (docDirs || []).map(dir => dir.navbar);

module.exports = navbar.filter(Boolean);