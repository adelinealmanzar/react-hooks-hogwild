import React from 'react';
import PigTile from './PigTile'
import hogs from "../porkers_data";

function PigList() {
    const eachHogInfo = hogs.map(hog => {
        return (
            <PigTile key={hog.name} hog={hog}/>
        )
    })
  return (
    <div className="ui grid container">
        {eachHogInfo}
    </div>
  )
}

export default PigList;
