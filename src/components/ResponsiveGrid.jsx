import { Box, Button, Grid, Link } from "@mui/material";

export default function ResponsiveGrid({children, gridHeader, buttonText, buttonAction}) {
    return (
        <div className="flex items-center justify-center bg-transparent w-full h-full overflow-auto">
            <div className="py-5 w-full h-full flex flex-col">
                <Box className="flex flex-row justify-between">
                    <h1 className="text-white font-bold text-2x1 mb-7 mx-5 lg:mx-8">{gridHeader}</h1>
                    <Link href={buttonAction}>
                        <Button className="mb-7 mx-5 lg:mx-8 bg-custom-blue font-bold" variant="contained">{buttonText}</Button>
                    </Link>
                </Box>
                <Grid
                    container
                    direction={"row"}
                    spacing={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {children}
                </Grid>
        </div>
            </div>
    )
}