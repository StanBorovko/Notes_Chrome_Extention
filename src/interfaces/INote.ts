export interface INote {
  _id: string,
  title: string,
  text: string,
  isOpen: boolean,
  scheduledDate?: Date
  isScheduled: () => boolean
}
