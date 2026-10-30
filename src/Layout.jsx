
import { useState, useEffect } from 'react';
import DisplayShow from './DisplayShow';
function Layout() {
    const [showData, setShowData] = useState(null);
    const [showName, setShowName] = useState('');
    const [count, setCount] = useState('');

    function handleOnSubmit(event) {
        setCount(count + 1);
        event.preventDefault();
    }

    useEffect(() => {
        async function fetchShow() {
            try {
                const res = await fetch(`https://api.tvmaze.com/search/shows?q=${showName}`)
                if(!res.ok) {
                    throw new Error(await res.text())
                }
                const data = await res.json();
                setShowData(data);
                console.log(showData);
                // console.log(showData[0].show.name);

                
            } catch(err) {
                console.error("Failed to load profile", err);
            }
        }
        fetchShow();
    }, [count])


    return <>

    <section>
        <h1>Show Search</h1>
        <form onSubmit={handleOnSubmit}>
          
            <input 
            type="text"
            id="showName"
            value={showName}
            placeholder=' Show Name'
            onChange={(event) => setShowName(event.target.value)}
            />
            
            {/* <span></span> */}
            <input placeholder=' Limit'/>
       
        <button type="submit">Search</button>
        </form>
        <DisplayShow data={showData}/>
    </section>
    </>
}

export default Layout;