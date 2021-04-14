import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const toastLoader = keyframes`
to {
    stroke-dashoffset: ${94 - (94 * 100) / 100};
}
`;

export const rotateSlideout = keyframes`
    0% {
        transform: translateX(0);
    }
    70% {
        transform: rotateZ(180deg);
    }

    100% {
        transform: translateX(-100px) rotateZ(180deg);
    }
`;
