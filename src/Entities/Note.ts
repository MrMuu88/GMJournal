import { Page } from "./Entry";

export class Note {
    id: number;
    title: string;
    color: string;
    icon: string;
    parentId: number;
    parent: Page;
}
