import React, {useState, useEffect} from 'react';
import Home from './Home';
import Form from './Form';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Order from './Order';

const initialFormValues = {
  // dropdown
  size: '',

  // radio buttons
  sauce: '', 

  // checkboxes
  peperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyitaly: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,

  //text input
  orderInput: '',

}

const initialOrders = []
// // const initialDisabled = true

const App = () => {

  const [pizzaOrders, setPizzaOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
// //   // const [disabled, setDisabled] = useState(initialDisabled)



// //   //////////////// HELPERS ////////////////
// //   //////////////// HELPERS ////////////////
// //   //////////////// HELPERS ////////////////
  // const getOrder =  () => {
  //   axios.get('https://reqres.in/api/orders')
  //     .then(res => {
  //       setPizzaOrders(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

   const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setPizzaOrders([res.data, ...pizzaOrders])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  // setFormValues(initialFormValues)

// //   //////////////// EVENT HANDLERS ////////////////
// //   //////////////// EVENT HANDLERS ////////////////
// //   //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      orderInput: formValues.orderInput.trim(),
      toppings: ['peperoni', 'sausage', 'canadianBacon', 'spicyitaly', 'grilledChicken', 'onions', 'greenPepper', 'dicedTomatoes', 'blackOlives', 'roastedGarlic', 'artichokeHearts', 'threeCheese', 'pineapple', 'extraCheese'].filter(top => formValues[top] === true),
    }
     console.log(newOrder)
     postNewOrder(newOrder)

  }

// //   //////////////// SIDE EFFECTS ////////////////
// //   //////////////// SIDE EFFECTS ////////////////
// //   //////////////// SIDE EFFECTS ////////////////

// useEffect(() => {
//   getOrder()
// }, [])
 


  return (
      <Switch>
        <Route path = '/Form'>
          <Form 
          values = {formValues}
          change = {inputChange}
          submit = {formSubmit}
          />
            {
            pizzaOrders.map(order => {
              return (
                <Order key={order.id} details={order}/>
              )
            })
        }
        </Route>
        <Route exact path = '/'>
          <Home />
        </Route>
      </Switch>
  )
}
export default App;
