import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import axios from "axios";


type Props = {
  query: string;
};

export function Gifs({ query }: Props) {
  // const [loading, setLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  // const isLoading = useRef(false);

  // const API_KEY = import.meta.env.VITE_API_KEY;
  // const API_KEY2 = import.meta.env.VITE_API_KEY2;
  const API_KEY3 = import.meta.env.VITE_API_KEY3;

  const {
  data,
  isLoading,
  isError,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery({
  queryKey: ["gifs", query],

  initialPageParam: 0,

  queryFn: async ({ pageParam }) => {
    let url = "";

    if (query.trim() === "") {
      url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY3}&limit=10&offset=${pageParam}`;
    } else {
      url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY3}&q=${query}&limit=10&offset=${pageParam}`;
    }

    const response = await axios.get(url);

    return response.data;
  },

  getNextPageParam: (lastPage) => {
    if (!lastPage?.data || lastPage.data.length === 0) {
      return undefined;
    }

    return lastPage.pagination.offset + lastPage.pagination.count;
  },
});

  const gifs = data?.pages.flatMap((page: any) => page.data ?? []) ?? [];
  
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (
      entries[0].isIntersecting &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  });

  if (loaderRef.current) {
    observer.observe(loaderRef.current);
  }

  return () => observer.disconnect();
}, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="gifs">
      {gifs.map((gif: any) => (
        <img
          key={gif.id}
          className="indGif"
          src={gif.images.fixed_width.url}
          loading="lazy"
          alt={gif.title}
        />
      ))}
      {isFetchingNextPage && (
      <div className="loadingSection">
        <DotLottieReact
        className="loading"
      src="https://lottie.host/1840eb0d-bf5b-44fc-b67f-6bfd810a79b8/GEYsY7fQIr.lottie"
      loop
      autoplay
    />
      </div>
      )}
      {isLoading && <div className="loadingSection"><DotLottieReact
      src="https://lottie.host/2107664b-4a52-4c7b-9666-dedec5388e73/q6QGkyiCxm.lottie"
      loop
      autoplay
    /></div>}
      {isError && <div className="errorSection"><DotLottieReact
      src="https://lottie.host/b9b3b23c-fd17-4eb6-97e0-52f6169b63cd/OtaG2xmro9.lottie"
      loop
      autoplay
    /></div>}

      <div ref={loaderRef}></div>
    </div>
  );
}