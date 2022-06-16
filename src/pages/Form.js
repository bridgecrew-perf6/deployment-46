
import React from "react";

import { FaPhone,FaYahoo,FaInstagram,FaFacebook,FaMapMarker} from "react-icons/fa";

function Form() {
  return (
    <div className="about">
      <h1>About ShazzBa Outside Catering</h1>
      <p>Real food made really nice.......To everyone who has made shazzba exist Hongera</p>
      <br />
      <p>
      Cooking is an art that has seen shazzba exist since 1995.Inspired by my grandmother who was a professional 
      chef @ Ngi’ya Girls. The art of preparing is inbuilt made at home, Shazzba has been honored to provide its services to major functions such as wedding parties, church functions among many others   and most importantly the Covid-19 pandemic
       necessitated to the official operational of the business. We are at your service anytime any day with exceptional services.a
      </p>
 
      <br />

      <h3>Nice Regards from our Kitchen</h3>
      <br />
      <div className="videos">
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/xoCbz7FTJf8" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
        <iframe width="560" height="315"
         src="https://www.youtube.com/embed/TV0rF17CbQY" 
         title="YouTube video player"
         frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
      </div>
       <div className="Find">
         <h1>Talk to  us</h1>
         <FaPhone/>+254770811441/0707775994
       </div>
       <div className="Finda">  
         <FaYahoo/>shazzba2001@yahoo.com<br></br>
       <FaInstagram/> Instagram<br></br>
       <FaFacebook/> Facebook<br></br>
       <FaMapMarker/>BEHIND SAFARI PARK HOTEL, NEXT TO USIU
       </div>
       <div>
         
       </div>
</div>  
  );
}

export default Form;
