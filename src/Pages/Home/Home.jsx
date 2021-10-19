import React from 'react';

const homeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    color: 'red'
}


const Home = () => {
    return (
        <div style={homeStyle}>
            <h1> Home </h1> 
        </div>
    );
};

export default Home;