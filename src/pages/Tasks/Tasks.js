import React from 'react'
import Api from '../../api/Api';

const Task = (props) => {
    const history = props.history;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const text = event.target.text.value;
        const isComplete = event.target.isComplete.value;

        const todolists = {
            text,
            isComplete
        }

        try{
            const response = await Api.fetchPost(todolists)
            const result = await response.json();
            alert(result.message);
            history.push("/");
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <div className="container tasks">
            <div className="card mt-5">
                <div className="card-title">
                    <div className="row">
                        <div className="col">
                            <h3>My To-dos</h3>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                <form className="todo-form mt-2" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="checkbox" className="form-control" name="text" id="text" placeholder="Digite o Titulo"/>
                                <label htmlFor="floatingInput">Titulo</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <button className="btn btn-success" type="submit">Enviar</button>
                            <button className="btn btn-outline-default">Voltar</button>
                        </div>
            </div>
                </form>
                
                </div>
            </div>
        </div>
    )
}

export default Task;
