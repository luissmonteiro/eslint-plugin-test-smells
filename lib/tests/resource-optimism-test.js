const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/resource-optimism');

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 8, sourceType: 'module' }
});

ruleTester.run('resource-optimism', rule, {
    // Testes válidos: código que faz verificação de existência antes de acessar recursos
    valid: [
        {
            code: `
                const fs = require('fs');
                test('reads a file safely', () => {
                    if (fs.existsSync('file.txt')) {
                        const data = fs.readFileSync('file.txt', 'utf-8');
                        expect(data).toBeTruthy();
                    }
                });
            `
        },
        {
            code: `
                const fs = require('fs');
                it('checks and writes a file safely', () => {
                    if (!fs.existsSync('output.txt')) {
                        fs.writeFileSync('output.txt', 'Hello, World!');
                    }
                    expect(fs.existsSync('output.txt')).toBe(true);
                });
            `
        },
        {
            code: `
                const db = require('database');
                test('connects to a database', () => {
                    if (db.isAvailable()) {
                        const connection = db.connect();
                        expect(connection).toBeDefined();
                    }
                });
            `
        }
    ],

    // Testes inválidos: código que assume que o recurso externo existe sem verificar
    invalid: [
        {
            code: `
                const fs = require('fs');
                test('reads a file optimistically', () => {
                    const data = fs.readFileSync('file.txt', 'utf-8');
                    expect(data).toBeTruthy();
                });
            `,
            errors: [
                { message: 'External resource method called without checking existence.' }
            ]
        },
        {
            code: `
                const fs = require('fs');
                it('writes to a file optimistically', () => {
                    fs.writeFileSync('output.txt', 'Hello, World!');
                    expect(true).toBe(true);
                });
            `,
            errors: [
                { message: 'External resource method called without checking existence.' }
            ]
        },
        {
            code: `
                const db = require('database');
                test('connects to a database without check', () => {
                    const connection = db.connect();
                    expect(connection).toBeDefined();
                });
            `,
            errors: [
                { message: 'External resource method called without checking existence.' }
            ]
        }
    ]
});
