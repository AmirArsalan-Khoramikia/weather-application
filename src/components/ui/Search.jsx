import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, TextField } from "@mui/material";

import React from "react";

const Search = () => {
    return (
        <Box>
            <TextField
            sx={{mt:2 , bgcolor:"secondary.main" , borderRadius:2}}
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "icon.main" }} />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    );
};

export default Search;
