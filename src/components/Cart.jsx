import React, { useContext,} from 'react'
import { CartContext } from '../global/CartContext'
import { Navbar } from './Navbar';
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr"
import { BsTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Cart = ({ user }) => {

    const { AiOutlineShoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);


    return (
        <>
            <Navbar user={user} />
            <>
                {AiOutlineShoppingCart.length !== 0 && <h1>Cart</h1>}
                <div className='cart-container'>
                    {
                        AiOutlineShoppingCart.length === 0 && <>
                            <div>no items in your cart (Refresh the page) or you are not logged in</div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }
                    {AiOutlineShoppingCart && AiOutlineShoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'>Rs {cart.ProductPrice}.00</div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <GrFormAdd size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <GrFormSubtract size={24} />
                            </div>

                            <div className='cart-price'>
                                Rs {cart.TotalProductPrice}.00
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <BsTrashFill size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {AiOutlineShoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
    )
}