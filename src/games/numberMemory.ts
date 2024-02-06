import { Page } from "puppeteer";
import { searchByText, getText } from "../utils";
import { jobCompletetion } from "../types";

export default async function numberMemory(
  page: Page,
  levelNum: number
): Promise<jobCompletetion> {
    
  await page.goto("https://humanbenchmark.com/tests/number-memory");
  await page.click(searchByText("Start"));
  for (let i = 0; i <= levelNum; i++) {
    await page.waitForSelector(".big-number");
    const number: string = await getText(page, ".big-number");

    await page.waitForSelector("input");
    await page.type("input", number);

    await page.click(searchByText("Submit"));

    await page.waitForSelector(searchByText("NEXT"));
    await page.click(searchByText("NEXT"));
  }
  return {
    completed: true,
    completionTime: "string",
    error: false,
  };
}
