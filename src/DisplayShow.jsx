import { Link, useParams } from 'react-router-dom';
import Cast from './Cast';
function DisplayShow({data}) {
    return <>
        <div>
            <div className="card-container" >
			{(data || []).map(show => (

				<div key={show.show.id} >
                    <ShowCard show={show}/>
                
				</div>
               
			))}
		</div>
           
            
        </div>
    </>
}

function ShowCard({show}) {
    return (
        <div className="card">
            <div >
                <img src={show.show.image.original}/>
                <div className="info">
                <div id="show-name">{show.show.name}</div>
                 <div>{show.show.id}</div>
                 <div>{show.show.language}</div>
                 </div>
                 
                {/* <Link >Cast</Link> */}
            </div>
            {/* <Cast/> */}
            {/* <Cast /> */}
            
            <Link to="/cast">Cast</Link>
            
            
        </div>
    )

}

export default DisplayShow;