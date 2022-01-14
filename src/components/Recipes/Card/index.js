import imgComida1 from '../../../assets/comida_1.svg';
import { Content } from './styles';

export function Card() {
    return (
        <Content>
            <div className="image">
                <img src={imgComida1} alt="" />
            </div>
            <div className="description">
                <h2>Broccoli Salad with Bacon</h2>
                <button type="button" >See Recipe</button>
            </div>
        </Content>
    );
}