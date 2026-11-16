import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import BrandIcon, { hasBrandIcon } from './BrandIcon';

const Row = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '170px minmax(0, 1fr)',
  alignItems: 'baseline',
  columnGap: theme.spacing(2),
  padding: theme.spacing(1.25, 0),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    rowGap: theme.spacing(1),
  },
}));

const Category = styled(Typography)({
  fontWeight: 'bold',
});

const Items = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.75),
}));

export default function Skill({ skillData }) {
  return (
    <div>
      {skillData.map((group, index) => (
        <React.Fragment key={group.category}>
          <Row>
            <Category variant="body2" component="h3">
              {group.category}
            </Category>
            <div>
              <Items>
                {group.items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    variant="outlined"
                    icon={
                      hasBrandIcon(item) ? (
                        <BrandIcon name={item} sx={{ fontSize: 14 }} />
                      ) : undefined
                    }
                    sx={{ '& .MuiChip-icon': { ml: '6px', mr: '-2px' } }}
                  />
                ))}
              </Items>
              {group.note && (
                <Typography
                  variant="caption"
                  component="p"
                  sx={{ color: 'text.secondary', mt: 1, lineHeight: 1.5 }}
                >
                  {group.note}
                </Typography>
              )}
            </div>
          </Row>
          {index !== skillData.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
}
