import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpeg",
        "/img/gallery/img_2.jpeg",
        "/img/gallery/img_3.jpeg",
        "/img/gallery/img_4.jpeg",
        "/img/gallery/img_5.jpeg",
        "/img/gallery/img_6.jpeg",
        "/img/gallery/img_7.jpeg",
        "/img/gallery/img_8.jpeg",
        "/img/gallery/img_9.jpeg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Catering Services,Equipments for hire</h1>
                <p className="info">Warmers,Sufuras and Plates.</p>
        
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}