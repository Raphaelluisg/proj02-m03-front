import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/Api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const TodolistView = (props) => {
    const _id = props.match.params.id;
    const [todolist, setTodolist] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTodolistById();

    }, []);

    const getTodolistById = async () => {
        const response = await Api.fetchGetById(_id);
        const result = await response.json();

        setTodolist(result);
    }

    const handleDelete = async(event) => {
        event.preventDefault();
        const response = await Api.fetchDelete(_id);
        const result = await response.json();
        alert(result.message);
        props.history.push('/');
    }

    return(
        <div>
            <div className="conteiner">
                <div className="card notes">
                    <h5 className="note">{ todolist.text }</h5>
                    <div className="btn-group mt-3 w-100 d-flex align-items-center justify-content-center">
                        <Link to={`/edit/${todolist._id}`}  className="btn btn-outline-info">Editar</Link>
                        <button className="btn btn-outline-danger" onClick={onOpenModal}>Excluir</button>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Do you really want to delete </h2>
                <button className="btn btn-success" onClick={handleDelete}>Yes</button>
                <button className="btn btn-danger" onClick={onCloseModal}>No</button>
            </Modal>
        </div>
    )
}



export default TodolistView;