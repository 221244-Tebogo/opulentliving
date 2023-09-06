// import React from 'react'

// const [form.Data, setFormData] = useState({
//     brand: '',
//     model: '',
//     color: '',
//     quantity: '',
// });

// const handleChange = (=) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//         prevData,
//         name : value,
//     }));
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     try { 
//         const response = await axios.post('YOUR_API_ENDPOINT', FormData);
//         console.log('Sneaker data submitted: ', response.data);
//         //Successful submission message here,
//     } catch (error) {
//         console.error('Error submitting data: ', error);

//     }

function CREATE() {
    const [name, setName ] = useState();
    const [type, setType ] = useState();
    const [size, setSize ] = useState();
    const [price, setPrice ] = useState();
    const [quantity, setQuantity ] = useState();
}

const getName = (e) => {
    let value = e.target.value;
    setName(value);
}

const getType = (e) => {
    let value = e.target.value;
    setType(value);
}

const getSize = (e) => {
    let value = e.target.value;
    setSize(value);
}

const getQuantity = (e) => {
    let value = e.target.value;
    setQuantity(value);
}

return (
 <div>

    <Container> 
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Control
                type="text"
                name="name"
                value={model}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group controlId="model">
            <Form.label>Model</Form.label>
            <Form.Control
            type="text"
            name="model"
            value={model}
            onChange={(e) => setName(e.target.value)}
            required
            />
            </Form.Group> 
            
            <Form.Group controlId="type">
            <Form.label>Type</Form.label>
            <Form.Control
            type="text"
            name="type"
            value={model}
            onChange={(e) => setName(e.target.value)}
            required
            />
            </Form.Group>

            <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantityx(e.target.value)}
            required
            />
            </Form.Group>

      </Container>
    </div>
  )
}

export default create
