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
    stroke-dashoffset: ${(94 - (94 * 100) / 100)};
}
`;
