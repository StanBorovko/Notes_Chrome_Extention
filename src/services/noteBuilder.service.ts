import {INote, IHTMLBuilder} from '../interfaces';

export class NoteBuilderService implements IHTMLBuilder {
  buildHTML(note: INote): HTMLElement {
    const container = document.createElement('div');
    container.classList.add('note-container');
    const title = document.createElement('div');
    title.classList.add('note-title');
    title.innerText = note.title;
    const text = document.createElement('div');
    text.classList.add('note-text');
    text.innerText = note.text;
    container.appendChild(title);
    container.appendChild(text);

    return container;
  }
}
