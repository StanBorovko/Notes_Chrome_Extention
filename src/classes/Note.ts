import {INote} from '../interfaces';

export class Note implements INote {
  _id: string;
  title: string;
  text: string;
  isOpen: boolean;
  scheduledDate?: Date;

  constructor(_id: string, title: string, text: string, scheduledDate?: Date) {
    this._id = _id;
    this.title = title;
    this.text = text;
    this.scheduledDate = scheduledDate;
    this.isOpen = true;
  }

  isScheduled(): boolean {
    return Boolean(this.scheduledDate)
  }
}
