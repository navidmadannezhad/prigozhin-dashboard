import { FC } from "react";
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import DataGridPagination from "./DataGridPagination";

interface ListTableProps extends DataGridProps{};

const ListTable: FC<ListTableProps> = (props) => {
    return(
        <DataGrid
            { ...props }
            checkboxSelection
            disableRowSelectionOnClick
            autoHeight={true}
            sx={{
                boxShadow: (theme) => theme.palette.secondary.shadow
            }}
            rowHeight={80}
            slots={{
                pagination: DataGridPagination
            }}
            paginationMode="client"
        />
    )
}

export default ListTable;