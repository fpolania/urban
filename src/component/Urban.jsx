import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Stack from "@mui/material/Stack";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import HomeIcon from '@mui/icons-material/Home';
import { getProducts } from './services';
import { setProducts } from '../redux/actions';
import { useDispatch } from 'react-redux';


const columns = [] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];
const paginationModel = { page: 0, pageSize: 5 };
const Urban = () => {
    const [providerName, setProviderName] = React.useState('');
    const dispatch = useDispatch();
    const checkName = (providerName) => {
        if (!providerName) {
            return true;
        }

        const validName = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]+(?: [a-zA-Z0-9áéíóúÁÉÍÓÚñÑ]+)*$/;
        return !validName.test(providerName);
    };
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await getProducts();
            console.log(response);
            //dispatch(setProducts(response));
        };
        fetchData();
    }, [])

    return (
        <Container component="main" sx={{ mt: 2, p: 2 }}>
            <Stack spacing={4}>
                <Stack direction="row" spacing={4} justifyContent="center">
                    <Button variant="contained"> <HomeIcon style={{ fontSize: 50, color: 'blue' }} /> Hello World</Button>
                    <Button variant="text">Hello world</Button>
                    <Button variant="outlined">Hello world</Button>
                </Stack>
                <Box>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                        <FormControlLabel required control={<Switch />} label="Required" />
                        <FormControlLabel disabled control={<Switch />} label="Disabled" />
                    </FormGroup>
                </Box>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">This is a success Alert.</Alert>
                    <Alert severity="info">This is an info Alert.</Alert>
                    <Alert severity="warning">This is a warning Alert.</Alert>
                    <Alert severity="error">This is an error Alert.</Alert>
                </Stack>
                <Box sx={{ width: '100%' }}>
                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{ border: 0 }}
                        />
                    </Paper>
                </Box>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
                    <Stack spacing={2}>
                        <TextField
                            error={checkName(providerName)}
                            id="outlined-error"
                            label="Ingrese Nombre"
                            value={providerName}
                            onChange={(e) => setProviderName(e.target.value)}
                            helperText={checkName(providerName) ? "Campo NO válido" : ""}
                        />
                        <TextField
                            error
                            id="outlined-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                        />
                    </Stack>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/ommeo-prod.appspot.com/o/images%2FFrame%2011.jpg?alt=media&token=9d871838-819c-4280-ba2c-7578d3f7974f"
                        width="20%"
                        height="100%"
                        alt="Mountain"
                        style={{ borderRadius: '8px' }}
                    />
                </Box>

            </Stack>
        </Container>

    )
}
export default Urban