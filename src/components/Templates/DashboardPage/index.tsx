import { FC, useState } from "react";
import MiniReport from "@components/Major/MiniReport";
import { PageWrapper } from "@components/Major/AidingElements";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import QuantityHolder from "@components/Major/QuantityHolder";
import SearchInput from "@components/Major/Form/SearchInput";
import { FilterIcon } from "@components/Major/Icons";
import { TrashcanIcon } from "@components/Major/Icons/TrashcanIcon";
import DeleteRecordsModal from "@components/Major/DeleteRecordsModal";
import SimpleLineChart from "@components/Major/Charts/SimpleLineChart";

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

            <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <MiniReport />
                </Grid>
                <Grid item md={4} xs={12}>
                    <MiniReport />
                </Grid>
                <Grid item md={4} xs={12}>
                    <MiniReport />
                </Grid>
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between" mt={3}>
                <Grid item container alignItems="center" gap={2} xs={6}>
                    <Typography
                        sx={{
                            fontSize: "1.2rem",
                            fontVariationSettings: "'wght' 600",
                        }}
                    >
                        آخرین سفارش‌ها
                    </Typography>
                    <QuantityHolder quantityTitle="سفارش" quantityValue={23} />
                </Grid>
                <Grid item container alignItems="center" justifyContent="flex-end" gap={3} xs={4}>
                    <Button
                        variant="outlined"
                        color="secondary"
                    >
                        <FilterIcon
                            stroke={theme.palette.secondary.dark}
                            sx={{ width: "20px", height: "20px", mr: 1 }}
                        />
                        فیلترها
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
                        className="trashcan-button"
                    >
                        <TrashcanIcon stroke="#fff" sx={{ width: "20px", height: "20px" }} />
                    </Button>
                </Grid>
            </Grid>

            <Grid container>
                <Grid xs={12} item>
                    <SimpleLineChart />
                </Grid>
            </Grid>
        </PageWrapper>
    );
};

export default DashboardPage;
