export interface Test {
  message: string;
}

export interface Post {
  _id?: string;
  title: string;
  tag: string;
  author: string;
  date: string;
  description: string;
  content?: {
    type: string;
    data?: string;
    imageUrl?: string;
  }[];
}
