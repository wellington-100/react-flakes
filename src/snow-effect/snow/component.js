import './style.scss';
import Flake from '../flake/component.js'
import {randInt, randColor} from '../../helpers/generators';
import { useEffect, useState } from 'react';

const Snow = () => {

    let flakeCounter = 1

    let [flakes, setFlakes] = useState([
        <Flake
            key={flakeCounter++}
            size = {randInt(20, 40)}
            color = {randColor()}
            left = {randInt(0, 100)} 
            top={randInt(-200, 0)}                                                            
        />,
    ])

    const TOP_LIMIT = 95
    const FLAKES_COUNT_LIMIT = 200

    useEffect(()=>{
        setTimeout(()=>{
            setFlakes(flakes => 
                [...flakes,
                    ...new Array(FLAKES_COUNT_LIMIT - flakes.length)
                    .fill()
                    .map(() => 
                        <Flake
                            key={flakeCounter++}
                            size = {randInt(20, 40)}
                            color = {randColor()}
                            left = {randInt(0, 100)} 
                            top={randInt(-300, 0)}                                                            
                        />,
                    )                       
                ]
                    .filter(({ props: { top } }) => top < TOP_LIMIT)
                    .map(({ props: { size, color, top, left } }) => (
                        <Flake
                            key={flakeCounter++}
                            size={size}
                            color={color}
                            top={top + 0.1}
                            left={left}
                        />
                    ))
            )  
        }, 20)
    })

    return (
        flakes
    )
}

export default Snow