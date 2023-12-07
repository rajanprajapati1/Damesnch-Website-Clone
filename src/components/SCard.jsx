import React from 'react'

const SCard = ({url}) => {
    return (
              <div className="product_card">
              <img src={url} alt="product_image" />
                    <span>Product Images</span>
                </div>
    )
}

export default SCard
