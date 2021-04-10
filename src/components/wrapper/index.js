import React from "react"
import {Container} from "./styles/wrapper"

export default function Wrapper({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}