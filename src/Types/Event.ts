export type Event = {
  _id?: string;
  eventId?: Number;
  title: string;
  description: string;
  creatorId?: Number;
  members?: Array<Number>;
};
