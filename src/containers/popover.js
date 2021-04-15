import React from "react"
import { Popover } from "../components"
import * as ROUTES from "../constants/routes"

export default function PopoverContainer() {
    return (
      <Popover>
        <Popover.List>
          <Popover.Item>
            <Popover.ButtonLink>Edit Profile</Popover.ButtonLink>
          </Popover.Item>
          <Popover.Line />
          <Popover.Item>
            <Popover.ButtonLink to={ROUTES.ACCOUNT}>Account Settings</Popover.ButtonLink>
          </Popover.Item>
          <Popover.Line />
          <Popover.Item>
            <Popover.ButtonLink>Help</Popover.ButtonLink>
          </Popover.Item>
          <Popover.Line />
          <Popover.Item>
            <Popover.ButtonLink>Sign Out</Popover.ButtonLink>
          </Popover.Item>
        </Popover.List>
      </Popover>
    ); 
}