module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'airbnb', 'airbnb/hooks'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/require-default-props': 'off',
		'no-console': 'off',
		'linebreak-style': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'no-unused-vars': 'off',
		'no-param-reassign': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-expressions': 'off',
		'no-bitwise': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react/jsx-props-no-spreading': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'react/button-has-type': 'off',
		'no-return-await': 'off',
		'max-len': 'off',
		'react/jsx-wrap-multilines': 'off',
		'consistent-return': 'off',
		'no-new': 'off'
	}
};
