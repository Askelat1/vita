import Authorization from "../pages/Authorization";
import Registration from "../pages/Registration";
import MainOffice from '../pages/MainOffice'


const Modal = (props) => {
    const modal = props?.modal?.props

    function renderForm(param) {
        switch(param) {
            case 'authorization':
                return <Authorization closeModal={props?.modal?.dispatch} />;
            case 'mainOffice':
                return <MainOffice closeModal={props?.modal?.dispatch} />;
            case 'registration':
                return <Registration closeModal={props?.modal?.dispatch}/>;
            default:
                return <Authorization closeModal={props?.modal?.dispatch}/>;
        }
    }

    const content = modal?.active && (
        <div className="modal">
            <div className="blackout" onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}></div>
            <div className="modal-container">
                {renderForm(modal?.content)}
                <button onClick={() => props?.modal.dispatch({ type: "modal", active:"false"})}>Закрыть окно</button>
            </div>
        </div>
    )

    return content

};

export default Modal