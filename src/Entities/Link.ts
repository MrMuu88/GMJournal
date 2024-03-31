import { Note } from "./Note";
import { Page } from "./Entry";



export class Link extends Note {
    linkedPage: Page;
    linkedPageId: number;
}
