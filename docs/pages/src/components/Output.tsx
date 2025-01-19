import { Paper, Typography } from '@mui/material'

interface OutputProps {
    value?: string
}

export const Output = ({ value }: OutputProps) => {
    return (
        <Paper style={{ padding: '16px' }}>
            <Typography variant="h5">Output</Typography>
            <Typography variant="body1" fontFamily="monospace">Result: {value} </Typography>
        </Paper>
    )
}
