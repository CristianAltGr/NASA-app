import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <section>
            <h2>List of services</h2>

            <div>
                <Link to={"/projects/earth/"}>Earth</Link>
                Asteroids
                Rober photos // rober type photo
                techport list /// techport porject
                **stelites
            </div>

        </section>
    )
}

export default List