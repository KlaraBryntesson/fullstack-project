import { createContext } from 'react';
import { Details, Work, Blog, Misc, User } from '../../backend/interfaces';

export interface SomeContextValue {
  details?: Details;
  misc?: Misc;
  work?: Work[];
  blog?: Blog[];
  setBlog?: SetBlogFunction;
  loggedIn: boolean;
  setLoggedIn: SetLoggedInFunction;
  theme: string;
  setTheme: SetThemeFunction;
  user?: User;
}

type SetBlogFunction = React.Dispatch<React.SetStateAction<Blog[]>>;
type SetThemeFunction = (newValue: string) => void;
type SetLoggedInFunction = (newValue: boolean) => void;

export const SomeContext = createContext<SomeContextValue | null>(null);
