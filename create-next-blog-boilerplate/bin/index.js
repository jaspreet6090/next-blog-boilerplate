#!/usr/bin/env node

const { execSync } = require('child_process');
const degit = require('degit');
const ora = require('ora');
const chalk = require('chalk');
const path = require('path');

const spinner = ora();

async function run() {
  const blogName = process.argv[2] || 'my-blog';
  const targetPath = path.join(process.cwd(), blogName);

  console.log(chalk.blue.bold(`\n🚀 Creating a new blog at ./${blogName}\n`));

  spinner.start('📁 Cloning boilerplate...');
  const emitter = degit('jaspreet6090/next-blog-boilerplate');
  await emitter.clone(targetPath);
  spinner.succeed('✅ Cloned!');

  spinner.start('📦 Installing dependencies...');
  execSync('npm install', { cwd: targetPath, stdio: 'ignore' });
  spinner.succeed('✅ Dependencies installed!');

  console.log(chalk.green.bold('\nAll done! 🚀'));
  console.log(`\n👉 Get started:\n`);
  console.log(chalk.cyan(`  cd ${blogName}`));
  console.log(chalk.cyan(`  npm run dev\n`));
}

run();
