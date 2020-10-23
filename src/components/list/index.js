import React, {useEffect, useState} from 'react'
import axios from 'axios'


import CharacterRow from '../characterRow'

const List = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('http://hp-api.herokuapp.com/api/characters').then(res => {
            setCharacters(res.data)
            console.log("List -> res.data", res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return(
        <div>
            {characters.map(char => 
            <CharacterRow name={char.name} url={char.image}></CharacterRow>
        )
        }
        </div>
    )
}

export default List