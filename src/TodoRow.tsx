import { Link, TableCell, TableRow } from "@mui/material";
import React from "react";

const TodoRow = (props: any) => (
    <TableRow
        key={props.todoItem.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
            {props.todoItem.id}
        </TableCell>
        <TableCell>{props.todoItem.userId}</TableCell>
        <TableCell>
            <Link href={`/todo/${props.todoItem.id}`} color="inherit">
                {props.todoItem.title}
            </Link>
        </TableCell>
    </TableRow>
)

export default TodoRow;