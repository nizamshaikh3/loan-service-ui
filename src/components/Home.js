import {Link} from 'react-router-dom'
function HomePage(){
    return( 
    <>
        <h1>HomePage</h1>
        <p>
            Go to <Link to="/loans">Loans</Link>
        </p>
    </>
    )
}

export default HomePage;