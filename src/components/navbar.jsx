import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
        return (
            <nav>
                <FontAwesomeIcon icon={faEarthAfrica} className='Earth' />
                <h2>my travel journal.</h2>
            </nav>
        )
}