type Props ={
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  gifs:any[];
  setGifs: React.Dispatch<React.SetStateAction<any[]>>;
  query:string;
  setQuery:React.Dispatch<React.SetStateAction<string>>;
}

export function TrendingBar({offset, setOffset, gifs, setGifs, query, setQuery}: Props){

    const trendingKeywords = [
        "Funny",
        "Cat",
        "Dog",
        "Love",
        "Happy",
        "Sad",
        "Dance",
        "Anime",
        "Football",
        "Memes"
    ]

    // const API_KEY = import.meta.env.VITE_API_KEY;
    // const API_KEY2 = import.meta.env.VITE_API_KEY2;
    const API_KEY3 = import.meta.env.VITE_API_KEY3;

    async function search(keyword: string){
        setQuery(keyword)
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY3}&q=${query}&limit=10&offset=${offset}`)
        const data = await response.json()
        setGifs([]);
        setGifs(data.data);
    }

    return(
        <div className="trendingSection">
            <div className="trendingBar">
            {trendingKeywords.map((keyword) =>(
                <div className="trendItem" key={keyword} onClick={() => search(keyword)}>
                    <img src="./public/trend.png" alt={keyword} />
                    <button className="trendButton">{keyword}</button>
                </div>
            ))}
        </div>
        <div className="trendingHeading">
            <img src="./public/trend.png"></img>
            <h2>Trending Now</h2>
        </div>
        </div>
    )
}