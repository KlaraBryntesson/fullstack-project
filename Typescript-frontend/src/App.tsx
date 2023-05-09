import WorkView from './WorkView';
import HomeView from './HomeView';
import AboutView from './AboutView';
import BlogView from './BlogView';
import Root from './Root';
import { SomeContext } from './SomeContext';
import { useMemo, useState, useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import {
  useFetch,
  useFetchAbout,
  useFetchWork,
  useFetchBlog,
} from './useFetch';
import { Work, About, Blog, User } from '../../backend/interfaces';

function App() {
  const [loggedIn, setLoggedIn] = useState(false),
    [theme, setTheme] = useState('light'),
    [blog, setBlog] = useState<Blog[]>([]),
    aboutResult: About | null = useFetchAbout(),
    blogResult: Blog[] | [] = useFetchBlog(),
    workResult: Work[] | [] = useFetchWork(),
    userResult: User | null = useFetch();

  const details = useMemo(() => {
    if (aboutResult) {
      return aboutResult.details;
    } else {
      return undefined;
    }
  }, [aboutResult]);

  const misc = useMemo(() => {
    if (aboutResult) {
      return aboutResult.misc;
    } else {
      return undefined;
    }
  }, [aboutResult]);

  const work = useMemo(() => {
    if (workResult) {
      return workResult;
    } else {
      return undefined;
    }
  }, [workResult]);

  useMemo(() => {
    if (blogResult) {
      setBlog(blogResult);
    } else {
      setBlog([]);
    }
  }, [blogResult]);

  const user = useMemo(() => {
    if (userResult) {
      return userResult;
    } else {
      return undefined;
    }
  }, [userResult]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (theme === 'dark') {
      body?.classList.remove('light');
      body?.classList.add('dark');
      console.log('Temat är ', theme);
    } else {
      body?.classList.remove('dark');
      body?.classList.add('light');
      console.log('Temat är ', theme);
    }
  }, [theme]);

  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: '/' },
        { element: <AboutView />, path: '/about' },
        { element: <WorkView />, path: '/:projectId' },
        { element: <BlogView />, path: '/blog' },
      ],
      element: <Root />,
    },
  ]);

  return (
    <SomeContext.Provider
      value={{
        details,
        misc,
        work,
        blog,
        setBlog,
        loggedIn,
        setLoggedIn,
        theme,
        setTheme,
        user,
      }}
    >
      <RouterProvider router={router} />
    </SomeContext.Provider>
  );
}

export default App;
