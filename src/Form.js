import React from 'react'
import {Link} from 'react-router-dom'


export default function Form(props){
    const {
        values,
        submit,
        change,
    } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value

        change(name, valueToUse)
    }



    return(
        //Header
        <form className = 'form-page' onSubmit = {onSubmit}>
            <div className = 'form-group submit'>
         <header className = 'home-header'>
            <h1>Lambda Eats</h1>
            <div className = 'header-buttons'>
            <Link to='/'>
            <button>Home</button>
            </Link>
            <button>Help</button>
            </div>
        </header>
        </div>

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
            <select
             name = 'size'
             onChange={onChange}
             value = {values.size}
             >
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
        <div className = 'radioBtns'>
        <label>Original Red 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'originalRed'
            onChange={onChange}
            checked={values.sauce === 'originalRed'}
            />
        </label>

        <label>Garlic Ranch 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'garlicRanch'
            onChange={onChange}
            checked={values.sauce === 'garlicRanch'}
            />
        </label>

        <label>BBQ Sauce 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'bbqSauce'
            onChange={onChange}
            checked={values.sauce === 'bbqSauce'}

            />
        </label>

        <label>Spinach Alfredo 
            <input 
            type = 'radio'
            name = 'sauce'
            value = 'spinachAlfredo'
            onChange={onChange}
            checked={values.sauce === 'spinachAlfredo'}
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
            onChange = {onChange}
            checked = {values.peperoni}
            />
        </label>

        <label>Sausage
            <input 
            type = 'checkbox'
            name = 'sausage'
            onChange = {onChange}
            checked = {values.sausage}
            />
        </label>

        <label>Canadian Bacon
            <input 
            type = 'checkbox'
            name = 'canadianBacon'
            onChange = {onChange}
            checked = {values.canadianBacon}
            />
        </label>

        <label>Spicy Italian Sausage
            <input 
            type = 'checkbox'
            name = 'spicyitaly'
            onChange = {onChange}
            checked = {values.spicyitaly}
            />
        </label>

        <label>Grilled Chicken
            <input 
            type = 'checkbox'
            name = 'grilledChicken'
            onChange = {onChange}
            checked = {values.grilledChicken}
            />
        </label>

        <label>Onions
            <input 
            type = 'checkbox'
            name = 'onions'
            onChange = {onChange}
            checked = {values.onions}
            />
        </label>

        <label>Green Pepper
            <input 
            type = 'checkbox'
            name = 'greenPepper'
            onChange = {onChange}
            checked = {values.greenPepper}
            />
        </label>

        <label>Diced Tomatoes
            <input 
            type = 'checkbox'
            name = 'dicedTomatoes'
            onChange = {onChange}
            checked = {values.dicedTomatoes}
            />
        </label>

        <label>Black Olives
            <input 
            type = 'checkbox'
            name = 'blackOlives'
            onChange = {onChange}
            checked = {values.blackOlives}
            />
        </label>

        <label>Roasted Garlic
            <input 
            type = 'checkbox'
            name = 'roastedGarlic'
            onChange = {onChange}
            checked = {values.roastedGarlic}
            />
        </label>

        <label>Artichoke Hearts
            <input 
            type = 'checkbox'
            name = 'artichokeHearts'
            onChange = {onChange}
            checked = {values.artichokeHearts}
            />
        </label>

        <label>Three Cheese
            <input 
            type = 'checkbox'
            name = 'threeCheese'
            onChange = {onChange}
            checked = {values.threeCheese}
            />
        </label>

        <label>Pineapple
            <input 
            type = 'checkbox'
            name = 'pineapple'
            onChange = {onChange}
            checked = {values.pineapple}
            />
        </label>

        <label>Extra Cheese
            <input 
            type = 'checkbox'
            name = 'extraCheese'
            onChange = {onChange}
            checked = {values.extraCheese}
            />
        </label>
        </div>

        <div className = 'special-instuctions'>
        <h2>Special Instructions</h2>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}

        <input
        name = 'orderInput'
        type = 'text'
        placeholder = "Anything else?"
        onChange = {onChange}
        value = {values.orderInput}
        />
        <button>Add to Order</button>
        </div>
    </div>
</form>
    )
}