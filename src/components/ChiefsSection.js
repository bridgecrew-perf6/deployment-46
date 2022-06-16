import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "SHARON ",
            img: "https://media-exp1.licdn.com/dms/image/C5603AQHbJxKCsSrm8A/profile-displayphoto-shrink_200_200/0/1516577006217?e=1657756800&v=beta&t=kaNkuwtfWhy47oAMttGp05DyQEvEr5F6pK2q6gW8WdI",
            recipesCount: "10",
            cuisine: "AFRICAN",
            Contact: "0721262142"
        },
       
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Super Chef</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}