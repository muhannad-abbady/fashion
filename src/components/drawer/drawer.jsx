import { Box, Drawer, SwipeableDrawer } from "@mui/material";

const Drawer1 = ({ open, setOpen, anchor, children, swipeable = true }) => {
    const Comp = swipeable ? SwipeableDrawer : Drawer
    return (
        <Comp
            anchor={anchor}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            PaperProps={{ style: { borderRadius: (anchor === "bottom" ? "20px 20px 0px 0px" : 0) } }}
            disableSwipeToOpen
        >
            <Box position="relative" height="100%" sx={{ p: (anchor !== "bottom" ? "24px" : "12px 0px") }}>
                {anchor === "bottom" ? <Box width={50} height={7} className="bg-lightGray" mx="auto" mb="30px" borderRadius="20px" /> : null}
                {children}
            </Box>
        </Comp>
    );
}

export default Drawer1;