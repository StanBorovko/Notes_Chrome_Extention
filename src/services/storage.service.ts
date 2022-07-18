import {LocalStorageItem} from '../enums/localStorageItem';
import {INote} from '../interfaces/INote';

export class StorageService {
  static getNotes(): Array<INote> {
    const notesInStorage = localStorage.getItem(LocalStorageItem.Notes);
    return (notesInStorage !== null) ? JSON.parse(notesInStorage) : [];
  }

  static addNote(note: INote): void {
    const existedNotes = StorageService.getNotes();
    const updatedNotes = [...existedNotes, note];
    localStorage.setItem(LocalStorageItem.Notes, JSON.stringify(updatedNotes));
  }

  static saveNotesGroup(notes: Array<INote>): void {
    const existedNotes = StorageService.getNotes();
    const updatedNotes = [...existedNotes, ...notes];
    localStorage.setItem(LocalStorageItem.Notes, JSON.stringify(updatedNotes));
  }

  static removeNote(note: INote): void {
    const existedNotes = StorageService.getNotes();
    const updatedNotes = existedNotes.filter(item => item._id === note._id);
    localStorage.setItem(LocalStorageItem.Notes, JSON.stringify(updatedNotes));
  }

  static clearNotes(): void {
    localStorage.removeItem(LocalStorageItem.Notes);
  }
}
