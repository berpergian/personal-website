import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

const HeaderColumn = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  lineHeight: '60px',
}));

const Layout = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  [theme.breakpoints.down('xs')]: {
    display: 'block',
  },
}));

const Logo = styled('img')(({ theme }) => ({
  width: '10%',
  padding: theme.spacing(0.5),
}));

const Tag = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: '#e0e0e0',
  fontSize: 11,
  margin: '0 5px 2px 0',
  padding: '3px 5px',
  borderRadius: 4,
}));

const SkillPos = styled('div')({
  gridColumnStart: 2,
  gridColumnEnd: 3,
  textAlign: 'right',
});

export default function Skill({ skillData }: { skillData: any }) {
  return (
    <div>
      <Layout>
        <HeaderColumn variant="h6">Experienced</HeaderColumn>
        <SkillPos>
          {skillData.experiencedSkill.map((skill: any, index: number) => (
            <Tooltip key={index} title={skill.name}>
              <Logo src={`./tech/${skill.logo}`} alt={skill.name} />
            </Tooltip>
          ))}
        </SkillPos>
      </Layout>
      <Divider sx={{ my: 1 }} />
      <Layout>
        <HeaderColumn variant="h6">Learn about</HeaderColumn>
        <SkillPos>
          {skillData.learnSkill.map((skill: any, index: number) => (
            <Tooltip key={index} title={skill.name}>
              <Logo src={`./tech/${skill.logo}`} alt={skill.name} />
            </Tooltip>
          ))}
        </SkillPos>
      </Layout>
      <Divider sx={{ my: 1 }} />
      <Layout>
        <HeaderColumn variant="h6">Know with</HeaderColumn>
        <SkillPos>
          {skillData.knowSkill.map((skill: any, index: number) => (
            <Tooltip key={index} title={skill.name}>
              <Logo src={`./tech/${skill.logo}`} alt={skill.name} />
            </Tooltip>
          ))}
        </SkillPos>
      </Layout>
      <Typography sx={{ pt: 1 }}>Other tech interests:</Typography>
      <div>
        {skillData.others.map((skill: string, index: number) => (
          <Tag key={index} variant="caption">
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}
