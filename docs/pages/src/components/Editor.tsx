import MonacoEditor from '@monaco-editor/react';
import { Paper, Typography } from '@mui/material';

const defaultValue = `
def list_max([int] l, int max) -> int:
    if l == [] then
        max
    else
        if (head l) > max then
            list_max(tail l, head l)
        else
            list_max(tail l, max);

list_max([1, 2, 3, 4, 5, 60, 7, 8, 9, 10], 0);
`

export const Editor = () => {
    return (<Paper style={{ padding: '16px' }}>
        <Typography variant="h5">Input</Typography>
        <MonacoEditor height="25vh" width="100%" defaultLanguage="ruby" defaultValue={defaultValue} />
    </Paper>
    )
}
