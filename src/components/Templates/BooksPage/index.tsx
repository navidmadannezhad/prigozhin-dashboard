import { FC, useState } from "react";
import { PageWrapper } from "@components/Major/AidingElements";
import { Box, Button, Typography, useTheme } from "@mui/material";
import QuantityHolder from "@components/Major/QuantityHolder";
import SearchInput from "@components/Major/Form/SearchInput";
import { PlusIcon } from "@components/Major/Icons";
import DeleteRecordsModal from "@components/Major/DeleteRecordsModal";
import ListTable from "@components/Major/ListTable";
import { useNavigate } from "react-router-dom";
import BooksTableColumns from "@configs/BookTableColumns";
import { Book } from "@models/models";

interface BooksPageProps {}

const books: Book[] = [
    {
        id: 0,
        title: "جنایت و مکافات",
        price: 2000,
        inventory: true
    },
    {
        id: 1,
        title: "مدرسه موش ها",
        price: 2000,
        inventory: true
    },
    {
        id: 2,
        title: "انسان خردمند",
        price: 2000,
        inventory: true
    },
    {
        id: 3,
        title: "بخوانیم و بنویسیم - سوم دبستان",
        price: 2000,
        inventory: true
    },
    {
        id: 4,
        title: "آموزش برنامه نویسی",
        price: 2000,
        inventory: true
    }
]

const BooksPage: FC<BooksPageProps> = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    return (
        <PageWrapper>
            <DeleteRecordsModal open={deleteModalOpen} setOpen={setDeleteModalOpen} />

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3, maxWidth: 600, width: "100%" }}>
                    <Typography
                        sx={{
                            fontSize: "1.2rem",
                            fontVariationSettings: "'wght' 600",
                        }}
                    >
                        همه کتاب ها
                    </Typography>
                    <QuantityHolder quantityTitle="کتاب" quantityValue={13} />
                    <Box sx={{ maxWidth: 250, width: "100%" }}>
                        <SearchInput />
                    </Box>
                </Box>

                <Button
                    color="primary"
                    variant="contained"
                    sx={{ borderRadius: theme.spacing(1) }}
                    onClick={() => {
                        navigate("/book/new/");
                    }}
                >
                    <PlusIcon
                        stroke={theme.palette.primary.contrastText}
                        sx={{ width: "15px", height: "15px" }}
                    />
                    <Typography sx={{ ml: 1 }}>
                        کتاب جدید
                    </Typography>
                </Button>
            </Box>

            <ListTable 
                columns={BooksTableColumns}
                rows={books} 
            />
        </PageWrapper>
    );
};

export default BooksPage;
