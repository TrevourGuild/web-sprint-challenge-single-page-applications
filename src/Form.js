import React from 'react'
import {Link} from 'react-router-dom'


export default function Form(props){








    return(
        //Header
        <div className = 'form-page'>
         <header className = 'home-header'>
            <h1>Lambda Eats</h1>
            <div className = 'header-buttons'>
            <Link to='/'>
            <button>Home</button>
            </Link>
            <button>Help</button>
            </div>
        </header>

        {/* build pizza image and text portion*/}
        <div className = 'pizza-build'>
        <h2>Build Your Own Pizza!</h2>
        <img src = 'https://patch.com/img/cdn20/users/23306266/20201012/042419/styles/patch_image/public/pizzapie___12162338753.jpg' alt = 'form-pizza'></img>

        <h2>Choice of Size</h2>
        {/* <p>Required</p> */}

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}

        <label htmlFor = 'size'>
            <select id = 'size' name = 'size'>
                <option value = ''> -- Select a Size --</option>
                <option value = 'Small'> Small</option>
                <option value = 'Medium'> Medium</option>
                <option value = 'Large'> Large</option>
            </select>
        </label>

        <h2>Choice of Sauce</h2>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <div className = 'radio-btns'>
        <label>Original Red 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'originalRed'
            />
        </label>

        <label>Garlic Ranch 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'garlicRanch'
            />
        </label>

        <label>BBQ Sauce 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'bbqSauce'
            />
        </label>

        <label>Spinach Alfredo 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'spinachAlfredo'
            />
        </label>
        </div>

        <h2>Add Toppings</h2>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <div className = 'check-box'>
        <label>Pepperoni
            <input 
            type = 'checkbox'
            name = 'peperoni'
            />
        </label>

        <label>Sausage
            <input 
            type = 'checkbox'
            name = 'Sausage'
            />
        </label>

        <label>Canadian Bacon
            <input 
            type = 'checkbox'
            name = 'canadianBacon'
            />
        </label>

        <label>Pepperoni
            <input 
            type = 'checkbox'
            name = 'peperoni'
            />
        </label>

        <label>Spicy Italian Sausage
            <input 
            type = 'checkbox'
            name = 'spicyitaly'
            />
        </label>

        <label>Grilled Chicken
            <input 
            type = 'checkbox'
            name = 'grilledChicken'
            />
        </label>

        <label>Onions
            <input 
            type = 'checkbox'
            name = 'onions'
            />
        </label>

        <label>Green Pepper
            <input 
            type = 'checkbox'
            name = 'greenPepper'
            />
        </label>

        <label>Diced Tomatoes
            <input 
            type = 'checkbox'
            name = 'dicedTomatoes'
            />
        </label>

        <label>Black Olives
            <input 
            type = 'checkbox'
            name = 'blackOlives'
            />
        </label>

        </div>
    </div>


</div>
    )
}