import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Api from '../List/List';

const List = () => {
    const [todolists, setTodolists] = useState([]);

    useEffect(() => {
        getTodolists();
    }, []);

    const getTodolists = async () => {
        const response = await Api.fetchGetAll();
        const data = await response.json();
        setTodolists(data);
    }

    return(
        <div>
            {
            todolists.map((todolist, index) => (
                <Card data={todolist} key={index} />
            )
        )} 
        </div>
    );
}


export default List;