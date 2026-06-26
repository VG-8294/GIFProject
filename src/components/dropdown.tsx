type Props ={
    setQuery:React.Dispatch<React.SetStateAction<string>>;
}

export function ReactionsDropDown({setQuery}: Props){

    function search(keyword: string){
        setQuery(keyword);
    }

    return(
        <div className="reactionsDropdown">
            <div className="dropDown">
            <div className="dropDownHeading">
                <h1>Reactions</h1>
                <hr />
            </div>
            <div className="menu">
                <div className="column">
            <p onClick={(e) => search(e.currentTarget.textContent)}>Thank You</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Love</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Funny</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Yes</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Excited</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Kiss</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Hello</p>
            </div>

            <div className="column">
            <p onClick={(e) => search(e.currentTarget.textContent)}>Happy</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Sad</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>No</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Crying</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Waiting</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Congratulations</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Yay</p>
            </div>

            <div className="column">
            <p onClick={(e) => search(e.currentTarget.textContent)}>Hug</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>What</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Laughing</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Dancing</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Confused</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Wow</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Celebrate</p>
            </div>

            <div className="column">
            <p onClick={(e) => search(e.currentTarget.textContent)}>Shocked</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Thumbs Up</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>WTF</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Tired</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>LOL</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Nope</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Bye</p>
            </div>

            <div className="column">
            <p onClick={(e) => search(e.currentTarget.textContent)}>Angry</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Welcome</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>OK</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Cute</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Miss You</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Sleepy</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Thinking</p>
            </div>

            <div className="column">
            <p onClick={(e) => search(e.currentTarget.textContent)}>Eye Roll</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Do It</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Side Eye</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Crazy</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Fire</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Scared</p>
            <p onClick={(e) => search(e.currentTarget.textContent)}>Huh</p>
            </div>
            </div>
        </div>
        </div>
    )
} 