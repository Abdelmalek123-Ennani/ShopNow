
import React , { useState , useEffect, useLayoutEffect, useMemo } from 'react'
import "./cardItems.scss"
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Fade} from "react-reveal"
import { actions, getItemsFromLocalStorage } from '../../store/cardItems';
import EmptyCard from './EmptyCard';

const CardItems = () => {

    const dispatch = useDispatch()
    const cardItems = useSelector(state => state.cardItems.cardItems);
    const totalPrice =  cardItems.reduce((total , val) => total+= val.price * val.quanity , 0);
    

    const chageQuantityItem = (qt , id) => {
        dispatch(actions.editQuanityItem({
            quanity : qt,
            id
        }))
    }

    const removeItemFromCard = (id) => {
        dispatch(actions.removeFromCard(id))
    }

    useLayoutEffect(() => {
        dispatch(getItemsFromLocalStorage());
    } , [])

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    } , [])

  return cardItems.length == 0 ? (
      <EmptyCard />
  ) : (
    <div className='container'>
        <div className='row'>
            <div className="col-12 col-md-8">
            <h4>Your Visit made our day</h4>
            {cardItems.map((item , idx) => (
                        <Fade left delay={700 * idx} key={item.id} >
                        <div className='col-12 border my-1 py-2' key={item.id}>
                            <div className='row'>
                                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                    <img src={item.image} width="250"  alt="image item"
                                        style={{
                                            objectFit : "cover"
                                        }}
                                    />
                                </div>
                                <div className='col-12 col-md-7 p-4 details'>
                                    <h6>{ item.title }</h6>
                                    <p> 
                                        <small title={item.description}>{ item.description.substring(0 , 100)}...</small>
                                    </p>
                                    <p> { item.price * item.quanity }$ ({ item.quanity })</p>
                                    <p className="qnity_control">
                                        <button 
                                            className="btn btn-minus"
                                            onClick={() => chageQuantityItem(item.quanity - 1 , item.id)}
                                        >-</button>
                                        <span className="qnty">{ item.quanity }</span>
                                        <button 
                                            className="btn btn-plus"
                                            onClick={() => chageQuantityItem(item.quanity + 1 , item.id )}
                                        >+</button>
                                    </p>
                                    <p>
                                        <button className='btn btn-danger'
                                        onClick={() => removeItemFromCard(item.id)}
                                        >
                                            Remove from cart 
                                            {/* <FontAwesomeIcon icon={faTrashCan} className="text-white px-2" /> */}
                                        </button>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </Fade>
                    ))}
            </div>
            <div className='col-12 col-md-4 checkout-form-shop pt-4'>
            <div className="container-fluid">
    <div className="row justify-content-center">
        <div className="card my-4 p-3">
            <div className="row main">
                <div className="col-12"><span>Cart</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Shipping confirmation</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Credit card checkout</span></div>
            </div>
            <div className="row justify-content-center mrow">
                <div className="col-12"> <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" width="35px" height="35px" /> <img src="https://img.icons8.com/color/48/000000/visa.png" width="35px" height="35px" /> <img src="https://img.icons8.com/color/48/000000/paypal.png" width="35px" height="35px" /> </div>
            </div>
            <form className="form-card">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group"> <input type="text" className="form-control p-0" id="number" required /><label className="form-control-placeholder p-0" for="number">CardNumber</label> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group"> <input type="text" className="form-control p-0" id="name" required /><label className="form-control-placeholder p-0" for="name">Cardholder'sName</label> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-12">
                        <div className="form-group"> <input type="text" className="form-control p-0" id="sdate" required /><label className="form-control-placeholder p-0" for="sdate">StartDate</label> </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="form-group"> <input type="text" className="form-control p-0" id="expdate" required /><label className="form-control-placeholder p-0" for="expdate">ExpirationDate</label> </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="form-group"> <input type="password" className="form-control p-0" id="passw" required /><label className="form-control-placeholder p-0" for="passw">CVV</label> </div>
                    </div>
                </div>
                <div className="row lrow mt-4 mb-3">
                    <div className="col-6 col-sm-8">
                        <h3>Grand Total:</h3>
                    </div>
                    <div className="col-6 col-sm-4">
                        <h5 className='p-0'>&#36;{ totalPrice.toFixed(2) }</h5>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-sm-12"> <button type="button" className="btn w-100 text-center">Pay</button> </div>
                </div>
            </form>
        </div>
    </div>
</div>
            </div>
        </div>
     </div>
  )
}

export default CardItems