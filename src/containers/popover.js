import React from "react"
import { Popover } from "../components"

export function PopoverContainer({links}) {
    return (
      <Popover>
        <Popover.List>
          <Popover.Item>
            <Popover.ButtonLink>Edit Profile</Popover.ButtonLink>
          </Popover.Item>
          <Popover.Line />
          <Popover.Item>
            <Popover.ButtonLink>Account Settings</Popover.ButtonLink>
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