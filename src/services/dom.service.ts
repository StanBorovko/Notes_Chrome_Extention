import {NoteBuilderService} from './noteBuilder.service';
import {IHTMLBuilder, INote} from '../interfaces';

export class DomService {
  builder: IHTMLBuilder;

  constructor(Builder = NoteBuilderService) {
    this.builder = new Builder();
  }

  addNote(note: INote): void {
    const element = this.builder.buildHTML(note);
    document.body.appendChild(element);
  }
}
