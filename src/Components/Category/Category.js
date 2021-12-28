import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Category.css'
import { useLocation } from 'react-router-dom' 

const Category = () => {
    const [search, setSearch] = useState('');

    
    const handleChange = e => {
        setSearch(e.target.value);
    };

    // const filteredCoins = coins.filter(coin =>
    //     // coin.name.toLowerCase().includes(search.toLowerCase())
    //     console.log("hey")
    //   );

    const location = useLocation()
    const fromDashboard = location.state.showAccordions
    console.log({fromDashboard});

    // const { categoryDetail } = this.props.location.state
    // console.log({categoryDetail});



    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
      
   

    return (
        <div>
            <Container>
            
                <div className="categoryPage">
                    <h1>Which categories are you responsible for?</h1>
                    <Box component="form" noValidate autoComplete="off">
                    <FormControl sx={{ width: '100%' }}>
                   
                        <OutlinedInput placeholder="Search by category or department name" onChange={handleChange} />
                    </FormControl>
                    </Box>
                    <h2>My Categories </h2>
                    <Stack direction="row" spacing={1}>
                    {/* {filteredCoins.map(coin => { 
                        return( */}
                            <Chip label="Deletable" onDelete={handleDelete} />
                        {/* );
                     })} */}
                    </Stack>
                </div>
            </Container>
        </div>
    )
}

export default Category
