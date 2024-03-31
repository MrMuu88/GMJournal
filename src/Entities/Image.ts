import { Note } from "./Note";
import { ImageNote } from "./ImageNote";
import { Drawing } from "./Drawing";
import { Pin } from "./Pin";



export class Image extends Note {
    fileName: string;
    uri: string;
    pins: Pin[];
    drawings: Drawing[];
    notes: ImageNote[];

}
