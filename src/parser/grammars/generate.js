/* eslint-disable import/no-extraneous-dependencies, no-console */
import fs from 'fs';
import pegjs from 'pegjs';

const dir = './src/parser/grammars/';
const sourceFilename = 'grammar.pegjs';
const outputFilename = 'grammar.js';

// load the grammar file
const grammar = fs.readFileSync(`${dir}${sourceFilename}`).toString();

// generate the parser (as CommonJS)
const parser = pegjs.generate(grammar, { output: 'source', format: 'commonjs' });

// convert parser to ES module
const output = `import * as Dice from '../../Dice';
import * as Modifiers from '../../Modifiers';
import ComparePoint from '../../ComparePoint';
import RollGroup from '../../RollGroup';
import math from 'mathjs-expression-parser';

const module = {};

${parser}

export {
  peg$SyntaxError as SyntaxError,
  peg$parse as parse,
}`;

// create the file
fs.writeFileSync(`${dir}${outputFilename}`, output);

console.log(`Grammar parser saved to: ${dir}${outputFilename}`);
