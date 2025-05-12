// eslint.config.js
import js from '@eslint/js';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
	js.configs.recommended,
	...next(),
	{
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			'prettier/prettier': 'error',
			'@next/next/no-img-element': 'off', // 필요 시
		},
	},
	prettier,
];
