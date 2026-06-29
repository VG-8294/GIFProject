import { Gifs } from "./gif";

type Props ={
  setQuery:React.Dispatch<React.SetStateAction<string>>;
}

export function TrendingBar({setQuery}: Props){

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

    function search(keyword: string){
        setQuery(keyword)
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