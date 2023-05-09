import { ConnectOptions } from 'mongoose';
import { Moment } from 'moment';

export interface MongooseConnect extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

export interface MyComponentProps {
  ThemeColor: string;
}

export interface User {
  nickName: string;
  password: string;
  registered: Date;
}

export interface Work {
  id: string;
  name: string;
  shortdescription: string;
  description: string;
  image: string;
  url: string;
  languages: string[];
  participants: string[];
}

export interface About {
  details: Details;
  misc: Misc;
}

export interface Misc {
  bio: string;
  introdescription: string;
  description: string[];
  important: string;
  skills: string[];
}

export interface Details {
  name: string;
  city: string;
  email: string;
  github: string;
  linkedin: string;
  image: string[];
}

export interface Blog {
  title: string;
  date: Moment;
  content: string[];
}

export interface Project {
  id: string;
  name: string;
  shortdescription: string;
  description: string;
  image: string;
  url: string;
  languages: string[];
  participants: string[];
}

export interface WorkListProps {
  projects: Project[];
}

export interface CardProps {
  image: string;
  ThemeColor: string;
}

export type Params = {
  projectId: string;
};

export interface Contact {
  name: string;
  email: string;
  phone: Number;
  message: string;
  date: Moment;
}

export interface FooterProps {
  path: string;
}
