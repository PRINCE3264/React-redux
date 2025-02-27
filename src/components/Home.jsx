import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='add-to-cart'>
                <img style={{ width: '90px', height: 'auto' }} src="/assets/cc.webp" alt="" />
                <button style={{ padding: '5px', backgroundColor: 'orange', color: '#fff', fontSize: 'rem', borderRadius: '4px' }}>Add Item</button>
            </div>
            <h1>Home componet</h1>

            <div className='cart-wrapper'>
                <div className='img-wrapper  item'>
                    <img src="/assets/sglax.webp" alt="" />
                </div>
                <div className='text-wrapper  item'>
                    <span>i-Phone13</span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item ">
                    <button style={{
                        backgroundColor: 'red',
                        padding: '10px'
                        , borderRadius: '4px', color: '#fff'
                    }}>Add to cart</button>
                </div>


            </div>
        </div>
    )
}

export default Home
