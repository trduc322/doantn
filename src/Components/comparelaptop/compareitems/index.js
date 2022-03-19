import React from 'react'
import Container from '../../container'

function CompareItem() {
  return (
    <div>
        <Container>
            <div className="">
                <p className="text-2xl">Add A Laptop To Compare</p>
                <input type="text" placeholder="Search for laptop to compare" className="mt-3 border py-3 px-2"/>
            </div>
        </Container>
    </div>
  )
}

export default CompareItem