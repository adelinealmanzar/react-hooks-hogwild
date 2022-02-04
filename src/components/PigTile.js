import React, { useState } from 'react';
import Details from './Details'



function PigTile({ hog }) {
    const [showDetails, setDetails] = useState(false)
    function handleClick() {
        setDetails(showDetails => !showDetails)
    }
    console.log(showDetails)
    function renderDetails() {
        if (showDetails === true) {
            return (<Details specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]}/>)
        } else {
            return null
        }
    }
  return (
    <div onClick={handleClick}className="ui eight wide column" style={{'border-style': 'solid'}}>
        <img src={hog.image} style={{width: '50%'}}></img>
        <h2>{hog.name}</h2>
        {renderDetails()}
    </div>
  )
}

export default PigTile;
