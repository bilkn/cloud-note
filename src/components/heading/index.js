import React from "react"
import {Container} from "./styles/heading"
export default function Heading({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}