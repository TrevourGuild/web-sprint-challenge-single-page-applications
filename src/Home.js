import React from 'react'
import Pizza from './Pizza.jpg'
import {Link} from 'react-router-dom'


export default function Home(props){
    


    return (
    <div className = 'home-page'>
        <header className = 'home-header'>
            <h1>Lambda Eats</h1>
            <div className = 'header-buttons'>
            <button>Home</button>
            <button>Help</button>
            </div>
        </header>
        <div className = 'pizza-img'>
            <img src = {Pizza} alt='pizzaImg'/>
        </div>
        <div className = 'img-content'>
            <h1>Your favorite food, deliverd while coding!</h1>

            <Link to= "/Form">
            <button> Create Your Own Pizza </button>
            </Link>
        </div>
    </div>
    )
}