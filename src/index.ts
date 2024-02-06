import puppeteer from "puppeteer";
import * as games from "./games";

const gameLookUp = {
  nm: {
    name: "Number Memory",
    config: {
      goUntil: 10,
    },
    run: games.numberMemory,
  },
};

const args = process.argv.slice(2);

// Print the command line arguments
console.log("Command line arguments:", args);

// Process and use the command line arguments
if (args.length < 1) {
  throw new Error("No Gamemode specified");
}

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Navigate the page to a URL

  try {
    await gameLookUp[args[0]].run(page, 10);
  } catch (e) {
    console.log("Error in command exection");
    await browser.close();
    return;
  }

  await new Promise((r) => setTimeout(r, 100000));

  await browser.close();
})();
