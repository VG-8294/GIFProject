import { useEffect, useState, useRef } from 'react';
export function Gifs(){

  const [gifs, setGifs] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  // const loaderRef = useRef(null);

  async function getGifs(){
    try{
      setLoading(true)
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=${offset}`)
      if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      setGifs((prevGifs) => [...prevGifs, ...data.data]);
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }

  // https://api.giphy.com/v1/gifs/trending?api_key=WwjKps1e6QL5VUW55GhzXJl84gOU8zZw&limit=25&offset=${offset}

  useEffect(()=>{
    getGifs();
  }, [offset])

//   useEffect(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting) {
//         setOffset((prev) => prev + 10);
//       }
//     }
//   );

//   if (loaderRef.current) {
//     observer.observe(loaderRef.current);
//   }

//   return () => observer.disconnect();
// }, []);


function handleScroll(){
  const scrolledPart = window.scrollY;
  const screenHeight = window.innerHeight;
  const pageHeight = document.body.scrollHeight;

  if(scrolledPart + screenHeight >= pageHeight - 200){
    setOffset((prev) => prev+10);
  }
}
  

useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
  <div className='gifs'>
    {gifs.map((gif) => {
      return <img className='indGif'
      key={gif.id}
      src={gif.images.fixed_width.url}
      loading='lazy'
      alt=""
      ></img>
    })}
    {loading && <h2 className='loading'>Loading....</h2>}
    {/* <div ref={loaderRef}></div> */}
  </div>
);

}