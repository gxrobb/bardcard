import { styled } from "@mui/material/styles";
import useFetchImage from "./hooks";
import { Typography } from "@mui/material";

interface SpellCardProps {
    id: string;
    title: string;
    effectText: string
    // imageSrc: string | null;
    // isLoading: boolean;
    cost?: number;
}


const SpellCard = ({ id, title, effectText, cost,}: SpellCardProps) => {


    // fetch a random cat image since we dont have art for now
    // this will just be a prop when we have art
    const { imageUrl, loading } = useFetchImage(id);
    

    return (
        <StyledSpellCard>
            <StyledSpellCost>{cost}</StyledSpellCost>
            <StyledPortrait>
                {loading && <div style={{ height: 160}}>Loading...</div>}
                {imageUrl && !loading && (
                    <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
            </StyledPortrait>
            <StyledCardTitle>
              <Typography variant="h6">{title}</Typography>
            </StyledCardTitle>
            <StyledCardDescription>
              <Typography variant="body2">{effectText}</Typography>
            </StyledCardDescription>
        </StyledSpellCard>
    );
};

export default SpellCard;

const StyledSpellCard = styled('div')(() => ({
  position: 'relative',

}));

const StyledPortrait = styled('div')(() => ({
  padding: '5px',
  maxHeight: '160px',
  overflow: 'hidden',
  '& img': {
    borderRadius: 8,
    maxWidth: '100%',
    maxHeight: '160px',
  }
}));

const StyledSpellCost = styled('div')(() => ({
  width: '30px',
  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0', // TODO -- temp
  borderRadius: '50%',
  position: 'absolute',
}));

const StyledCardTitle = styled('div')(() => ({
  padding: '8px 12px',

}));

const StyledCardDescription = styled('div')(() => ({
  padding: '8px 12px',
}));
