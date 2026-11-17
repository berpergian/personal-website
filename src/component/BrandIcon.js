import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import {
  siDotnet,
  siRuby,
  siPython,
  siJavascript,
  siRubyonrails,
  siMongodb,
  siPostgresql,
  siMysql,
  siRedis,
  siRabbitmq,
  siDocker,
  siKubernetes,
  siGit,
  siSentry,
  siSteam,
  siClaude,
  siFirebase,
} from 'simple-icons';

/* Skill/tag name (as written in resume_data.json) -> brand icon.
   Names without an entry simply render without an icon. */
const ICONS = {
  Ruby: siRuby,
  Python: siPython,
  JavaScript: siJavascript,
  '.NET / ASP.NET Core': siDotnet,
  'Ruby on Rails': siRubyonrails,
  'MongoDB (incl. sharding)': siMongodb,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Redis: siRedis,
  Firebase: siFirebase,
  RabbitMQ: siRabbitmq,
  Docker: siDocker,
  'Docker Compose': siDocker,
  Kubernetes: siKubernetes,
  Git: siGit,
  Sentry: siSentry,
  Steam: siSteam,
  'Claude Code': siClaude,
};

export function hasBrandIcon(name) {
  return Boolean(ICONS[name]);
}

export default function BrandIcon({ name, colored = true, ...props }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      aria-hidden="true"
      // inline style so components like Chip can't override the brand color
      style={colored ? { color: `#${icon.hex}` } : undefined}
      {...props}
    >
      <path d={icon.path} />
    </SvgIcon>
  );
}
