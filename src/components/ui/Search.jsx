import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";

import React from "react";


const Search = ({citySearcg}) => {


    const handelChange=(e)=>{
        citySearcg(e.target.value)
    }


    return (
        <Box>
            <TextField
                onChange={handelChange}
                sx={{
                    mt: 2,
                    bgcolor: "secondary.dark",
                    borderRadius: 2,
                }}
                placeholder="Enter city name..."
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "secondary.light" }} />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    );
};

export default Search;
