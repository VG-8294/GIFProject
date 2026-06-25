import { useEffect, useState, useRef, useCallback } from 'react';

type Props ={
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  gifs:any[];
  setGifs: React.Dispatch<React.SetStateAction<any[]>>;
}


export function Gifs({offset, setOffset, gifs, setGifs} : Props) {
  const [loading, setLoading] = useState(false);
  const isLoading = useRef(false);
  const loaderRef = useRef(null);

  // const API_KEY = import.meta.env.VITE_API_KEY;
  const API_KEY2 = import.meta.env.VITE_API_KEY2;
  // const API_KEY3 = import.meta.env.VITE_API_KEY3;

  const getGifs = useCallback(async () => {
    if (isLoading.current) return;  // prevent duplicate calls
    try {
      isLoading.current = true;
      setLoading(true);
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY2}&limit=25&offset=${offset}`
      );
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      setGifs((prev) => [...prev, ...data.data]);
      setOffset((prev) => prev + 25);
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.current = false;
      setLoading(false);
    }
  }, [offset]);  // recreate when offset changes

  useEffect(() => {
    getGifs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getGifs();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [getGifs]);  // recreate observer when getGifs changes

  return (
    <div className='gifs'>
      {gifs.map((gif) => (
        <img
          className='indGif'
          key={gif.id}
          src={gif.images.fixed_width.url}
          loading='lazy'
          alt=""
        />
      ))}
      {loading && <h2 className='loading'>Loading....</h2>}
      <div ref={loaderRef}></div>
    </div>
  );
}