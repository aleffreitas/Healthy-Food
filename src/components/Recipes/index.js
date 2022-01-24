import { recipes } from "services/recipes";
import { Card } from "./Card";
import { Container } from "./styles";

export function Recipes() {
    return (
        <>
        <div id="healthyRecipes"></div>
        <Container >
            <h1>Our Best Recipes</h1>
            <p>Far far way, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>
            
            <div className="cards">
                {recipes.map((item) => {
                    return (
                        <Card key={item.id} title={item.title} image={item.image}/>
                    )
                })}           
            </div>            
        </Container>
        </>
    );
}