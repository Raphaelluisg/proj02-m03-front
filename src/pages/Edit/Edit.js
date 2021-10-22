import React, { useState, useEffect } from 'react';
import Api from '../../api/Api';

const Edit = (props) => {
    const _id = props.match.params.id;
    const history = props.history;

    const [todolist, setTodolist] = useState({});


    useEffect(() => {
        getTodolistById();
    }, []);


    const getTodolistById = async () => {
        const response = await Api.fetchGetById(_id);
        const result = await response.json();

        setTodolist(result);
    };


    const handleFieldsChange = (event) => {
        const fields = { ...todolist };
        fields[event.target.name] = event.target.value;

        setTodolist(fields);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const todolistObj = { ...todolist };

        try {
            const response = await Api.fetchPut(todolistObj, _id);
            const result = await response.json();
            alert(result.message);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div className="container-form">
            <div className="base mt-4">
                <div className="card-title">
                    <div className="row">
                        <div className="col subtitle">
                            <h3>Edit Tasks</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form className="todo-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" value={todolist.text} classname="form-control" name="todo" id="floatingInput" placeholder="Insert a new task" onChange={handleFieldsChange} />
                                    <label htmlFor="flotingInput">Text</label>
                                </div>
                            </div>
                            
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default Edit;