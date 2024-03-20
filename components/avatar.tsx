'use client';

import { Box, IconButton, Avatar as MuiAvatar, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';

interface AvatarProps {
  imageSrc?: string | null | undefined;
  tooltip?: React.ReactNode;
  tooltipPosition?: 'top-end' | 'bottom-start';
  children?: React.ReactNode;
  open?: Boolean;
  onClick?: (e: any) => void;
}

export default function Avatar({
  imageSrc,
  tooltip,
  tooltipPosition = 'bottom-start',
  children,
  open,
  onClick,
}: AvatarProps) {
  return (
    <Box>
      <Tooltip title={tooltip} placement={tooltipPosition}>
        <IconButton
          onClick={onClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
          <MuiAvatar src={imageSrc || ''} sx={{ width: 32, height: 32, bgcolor: red[500] }}>
            {children}
          </MuiAvatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
