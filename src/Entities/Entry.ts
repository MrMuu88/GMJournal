import { Note } from "./Note";

export class Page extends Note{
    Notes: Note[];
    Pages: Page[];
}