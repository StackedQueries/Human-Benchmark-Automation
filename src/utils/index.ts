import { Page } from "puppeteer";
import { selector } from "../types";

async function getText(page: Page, selector: selector): Promise<string> {
  return await page.$eval(selector, (element) => {
    return element.textContent;
  });
}

function searchByText(text: string): selector{
    return `::-p-text("${text}")`
}

export {
    getText,
    searchByText
};
