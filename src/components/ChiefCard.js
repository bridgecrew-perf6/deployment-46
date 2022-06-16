import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faYoutube, faTumblr } from "@fortawesome/free-brands-svg-icons"


export default function ChiefCard({chief}) {
    return (
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                {/* <p className="chief-contact">Contact: <b>{chief.contact}</b></p>  */}
                <p className="cheif-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    {/* <FontAwesomeIcon icon={faTwitter} /> */}
                     <FontAwesomeIcon icon={faInstagram} /> 
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    {/* <FontAwesomeIcon icon={faYoutube} /> */}
                    {/* <FontAwesomeIcon icon={faTumblr} /> */}
                </p>
            </div>
        </div>
    )
}