import {INote} from './INote';

export interface IHTMLBuilder {
  buildHTML: (note: INote) => HTMLElement
}
