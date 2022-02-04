import React from 'react';
import PigTile from './PigTile'
import hogs from "../porkers_data";


function PigList({ isChecked=false, dropdownValue }) {
    // const eachHogInfo = hogs.map(hog => {
    //     if (isChecked) {
    //       return (<PigTile />)
    //     } else {
    //       
    //     }
    // })

    const orderedPigsByName = []
    hogs.map(hog => orderedPigsByName.push(hog.name))
  
    console.log(orderedPigsByName.sort())
    const orderedPigsByWeight = [...hogs]

  

    function renderPigList(hogArr) {
      return (
        <div className="ui grid container">
          {hogArr.map(hog => (<PigTile key={hog.name} hog={hog}/>))}
        </div>
      )
    }

    if (isChecked) {
      const greasedHogs = hogs.filter(hog => hog.greased)
      return renderPigList(greasedHogs);
    } else {
      return renderPigList(hogs)
    }
  // return (
  //   <div className="ui grid container">
  //       {eachHogInfo}
  //   </div>
  // )
}

export default PigList;
