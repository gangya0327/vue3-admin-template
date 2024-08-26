/* eslint-disable no-undef */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(`This repository must using pnpm as package manager.`)
  process.exit(1)
}
