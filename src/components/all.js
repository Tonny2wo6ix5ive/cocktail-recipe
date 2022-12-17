import axios from "axios";
import { useEffect, useState } from "react";
import '../css/home.css'

const All = () => {

    const [cocktail, setCocktail] = useState([]);

    useEffect(()=>{
        axios.get('www.thecocktaildb.com/api/json/v1/1/random.php').then((promise)=>{
            setCocktail(promise.data['drinks']);
        })
    }, [])

    return ( 
        <div className="parent">
            {cocktail.map((value)=>(
                <div className="" key={value.idDrink}>
                    <div className="container">
                        <img src={value.strDrinkThumb}/>
                        <div className="card">
                            <h2>{value.strDrink}</h2>
                            <p>{value.strInstructions}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default All;