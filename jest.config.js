module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testTimeout:10000000,
    testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src']
};
