import { keyframes } from 'styled-components';

const dotToStyle = `
    border-radius: 3px;
    height: 2px;
    width: 11px;
`;

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

export const scaleUp = keyframes`
    from {
        transform: scale(0.1);
    }

    to {
        transform: scale(1);
    }

`;

export const slideInFaded = keyframes`
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0)
        opacity:1;
    }
`;

export const dotBeforeAnimation = keyframes`
 from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(8px) scale(0.5);
    height: 5px;
    width: 5px;
  }
  to {
    ${dotToStyle}
    transform: rotateZ(-45deg);
    left: 32px;
  }
`;

export const dotAfterAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-8px) scale(0.5);
    height: 5px;
    width: 5px;
  }
  to {
    ${dotToStyle}
    transform:  rotateZ(45deg);
     right: 31px;
  }
`;

export const scaleUpToCenter = keyframes`
  to {
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    top: 50%; 
  } 
`;
