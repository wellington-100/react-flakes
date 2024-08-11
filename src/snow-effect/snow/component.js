import './style.scss';
import Flake from '../flake/component.js'
import {randInt, randColor} from '../../helpers/generators';
import { useEffect, useState } from 'react';

const Snow = ({quantity}) => {

    let flakeCounter = 1
    let flakesArray = []

    for(let i = 0; i < quantity; i++) {
        flakesArray.push(
            <Flake
                key={flakeCounter++}
                size = {randInt(20, 40)}
                color = {randColor()}
                left = {randInt(0, 100)} 
                top={randInt(-200, 0)}                                                            
            />,

        )
    }
    let [flakes, setFlakes] = useState(flakesArray)
    const TOP_LIMIT = 80

    //HW: apply the limit to EACH flake
    //Hw: refactor the initialization logic - 5 flakes with random left, color and diff keys
    //HW: use destructuring + optimization to minimize the code inside the setter


    useEffect(()=>{
        setTimeout(()=>{
            setFlakes(flakes => 
                flakes
                    .filter(({ props: { top } }) => top < TOP_LIMIT)
                    .map(({ props: { size, color, top, left } }) => (
                        <Flake
                            key={flakeCounter++}
                            size={size}
                            color={color}
                            top={top + 5}
                            left={left}
                        />
                    ))
            )  
        }, 500)
    })

    return (
        flakes
    )
}

export default Snow