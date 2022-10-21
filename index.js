#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import figlet from 'figlet';
import createDirTemplate from './utils/createDirTemplate.js';
const CURR_DIR = process.cwd();

const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);
let playerName;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'What project template would you like to generate?'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
        ${chalk.green('Welcome to the project generator! by Marineux')}
    `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'PlayerName',
    type: 'input',
    message: 'What is your project name?',
    default() {
      return 'Project';
    },
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else
        return 'Project name may only include letters, numbers, underscores and hashes.';
    },
    when: () => playerName === undefined,
  });

  playerName = answers['PlayerName'];
}

async function question() {
  const answers = await inquirer.prompt({
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
  });

  return handleAnswers(answers['project-choice']);
}

async function handleAnswers(isCorrect) {
  const spinner = createSpinner('Generating project...').start();
  await sleep();

  if (isCorrect) {
    const projectName = playerName;
    const templatePath = `${__dirname}/templates/${isCorrect}`;
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
    createDirTemplate(templatePath, playerName);
    spinner.success({ text: `Success! Generating project` });
  } else {
    spinner.error({ message: 'Something went wrong!' });
    process.exit(1);
  }
}

async function winner() {
  console.clear();
  const msg = `Thank installation !\n `;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

async function thank() {
  console.log(`
      ${('Thank you for using the project generator!')}
      ${('Have a nice day!')}
  
      cd ${playerName}
  
      pnpm i
      pnpm dev
      `);
}

async function main() {
  await welcome();
  await askName();
  await question();
  await winner();
  await thank();
}

await main();
