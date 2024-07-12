import { FC, useState } from "react";
import MiniReport from "@components/Major/MiniReport";
import { PageWrapper } from "@components/Major/AidingElements";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import QuantityHolder from "@components/Major/QuantityHolder";
import SearchInput from "@components/Major/Form/SearchInput";
import { FilterIcon } from "@components/Major/Icons";
import { TrashcanIcon } from "@components/Major/Icons/TrashcanIcon";
import DeleteRecordsModal from "@components/Major/DeleteRecordsModal";

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = () => {
    const theme = useTheme();
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    return (
        <PageWrapper>
            <DeleteRecordsModal open={deleteModalOpen} setOpen={setDeleteModalOpen} />

            <Box sx={{ width: "100%" }}>
                <Box sx={{ mb: 2 }}>
                    <Typography
                        sx={{
                            fontSize: "1.1rem",
                            fontVariationSettings: "'wght' 700",
                        }}
                    >
                        خوش اومدی ادمین! 👋
                    </Typography>
                </Box>
            </Box>

            <Grid container sx={{ flexWrap: "nowrap", gap: 3 }}>
                <Grid item xs={4}>
                    <MiniReport />
                </Grid>
                <Grid item xs={4}>
                    <MiniReport />
                </Grid>
                <Grid item xs={4}>
                    <MiniReport />
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3, maxWidth: 600, width: "100%" }}>
                    <Typography
                        sx={{
                            fontSize: "1.2rem",
                            fontVariationSettings: "'wght' 600",
                        }}
                    >
                        آخرین سفارش‌ها
                    </Typography>
                    <QuantityHolder quantityTitle="سفارش" quantityValue={23} />
                    <Box sx={{ maxWidth: 250, width: "100%" }}>
                        <SearchInput />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Button
                        sx={{
                            border: `2px solid ${theme.palette.secondary.light}`,
                            borderRadius: "8px",
                        }}
                    >
                        <FilterIcon
                            stroke={theme.palette.secondary.dark}
                            sx={{ width: "20px", height: "20px" }}
                        />
                        <Typography
                            sx={{
                                color: theme.palette.secondary.dark,
                                fontVariationSettings: "'wght' 600",
                                fontSize: "0.9rem",
                                mx: 3,
                            }}
                        >
                            فیلترها
                        </Typography>
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: theme.palette.warning.dark,
                            minWidth: "unset",
                            width: 40,
                            "&:hover": {
                                backgroundColor: theme.palette.warning.dark,
                            },
                        }}
                        onClick={() => {
                            setDeleteModalOpen(true);
                        }}
                    >
                        <TrashcanIcon stroke="#fff" sx={{ width: "20px", height: "20px" }} />
                    </Button>
                </Box>
            </Box>
        </PageWrapper>
    );
};

export default DashboardPage;
