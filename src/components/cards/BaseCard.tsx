import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface BaseCardProps {
    id: string;
    children?: React.ReactNode;
}

const StyledBaseCard = styled(Card)(() => ({
    width: 'var(--card-width)',
    height: 'var(--card-height)',
    margin: 'var(--card-margin)',
    transition: 'var(--card-transition)',
    borderRadius: 'var(--card-border-radius)',
    cursor: 'pointer',
    '&:hover': {
        transform: 'var(--card-hover-transform)',
        boxShadow: 'var(--card-hover-shadow)',
    },
}));


const BaseCard = ({ id, children }: BaseCardProps) => {
    return (
        <StyledBaseCard data-testid={`base-card-${id}`}>
            {children}
        </StyledBaseCard>
    );
};

export default BaseCard;