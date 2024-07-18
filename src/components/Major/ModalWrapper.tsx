import { FC, ReactNode, forwardRef, cloneElement } from "react";
import { Backdrop, Box, Modal, styled } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

interface ModalWrapperProps{
    open: boolean;
    setOpen: (v: boolean) => void;
    children: ReactNode,
    width?: string | number;
};

interface FadeProps {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true);
            }
        },
        config:{
            duration: 100
        }
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {cloneElement(children, { onClick })}
        </animated.div>
    );
});
  
const ModalWrapper: FC<ModalWrapperProps> = (props) => {
    return(
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={props.open}
                onClose={() => { props.setOpen(false) }}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={props.open}>
                    <StyledModalBox width={props.width ?? 400}>
                        {props.children}
                    </StyledModalBox>
                </Fade>
            </Modal>
        </div>
    )
}

const StyledModalBox = styled(Box)((props: any) => ({
    position: 'absolute' as any,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `100%`,
    maxWidth: `${props.width}px`,
    backgroundColor: props.theme.palette.secondary.ultraLight,
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "24",
}))

export default ModalWrapper;