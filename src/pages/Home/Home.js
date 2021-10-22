import React from 'react';
import './Home.css';
import List from '../../components/structure/List/List';

const Home = () => {
    return (
        <div className="container home mt-3">
            <h1 className="text-center">Home</h1>
            <List />
        </div>
    );
}

export default Home;
