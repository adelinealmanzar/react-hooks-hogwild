import React, { useState } from 'react';
import PigList from "./PigList"

function Header() {
    const [checked, setChecked] = useState(false)
    const [dropdownValue, setDropdownValue] = useState(null)

    function handleCheckedBox() {
        setChecked(() => !checked)
    }

    function handleDropdown(e){
        setDropdownValue(e.target.value)
    }

	return (
		<h3>
			<label> Filter by greased pigs: </label>
			<input onChange={handleCheckedBox} type="checkbox" checked={checked} />
            <label> Sort by: </label>
            <select onChange={handleDropdown}>
                <option>--choose one--</option>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
            <PigList isChecked={checked} dropdownValue={dropdownValue}/>
		</h3>
	)
}
export default Header;
