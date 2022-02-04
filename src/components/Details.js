function Details({ specialty, weight, greased, medal}) {
    return (
        <ul>
            <li>{`Specialty: ${specialty}`}</li>
            <li>{`Weight: ${weight} lbs`}</li>
            <li>{`Greased: ${greased ? 'Yes' : 'No'}`}</li>
            <li>{`Medal: ${medal}`}</li>
        </ul>
    )
}

export default Details;