import React from "react"
import { Dialog } from "../components";
import { colors } from "../styles/variables";
import "styled-components/macro"

export default function DialogContainer({text}) {
  return (
    <Dialog height="150" width="300">
      <Dialog.Text>{text}</Dialog.Text>
      <Dialog.Box>
        <Dialog.Button
          css={`
            background: ${colors.red};
            color: ${colors.white_1};
            &:hover {
              background: ${colors.red_hover};
            }
          `}
        >
          No
        </Dialog.Button>
        <Dialog.Button
          css={`
            box-shadow: 0 3px 6px rgba(30, 38, 56, 0.19);
          `}
        >
          Yes
        </Dialog.Button>
      </Dialog.Box>
    </Dialog>
  );
}