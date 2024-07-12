import { FC } from "react";
import { useGridApiContext, useGridSelector, gridPaginationModelSelector, gridPageSizeSelector, useGridRootProps } from "@mui/x-data-grid";
import { Grid, Pagination,  PaginationItem, Typography } from "@mui/material";
import { RightArrowIcon, LeftArrowIcon } from "./Icons";

interface DataGridPaginationProps{};

const LeftButton = () => (
    <Grid container gap={1} alignItems="center">
        <RightArrowIcon sx={{ stroke: (theme) => theme.palette.secondary.main, width: "14px", height: "14px" }} />
        <Typography>
            قبلی
        </Typography>
    </Grid>
)

const RightButton = () => (
    <Grid container gap={1} alignItems="center">
        <Typography>
            بعدی
        </Typography>
        <LeftArrowIcon sx={{ stroke: (theme) => theme.palette.secondary.main, width: "14px", height: "14px" }} />
    </Grid>
)

const DataGridPagination: FC<DataGridPaginationProps> = () => {
    // WIP -- TO BE TESTED MORE, WORKS FOR NOW
    const apiRef = useGridApiContext();
    const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
    const rootProps = useGridRootProps();
    const pageSize= useGridSelector(apiRef, gridPageSizeSelector);
    const pageCount = Math.floor((rootProps?.rowCount as any) / pageSize);
    
    return(
        <Pagination
            sx={{
                "& li:first-of-type .MuiButtonBase-root, & li:last-of-type .MuiButtonBase-root":{
                    border: (theme) => `1px solid ${theme.palette.secondary.light}`,
                    display: "flex",
                    gap: 1,
                    borderRadius: theme => theme.spacing(1),
                    padding: "8px 13px"
                }
            }}
            count={pageCount}
            // page={paginationModel.page + 1}
            // onChange={(event, value) => apiRef.current.setPage(value - 1)}
            page={paginationModel.page}
            
            onChange={(_event: any, value) => apiRef.current.setPage(value)}
            renderItem={(item) => (
                <PaginationItem
                    slots={{ previous: RightButton, next: LeftButton }}
                    {...item}
                />
            )}
        />
    )
}

export default DataGridPagination;