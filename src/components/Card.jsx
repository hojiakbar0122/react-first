import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Card = ({ item, products, setProducts }) => {
  const [modal, setModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    price: '',
    sale: '',
    quantity: '',
    img: ''
  });

  const toggle = () => {
    setModal(!modal);
    // modal ochilganda formni item bilan to‘ldiramiz
    if (!modal) {
      setForm(item);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();

    const updatedProducts = products.map(p =>
      p.id === item.id ? { ...form, id: item.id } : p
    );

    setProducts(updatedProducts);
    toggle();
  };

  const deleteProduct = (id)=>{
    setProducts(products.filter(item=>(item.id!==id)))
  }

  return (
    <div className="card">
      <div className="card-body">
        <img src={item.img} alt="" className="w-100 rounded-2" />
      </div>
      <div className="card-footer d-flex flex-column gap-2">
        <h3 className="text-center">{item.name}</h3>
        <Button color="warning" onClick={toggle} className="btn-sm">edit</Button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
          <ModalBody>
            <form onSubmit={submit} id="product">
              <input type="text" required onChange={handleChange} name="name" value={form.name} className="form-control my-2" placeholder="Name..." />
              <input type="text" required onChange={handleChange} name="price" value={form.price} className="form-control my-2" placeholder="Price..." />
              <input type="text" required onChange={handleChange} name="sale" value={form.sale} className="form-control my-2" placeholder="Sale..." />
              <input type="text" required onChange={handleChange} name="quantity" value={form.quantity} className="form-control my-2" placeholder="Quantity..." />
              <input type="text" required onChange={handleChange} name="img" value={form.img} className="form-control my-2" placeholder="Img..." />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" className="btn btn-success" form="product">Save</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <button className="btn btn-danger btn-sm" onClick={()=>deleteProduct(item.id)}>delete</button>
      </div>
    </div>
  );
};

export default Card;
