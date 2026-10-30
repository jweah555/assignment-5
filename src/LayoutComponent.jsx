import './App.css';
import { useState, useEffect } from 'react';

function Layout() {
    const [showData, setShowData] = useState(null);

    useEffect(() => {
        async function fetchShow() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
                if(!res.ok) {
                    throw new Error(await res.text())
                }
                const data = await res.json();
                setShowData(data);
                console.log(data);
            } catch(err) {
                console.error("Failed to load profile", err);
            }
        }
        fetchShow();
    }, [])


    return <>

    <section>
        <h1>Show Search</h1>
        <form>
        <div>
            <input placeholder=' Show Name'/>
        </div>
        <div>
            <span></span>
            <input placeholder=' Limit'/>
        </div>
        <button>Search</button>
        </form>
    </section>
   

    </>
}

export default Layout;