import React from 'react';
//hacemos composicion importamos el modal
import Modal from './Modal';

//no hay funcion de estado por tanto es una funcion
function DeleteBadgeModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="DeleteBadgeModal">
            <h1>Are you sure?</h1>
            <p>
                You are about to delete this Badge
            </p>
            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal