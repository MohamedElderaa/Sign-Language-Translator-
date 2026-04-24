
import * as esbuild from 'esbuild';
import path from 'path';

async function check() {
    console.log('Starting esbuild sanity check...');
    console.log(`Node version: ${process.version}`);
    console.log(`Esbuild path: ${path.resolve('node_modules/.bin/esbuild')}`);

    try {
        const result = await esbuild.transform('let x: number = 1', {
            loader: 'ts',
        });
        console.log('Esbuild check SUCCESS!');
        console.log('Transformed code:', result.code);
    } catch (e) {
        console.error('Esbuild check FAILED:', e);
        process.exit(1);
    }
}

check();
