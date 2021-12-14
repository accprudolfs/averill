import PlantsImages from '../../../Plant/Plant.jsx'
import React from 'react'
import clsx from 'clsx'

export default function ShopCell(props) {
  return (
    // Show only cells where ShowState is true
    <div
      className={clsx({
        displayNone: !props.elementShowState,
        'Shop-cell': true,
      })}
      // Set Right order for elements , and proper cell size
      style={{ order: props.order, ...props.cellFlexSize }}
    >
      <div
        // Marks cell if it was selected
        className={clsx({
          highlightedCell: props.active,
          'Shop-cell-inner': true,
        })}
        // highlights cell and send id to State->plantInHand
        onClick={props.onClick}
      >
        <div className="Product-title"> {props.plant.shopName}</div>
        <div className="Shop-product-img">
          {/* Shows proper img depending on product type and stage */}
          <PlantsImages
            className="Shop-product-img"
            type={props.plant.plant}
            stage={2}
          />
        </div>
        {/* Marks cell if it was selected */}
        <div
          className={clsx({
            highlighted: props.active,
            'Shop-product-price': true,
          })}
        >
          {props.plant.buyPrice} $
        </div>
      </div>
    </div>
  )
}
