import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from "@mui/material";


import React from "react";

const Search = () => {
    return (
        <>
            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                variant="outlined"
                sx={{ mt: 3, borderRadius: 50 }}
            />
        </>
    );
};

export default Search;
