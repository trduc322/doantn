import React, { useEffect, useState } from 'react'
import callApi from '../../apiCaller'
import Container from '../container'
import CategoryItem from './categoryitem'

function Category() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    callApi(`Category`,"GET",null).then(res => {
        setCategories(res.data)
    })
  }, [])
  
  return (
    <div>
        <Container>
            <div className='py-3'>
                <p className='text-3xl'>Categories</p>
                {categories.map(item => 
                    <CategoryItem CategoryName = {item.CategoryName} CategoryDescription = {item.CategoryDescription}/>
                    )}
            </div>
        </Container>
    </div>
  )
}

export default Category