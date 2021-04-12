import React from "react"
import { Dialog } from "../components";
import { colors } from "../styles/variables";

export default function DialogContainer({text}) {
  return  <Dialog height="150" width="300">
      <Dialog.Text>{text}</Dialog.Text>
      <Dialog.Box>
        <Dialog.Button
          css={`
            background: ${colors.red};
            color: #f7f9fa;
          `}
        >
          No
        </Dialog.Button>
        <Dialog.Button
          css={`
            box-shadow: 0 3px 6px rgba(30, 38, 56, 0.08);
          `}
        >
          Yes
        </Dialog.Button>
      </Dialog.Box>
    </Dialog>;
}