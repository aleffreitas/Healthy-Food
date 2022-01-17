import { Content } from './styles';

export function Card(props) {
    return (
        <Content>                     
            <img src={props.image} alt="" />
            
            <section className="description">
                <h2>{props.title}</h2>
                <button type="button" >See Recipe</button>
            </section>
        </Content>
    );
}