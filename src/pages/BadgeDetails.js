import React from 'react';

import confLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeletBadgeModal from '../components/DeleteBadgeModal';

import './styles/BadgeDetails.css';

/**Hook personalizado */
function useIncreaseCount(max){
    const [count, setCount] = React.useState(0);//inicializamos en 0

    if(count > max){
        setCount(0);
    }

    return [count, setCount];

}//fin del Hook personalizado

function BadgeDetails(props){
    //const count = 3;

    /**utilizamos Hools */
    //nosotros indicamos la propiedad
    const [count, setCount] = useIncreaseCount(4);
    //const [count, setCount] = React.useState(0)//inicializamos el state
    // fin de hooks


    const BadgeData = props.badge
    return(
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6"><img src={confLogo} alt="Logo de la conferencia" /></div>
                            <div className="col-6 BadgeDetails__hero--attendant-name">
                                <h1>{BadgeData.firstName} {BadgeData.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName={BadgeData.firstName} lastName={BadgeData.lastName} email={BadgeData.email} twitter={BadgeData.twitter}
                                jobTitle={BadgeData.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>

                                    <button onClick={()=>{
                                        setCount(count+1)
                                    }} className="btn btn-primary mr-4">Increase count {count}</button>

                                    <Link className="btn btn-primary mb-4" to={`/badges/${BadgeData.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                    <DeletBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal}
                                        onDeleteBadge={props.onDeleteBadge}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BadgeDetails