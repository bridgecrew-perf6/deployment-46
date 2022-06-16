
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Melon Slice",
            image: "/img/gallery/img_11.jpeg",
            authorImg:"/img/gallery/img_11.jpeg"
            
        }, 
        {
            title: "Breakfast",
            image: "/img/gallery/img_12.jpeg",
            authorImg:"/img/gallery/img_12.jpeg",
         
        },
        {
            title: "Chicjen Stake",
            image: "/img/gallery/img_13.jpeg",
            authorImg:"/img/gallery/img_13.jpeg",
            
        },
        {
            title: "Salad",
            image: "/img/gallery/img_14.jpeg",
            authorImg:"/img/gallery/img_14.jpeg",
            
        },
        {
            title: "Lemon Salad",
            image: "/img/gallery/img_15.jpeg",
            authorImg:"/img/gallery/img_15.jpeg",
            
        },
        {
            title: "Samosas",
            image: "/img/gallery/img_16.jpeg",
            authorImg:"/img/gallery/img_16.jpeg",
           
        }, 
        {
            title: "Chicken Wet Fry",
            image: "/img/gallery/img_17.jpeg",
            authorImg:"/img/gallery/img_17.jpeg",
            
        },
        {
            title: "Milk",
            image: "/img/gallery/img_18.jpeg",
            authorImg:"/img/gallery/img_18.jpeg",
            
        },
        {
            title: "Fresh Juice",
            image: "/img/gallery/img_6.jpeg",
            authorImg:"/img/gallery/img_6.jpeg",
           
        },
        {
            title: "Chips& Sausage",
            image: "/img/gallery/img_2.jpeg",
            authorImg:"/img/gallery/img_2.jpeg",
           
        },
        {
            title: "Noodles",
            image: "/img/gallery/img_5.jpeg",
            authorImg:"/img/gallery/img_5.jpeg",
            
        },
        {
            title: "Pilau",
            image: "/img/gallery/img_66.jpeg",
            authorImg:"/img/gallery/img_66.jpeg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
        
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}