import { useEffect, useState } from 'react';
import { Work, About, Blog, User } from '../../backend/interfaces';

// export interface Result {
//   about: {
//     details: {
//       name: string;
//       age: Moment;
//       city: string;
//       email: string;
//       github: string;
//       linkedin: string;
//       image: string[];
//     };
//     misc: {
//       bio: string;
//       introdescription: string;
//       description: string[];
//       important: string;
//       skills: string[];
//     };
//   };
//   work: Work[];
//   blog: Blog[];
// }

// export function useFetch(): Result | null {
//   const [result, setResult] = useState<Result | null>(null);
//   useEffect(() => {
//     fetch('/klara.json')
//       .then((response) => response.json())
//       .then((result) => {
//         setResult(result);
//       });
//   }, []);

//   return result;
// }

export function useFetch(): User | null {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  return user;
}

export function useFetchWork(): Work[] | [] {
  const [work, setWork] = useState<Work[] | []>([]);
  useEffect(() => {
    fetch('http://localhost:8080/work')
      .then((response) => response.json())
      .then((result) => {
        setWork(result);
      });
  }, []);

  return work;
}

export function useFetchBlog(): Blog[] | [] {
  const [blog, setBlog] = useState<Blog[] | []>([]);
  useEffect(() => {
    fetch('http://localhost:8080/blog')
      .then((response) => response.json())
      .then((result) => {
        setBlog(result);
      });
  }, []);

  return blog;
}

export function useFetchAbout(): About | null {
  const [about, setAbout] = useState<About | null>(null);
  useEffect(() => {
    fetch('http://localhost:8080/about')
      .then((response) => response.json())
      .then((result) => {
        setAbout(result);
      });
  }, []);

  return about;
}
