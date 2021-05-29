import "./right.css"
import { useSelector } from 'react-redux';
import { AppState } from "../../redux/app-state";

const Right = () : JSX.Element => {   

    const answer = useSelector((state: AppState) => state.answer);
        return (
            <div className="right">
                {answer}                
            </div>
        );         
}

export default Right;