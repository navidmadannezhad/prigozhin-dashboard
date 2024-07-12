import { FC } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export interface SearchBarProps{};

const SearchBar: FC<SearchBarProps> = (props) => {
    return(
        <div>
            <SearchOutlinedIcon />
            <input
                type="text"
                placeholder="بگرد..."
            />
        </div>
    )
}

export default SearchBar;