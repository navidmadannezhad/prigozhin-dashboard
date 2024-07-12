import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from "@mui/material";
import { PencilIcon, TrashcanIcon } from "../components/Major/Icons";
import { RoundedButton } from "../components/Major/AidingElements";
import BranchModal from '@components/Major/BookModal';
import { useState } from 'react';
import DeleteRecordModal from '@components/Major/DeleteRecordModal';

const OperationButtons = ({ params }: any) => {
    const [branchModalOpen, setBranchModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    return(
        <>
            <BranchModal
                book={params.row}
                open={branchModalOpen}
                setOpen={setBranchModalOpen}
            />
            <DeleteRecordModal
                open={deleteModalOpen}
                setOpen={setDeleteModalOpen}
                record={params.row}
            />

            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", gap: 2, width: "100%", pl: 3 }}>
                <RoundedButton
                    onClick={() => { setBranchModalOpen(true) }}
                >
                    <PencilIcon />
                </RoundedButton>
                <RoundedButton
                    onClick={() => { setDeleteModalOpen(true) }}
                >
                    <TrashcanIcon
                        sx={{
                            "& path":{
                                stroke: (theme) => theme.palette.primary.dark
                            }
                        }}
                    />
                </RoundedButton>
            </Box> 
        </>
    )
}

const BookTableColumns: GridColDef[] = [
    { 
        field: 'title', 
        headerName: 'عنوان کتاب', 
        flex: 1,
        disableColumnMenu: true,
        renderCell: (params: any) => (
            <Typography 
                sx={{ 
                    fontSize: "1.07rem",
                    fontVariationSettings: "'wght' 600"
                }}
            >
                {params.formattedValue}
            </Typography>
        )
    },
    { 
        field: 'price', 
        headerName: 'قیمت', 
        flex: 1,
        disableColumnMenu: true,
        renderCell: (params: any) => (
            <Typography 
                sx={{ 
                    fontSize: "1.07rem",
                    fontVariationSettings: "'wght' 600"
                }}
            >
                {params.formattedValue}
            </Typography>
        )
    },
    { 
        field: 'inventory', 
        headerName: 'موجودی', 
        flex: 1,
        disableColumnMenu: true,
        renderCell: (params: any) => (
            <Typography 
                sx={{ 
                    fontSize: "1.07rem",
                    fontVariationSettings: "'wght' 600"
                }}
            >
                {params.formattedValue ? "موجود" : " ناموجود"}
            </Typography>
        )
    },
    { 
        field: 'options', 
        headerName: 'عملیات ها', 
        flex: 1,
        disableColumnMenu: true,
        headerAlign: "center",
        renderCell: (params: any) => <OperationButtons params={params} />
    },
];

export default BookTableColumns;