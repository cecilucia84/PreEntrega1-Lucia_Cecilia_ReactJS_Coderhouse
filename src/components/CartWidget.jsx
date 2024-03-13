import cart from "../assets/cart.jpg";
export const CartWidget = () => {
    return (
        <div id="cart-widget">
        <img src={cart} alt="Cart" width={80}/>
        <span>0</span>
        </div>
    );
};