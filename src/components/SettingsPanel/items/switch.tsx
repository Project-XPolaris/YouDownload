import React from 'react';
import { Paper, ListItem, ListItemIcon, ListItemText, Switch, ListItemSecondaryAction } from '@material-ui/core';
import useStyles from './style';
import clsx from 'clsx';
import { Description } from '@material-ui/icons';

export interface SwitchItemPropsType {
    className?: any
    title: string
    checked: boolean
    onChange: (checked: boolean) => void
}

const SwitchItem = ({ className, checked, title, onChange }: SwitchItemPropsType) => {
    const classes = useStyles()
    return (
        <ListItem className={clsx(classes.root, className)}>
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
                <Switch
                    edge="end"
                    value={checked}
                    checked={checked}
                    onChange={(event) => onChange(event.target.checked)}
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default SwitchItem;