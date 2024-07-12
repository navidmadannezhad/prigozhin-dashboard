import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';

export const SvgIconWrapper = styled(MuiSvgIcon, {
    shouldForwardProp: (prop) => prop !== 'fill',
})<SvgIconProps>(() => ({
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin:  'round',
    strokeWidth:  '2.25px',
}));

SvgIconWrapper.defaultProps = {
    // viewBox: '0 0 24 24',
    focusable: 'false',
    'aria-hidden': 'true',
};