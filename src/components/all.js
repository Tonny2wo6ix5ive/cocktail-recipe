import axios from "axios";
import { useEffect, useState } from "react";

const All = () => {

    const [cocktail, setCocktail] = useState([]);

    useEffect(()=>{
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then((promise)=>{
            setCocktail(promise.data['drinks']);
        })
    })

    return ( 
        <div>
            {cocktail.map((value)=>(
                <div key={value.idDrink}>
                    <p>{value.strDrink}</p>
                    <div>
                        <img src={value.strDrinkThumb}/>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default All;