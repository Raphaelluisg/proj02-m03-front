import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const todolist = props.data;
    return (
        <Link to={`/todolist/${todolist._id}`} className="col">
            <div classname="card-content">
                <div className="card-body">
                    <h5 className="card-title">{ todolist.text }</h5>
                </div>
            </div>
        </Link>
    )
}

export default Card;
