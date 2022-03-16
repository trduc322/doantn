import React from 'react'
import Container from '../../container'

function CategoryItem(props) {
  return (
    <div>
        <Container>
            <div>
                <p>{props.CategoryName}</p>
                <p>{props.CategoryDescription}</p>
            </div>
        </Container>
    </div>
  )
}

export default CategoryItem