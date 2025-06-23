import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function AddProduct({products, setProducts}) {
  const [modal, setModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    price: '',
    sale: '',
    quantity: '',
    img: ''
  });

  const toggle = () => setModal(!modal);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();

    const isExist = products.some((item) => item.name === form.name);
    if (!isExist) {
      setProducts([...products, form]);
      toggle();
      setForm({ name: '', price: '', sale: '', quantity: '', img: '' });
    } else {
      alert("Bu mahsulot allaqachon mavjud!");
    }
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Add Product
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Fill Info</ModalHeader>
        <ModalBody>
           <form onSubmit={submit} id="product">
              <input type="text" onChange={handleChange} name="name" className="form-controll my-2" placeholder="Name..."/>
              <input type="text" onChange={handleChange} name="price" className="form-controll my-2" placeholder="Price..."/>
              <input type="text" onChange={handleChange} name="sale" className="form-controll my-2" placeholder="Sale..."/>
              <input type="text" onChange={handleChange} name="quantity" className="form-controll my-2" placeholder="Quantity..."/>
              <input type="text" onChange={handleChange} name="img" className="form-controll my-2 col-12" placeholder="Img..."/>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className="btn btn-success" form="product">Create</Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddProduct;