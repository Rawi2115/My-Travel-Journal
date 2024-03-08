import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props){
    return (
        <div className="card-container">
            <img className='location-img' src={props.place.imageUrl}/>
            <div className="card-information">
                <div className="location-details">
                    <FontAwesomeIcon icon={faLocationDot} className='location-icon' />
                    <p className='country'>{props.place.location}</p>
                    <a href={props.place.googleMapsUrl}
                    target='_blank'>View on Google Maps</a>
                </div>
                <h1>{props.place.title}</h1>
                <h3>{[props.place.startDate]} - {props.place.endDate}</h3>
                <p>{props.place.description}</p>
            </div>
        </div>
    )
}
/*
title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
*/