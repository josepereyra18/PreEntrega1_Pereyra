import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, createTheme, Paper, TextField, Box } from '@mui/material';
import { collection, addDoc, Timestamp, getFirestore } from 'firebase/firestore'; // Importa las funciones de Firebase necesarias

const Checkout = () => {

    const { cart } = useCartContext();
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState(''); // Nuevo campo de correo electrónico
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [phone, setPhone] = useState('');
    const [items, setItems] = useState('');
    const theme = createTheme({
        typography: { fontFamily: 'Poppins' },
    });
    const total = cart.items.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    const [error, setError] = useState({
        error: false,
        message: '',
    });

    const validateEmail = (email) => {
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateEmail(email)) {
            if (email === confirmEmail) { // Compara el email con la confirmación
                setError({
                    error: false,
                    message: '',
                });
                console.log('Correo electrónico correcto');
            } else {
                setError({
                    error: true,
                    message: 'Los correos electrónicos no coinciden',
                });
            }
        } else {
            setError({
                error: true,
                message: 'Correo electrónico incorrecto',
            });
        }
    };

    useEffect(() => {
        if (cart.legth !== 0) {
            setItems(cart);
        }
    }, []);
    console.log(items);

    const orderData = {
        name: name,
        apellido: apellido,
        email: email,
        phone: phone,
        items: cart.items,
        timestamp: Timestamp.fromDate(new Date()), // Agrega una marca de tiempo
    };

    const handleCheckout = () => {
        const db = getFirestore();
        addDoc(collection(db, 'checkOut'), orderData)
            .then((docRef) => {
                console.log('Documento Agregado con id:', docRef.id);
            })
            .catch((error) => {
                console.error('Error al agregar documento', error);
            });
    };
    return (
        <div className='CO-container' style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ fontFamily: "Poppins", fontSize: "30px", textAlign: "center" }}>Checkout</Typography>
            <div style={{ display: "flex", flexDirection: "row", padding: "30px", justifyContent: "space-around" }}>
                <Box component="form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", height: "73vh", width: "430px" }}>
                    <TextField
                        id='name'
                        label='Name'
                        type='Name'
                        variant='outlined'
                        fullWidth
                        required
                        helperText="Ingrese su nombre"
                        onChange={(e) => setName(e.target.value)}>

                    </TextField>
                    <TextField
                        id='apellido'
                        label='apellido'
                        type='Apellido'
                        variant='outlined'
                        fullWidth
                        required
                        helperText="Ingrese su apellido"
                        onChange={(e) => setApellido(e.target.value)}>

                    </TextField>
                    <TextField
                        id='phone'
                        label='phone'
                        type='Phone'
                        variant='outlined'
                        required
                        fullWidth
                        onChange={(e) => setPhone(e.target.value)}>
                    </TextField>

                    <TextField

                        id='email'
                        label='Email'
                        type='email'
                        variant='outlined'
                        required
                        error={error.error}
                        helperText={error.message}
                        value={email}
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id='confirmEmail' // Campo de confirmación de correo electrónico
                        label='Confirm Email'
                        type='email'
                        variant='outlined'
                        required
                        error={error.error}
                        helperText={error.message}
                        value={confirmEmail}
                        fullWidth
                        onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                </Box>
                <Box>
                    <Paper>
                        {cart.items.length === 0 ? (
                            <TableCell style={{ display: "flex", justifyContent: 'center', alignContent: 'center' }}>
                                <Typography theme={theme}>
                                    El carrito esta vacio :(
                                </Typography>
                            </TableCell>) :
                            (
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell  >
                                                    <Typography theme={theme}>
                                                        Imagen
                                                    </Typography>

                                                </TableCell>
                                                <TableCell  >
                                                    <Typography theme={theme}>
                                                        Producto
                                                    </Typography>
                                                </TableCell>
                                                <TableCell  >
                                                    <Typography theme={theme}>
                                                        Cantidad
                                                    </Typography>
                                                </TableCell>
                                                <TableCell  >
                                                    <Typography theme={theme}>
                                                        Precio
                                                    </Typography>
                                                </TableCell >
                                                <TableCell  >
                                                    <Typography theme={theme}>
                                                        Total
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cart.items.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell  >
                                                        <img className="CartImg" src={item.img} />
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Typography theme={theme}>
                                                            {item.nombre}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Typography theme={theme}>
                                                            {item.quantity} x
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Typography theme={theme}>
                                                            ${item.precio}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell  >
                                                        <Typography theme={theme}>
                                                            ${item.precio * item.quantity}
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                            <TableRow>
                                                <TableCell colSpan={4}>
                                                    <Typography theme={theme} style={{ fontSize: '20px' }}>
                                                        Total:
                                                    </Typography>
                                                </TableCell>
                                                <TableCell  >
                                                    <Typography theme={theme} style={{ fontSize: '20px' }}>
                                                        ${total.toFixed(2)}
                                                    </Typography>

                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <Button style={{ color: "black" }}
                                        type='submit'
                                        sx={{ mt: 2 }}
                                        // component={Link} to ={"/"}
                                        onClick={handleCheckout}
                                    > Pagar </Button>
                                </TableContainer>

                            )
                        }
                    </Paper>
                </Box>
            </div>
        </div>
    );
}

export default Checkout;