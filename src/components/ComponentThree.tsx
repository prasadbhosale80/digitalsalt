import React, { useState } from 'react'
import { getProducts } from '../api/getProducts'
import Form from './Form'
import Button from './UI/Button'
import './styles/Component.css'

const ComponentThree = () => {
    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState(false);
    const [recordPerPage, setRecordPerPage] = useState(10)
    const [lastPageRecordIndex, setlastPageRecordIndex] = useState(-1)

    const handleClick = (value: string) => {
        if (!!value) {
            setLoading(true)
            setTimeout(async () => {
                const response = await getProducts()
                setProducts(response?.data);
                setLoading(false)
            }, (+value * 1000));
        }
    }

    const pageOneClick = () => {
        setlastPageRecordIndex(-1)
    }

    const pageTwoClick = () => {
        setlastPageRecordIndex(recordPerPage)
    }


    const ProductList = () => {
        return <>
            <h3>Product List</h3>
            <ul>
                {products.map((item: any, index: number) => (lastPageRecordIndex < index && index < lastPageRecordIndex + recordPerPage) && <li key={item.id} >{item.title}</li>)}
            </ul>
            <div className="pagination">
                <Button onClick={pageOneClick} >1</Button>
                <Button onClick={pageTwoClick}  >2</Button>
            </div>
        </>
    }


    return (
        <div>
            <Form onClick={handleClick} buttonName={"Submit"} placeholder={'Enter Seconds'} />
            {!!products.length && <ProductList />}
            {loading && <h1>Loading...</h1>}
        </div>
    )
}

export default ComponentThree