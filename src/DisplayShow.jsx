
import { useState } from 'react';
function DisplayShow({ data }) {
    return <>
        <div>
            <div className="card-container" >
                {(data || []).map(show => (

                    <div key={show.show.id} >
                        <ShowCard show={show} />

                    </div>

                ))}
            </div>


        </div>
    </>
}

function ShowCard({ show }) {
    const [cast, setCast] = useState([]);
    const [showCast, setShowCast] = useState(false);


    async function handleClick() {
        if(showCast) {
            setShowCast(false);
            return;
        }

        if(cast.length === 0) {
            const res = await fetch(`https://api.tvmaze.com/shows/${show.show.id}/cast`)
            const data = await res.json();
            setCast(data);

        }

        setShowCast(true);

       
        
    }

    return (
        <div className="card">
            <div className="each-card">
                <img src={show.show.image.original} />
                <div className="info">
                    <div id="show-name">{show.show.name}</div>
                    <div>{show.show.id}</div>
                    <div>{show.show.language}</div>
                </div>

                <button onClick={handleClick}>
                    {showCast ? "Hide cast" : "Show cast"}
                </button>
              
                {showCast && (
                    <ul>
                        {cast.map(people => (
                            <li>
                                {people.person.name} as {people.character.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>


        </div>
    )

}

export default DisplayShow;