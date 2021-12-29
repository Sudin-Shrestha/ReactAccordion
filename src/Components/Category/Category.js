import React, {useState} from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './Category.css'
import { useLocation } from 'react-router-dom' 
import DoneIcon from '@mui/icons-material/Done';
import {Link} from 'react-router-dom'



const Category = () => {
    //taking data from another page
    const location = useLocation()
    const fromAccordion = location.state
    const [search, setSearch] = useState('');

    var tifOptions = Object.keys(fromAccordion).map(function(key) {
        return `${fromAccordion[key]}`
    });

    // Update list after deleting data
    const [list, updateList] = useState(tifOptions);

    
    function handleDelete(key){
        const name = key
        updateList(list.filter(item => item !== name));
    }

    //Searching through data
    const filteredCoins = list.filter(coin =>
         coin.toString().toLowerCase().includes(search.toLowerCase())
      );

      const handleChange = (e) => {
        setSearch(e.target.value);
    };


    const searchList = filteredCoins.map((item, key) =>{
            return <Chip key={key} label={item} onDelete={() => handleDelete(item)} />
        })

 

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
                        {searchList}
                    </Stack>
                    <p>You're all set, remove one of your current choices to add another</p>
                    <div className="doneEdit">
                    <Box
                        sx={{
                            '& > :not(style)': {
                            m: 2,
                            },
                        }}
                    />

                    <Link to={{ pathname:`/`  }}>
                        <DoneIcon sx={{ fontSize: 90}}/>
                    </Link>

                    
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Category
