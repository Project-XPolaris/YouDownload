import useStyles from "./style"
import React from "react"

export interface SubPanelPropsTypes {
    children:any
}
const SubPanel = ({ children }: SubPanelPropsTypes) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default SubPanel