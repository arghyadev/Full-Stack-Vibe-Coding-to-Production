import { useState } from "react";

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}


export function ShoppingCart() {
	const [items, setItems] = useState<CartItem[]>([
		{ id: 1, name: 'Item 1', price: 10, quantity: 2 },
		{ id: 2, name: 'Item 2', price: 20, quantity: 1 },
	]);

	const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const handleIncrementItemQuantity = (item: CartItem) => {
		setItems(items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
	};

	const handleDecrementItemQuantity = (item: CartItem) => {
		setItems(items.map((i) => i.id === item.id ? {...i, quantity: i.quantity - 1 } : i));
	};
	

	return (
		<div>
			<h1>Shopping Cart</h1>
			<ul className="mt-4">
				{items.map((item) => {
					return (
						<li key={item.id} className="m-3 flex items-center justify-between p-3 border rounded-lg max-w-md">
							Product Name: {item.name} | Price: ${item.price} | Quantity: {item.quantity}
							<button
								className="bg-gray-500 text-white w-10 rounded-lg font-bold"
								onClick={() => handleIncrementItemQuantity(item)}>
									+
							</button>
							<button 
								className="bg-gray-500 text-white w-10 rounded-lg font-bold"
								disabled={item.quantity === 0}
								onClick={() => handleDecrementItemQuantity(item)}
							>
								-
							</button>
						</li>
					);
				})}
			</ul>
			<p className="m-4 font-bold text-2xl">Total Price: ${totalPrice}</p>
		</div>
	);
	
}