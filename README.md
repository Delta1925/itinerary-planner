# Itinerary Planner

A simple printable itinerary planner to help organize trips

![License: MIT](https://img.shields.io/badge/License-MIT-green)

## Features

- Modular: Add as many destinations as you wish!
- Manage car renting
- Organize activities
- A little note section at the end

## Screenshots

![A view of the three pages](screenshot.png)

## Usage

To get started, download the PDF from the [release section](https://github.com/Delta1925/itinerary-planner/releases/latest) and print it!  
If you have just one destination (e.g: Home -> Destination -> Home) you should only print the first and last page.  
In order to add a second destination (e.g: Home -> Destination A -> Destination B -> Home), also print the second page.  
For any further destination, print another copy of the second page and place it before the last page.

## Requirements

- [PNPM](https://pnpm.io/)
- [Node.js](https://nodejs.org/)

## Developing

Clone the project

```bash
$  git clone https://github.com/Delta1925/itinerary-planner
```

Go to the project directory

```bash
$  cd itinerary-planner
```

Install dependencies

```bash
$  pnpm install
```

Start the dev server

```bash
$  pnpm run dev
```

## Building

As a website

```bash
$  pnpm run build       # Output: ./dist
```

As a PDF

```bash
$  pnpm run export      # Output: ./dist/export.pdf
```

## Why?

I was just curious to see if I could use a web page to design a PDF file.
And since I had a bit more free time than usual, I decided to make a serious-looking project out of it, which turned out to be a fun way to improve my coding skills.

To be clear: even though it may come in handy, this is not a serious project (obviously)

## Acknowledgements

- [Alkatra font](https://github.com/suman51284/Alkatra)
- [Creating font subsets](https://markoskon.com/creating-font-subsets/)
- [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- [Convert Web Pages into PDF with Puppeteer and NodeJS](https://livecodestream.dev/post/convert-web-pages-into-pdfs-with-puppeteer-and-nodejs/)
- [readme.so](https://readme.so/)
