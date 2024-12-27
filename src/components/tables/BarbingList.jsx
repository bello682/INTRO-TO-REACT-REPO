import React, { useState } from "react";
import "./barbingList.css";
import { products } from "../datas";

const BarbingListTable = () => {
	const [modalImage, setModalImage] = useState(null);

	const handleImageClick = (image) => {
		setModalImage(image);
	};

	const closeModal = () => {
		setModalImage(null);
	};

	return (
		<div className="BarbingListTable">
			<h1> Saloon Setting Up List</h1>
			<div className="table-container">
				<table className="animated-table">
					<thead>
						<tr>
							<th>S/N</th>
							<th>Item Name</th>
							<th>Needs</th>
							<th>Image</th>
							<th>Price</th>
							<th>Total Price</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<tr key={product.id}>
								<td>{index + 1}</td>
								<td>{product.name}</td>
								<td>{product.needs}</td>
								<td>
									<img
										src={product.image}
										alt={product.name}
										className="table-image"
										onClick={() => handleImageClick(product.image)}
									/>
								</td>
								<td># {product.price}</td>
								<td># {product.totalPrice}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{modalImage && (
				<div className="modal" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<img src={modalImage} alt="Large view" />
						<button className="close-button" onClick={closeModal}>
							&times;
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default BarbingListTable;
