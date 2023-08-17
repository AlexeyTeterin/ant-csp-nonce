module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'standard',
		'plugin:react/recommended',
		'plugin:promise/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: [
		'.idea',
		'.vscode',
		'build',
		'node_modules',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		requireConfigFile: false,
	},
	plugins: [
		'@typescript-eslint',
		'html',
		'promise',
		'react',
		'require-sort',
		'simple-import-sort',
	],
	rules: {
		'@typescript-eslint/consistent-type-imports': [2, {prefer: 'no-type-imports'}],
		'@typescript-eslint/member-delimiter-style': [
			2,
			{
				multiline: {
					delimiter: 'comma',
					requireLast: true,
				},
				overrides: {
					interface: {
						multiline: {
							delimiter: 'semi',
							requireLast: true,
						},
						singleline: {
							delimiter: 'semi',
							requireLast: true,
						},
					},
				},
				singleline: {
					delimiter: 'comma',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/no-redeclare': 2,
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/semi': 2,
		'brace-style': [2, '1tbs'],
		'camelcase': 0,
		'comma-dangle': [2, 'always-multiline'],
		'curly': [2, 'all'],
		'indent': [2, 'tab', {SwitchCase: 1}],
		'jsx-quotes': [2, 'prefer-double'],
		'max-len': [2, {
			code: 120,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreUrls: true,
		}],
		'multiline-ternary': [2, 'always-multiline'],
		'no-extend-native': [2, {'exceptions': ['String']}],
		'no-param-reassign': 2,
		'no-redeclare': 0,
		'no-tabs': 0,
		'no-unused-vars': 0,
		'no-use-before-define': 0,
		'object-curly-spacing': [2, 'never'],
		'operator-linebreak': [2, 'before'],
		'quote-props': [2, 'consistent'],
		'react/jsx-closing-bracket-location': [2, 'line-aligned'],
		'react/jsx-closing-tag-location': 2,
		'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
		'react/jsx-sort-props': 2,
		'react/jsx-tag-spacing': [2, {
			afterOpening: 'never',
			beforeClosing: 'allow',
			beforeSelfClosing: 'always',
			closingSlash: 'never',
		}],
		'react/jsx-wrap-multilines': [2, {
			arrow: 'parens-new-line',
			assignment: 'parens-new-line',
			condition: 'parens-new-line',
			declaration: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
			return: 'parens-new-line',
		}],
		'react/react-in-jsx-scope': 0,
		'react/self-closing-comp': [2, {
			component: true,
			html: true,
		}],
		'react-hooks/exhaustive-deps': 0,
		'require-sort/require-sort': [2, {
			ignoreCase: true,
			ignoreDeclarationSort: true,
			ignorePropertySort: false,
		}],
		'semi': [2, 'always'],
		'simple-import-sort/imports': [2, {'groups': []}],
		'sort-keys': [2, 'asc', {'caseSensitive': false, 'natural': true}],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
