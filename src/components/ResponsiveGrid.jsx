import { Grid } from "@mui/material";

export default function ResponsiveGrid({children, gridHeader}) {
    return (
        <div className="flex items-center justify-center bg-transparent w-full h-full overflow-auto">
            <div className="py-5 w-full h-full flex flex-col">
                <h1 className="text-white font-bold text-2x1 mb-7 lg:mx-8">{gridHeader}</h1>
                <Grid
                    container
                    direction={"row"}
                    rowSpacing={2}
                    columnSpacing={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {children}
                </Grid>
        </div>
            </div>
    )
}