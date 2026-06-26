import { useEffect, useRef, useState, useCallback } from "react";

type Props = {
  query: string;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  gifs:any[];
  setGifs: React.Dispatch<React.SetStateAction<any[]>>;
};

export function Gifs({ query, offset, setOffset, gifs, setGifs}: Props) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const isLoading = useRef(false);

  const API_KEY = import.meta.env.VITE_API_KEY;
  // const API_KEY2 = import.meta.env.VITE_API_KEY2;
  // const API_KEY3 = import.meta.env.VITE_API_KEY3;

  const getGifs = useCallback(async () => {
    if (isLoading.current) return;
    setIsError(false);
    isLoading.current = true;
    setLoading(true);

    try {
      let url = "";

      if (query.trim() === "") {
        url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10&offset=${offset}`;
      } else {
        url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=${offset}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      setGifs((prev) => [...prev, ...data.data]);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      isLoading.current = false;
      setLoading(false);
    }
  }, [query, offset]);

  useEffect(() => {
    getGifs();
  }, [getGifs]);

  
  useEffect(() => {
    setGifs([]);
    setOffset(0);
  }, [query]);

  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading.current) {
        setOffset((prev) => prev + 10);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gifs">
      {gifs.map((gif) => (
        <img
          key={gif.id}
          className="indGif"
          src={gif.images.fixed_width.url}
          loading="lazy"
          alt={gif.title}
        />
      ))}

      {loading && <div className="loadingSection"><img className="loading" src="./public/loading.png"></img></div>}
      {isError && <div className="errorSection"><img className="error" src="./public/error.png"></img></div>}

      <div ref={loaderRef}></div>
    </div>
  );
}