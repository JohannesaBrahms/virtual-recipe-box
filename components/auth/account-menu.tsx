'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { LogoutButton } from '@/components/auth/logout-button';
import { FaSignOutAlt } from 'react-icons/fa';

export const AccountMenu = () => {
  const user = useCurrentUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <Avatar sx={{ width: 32, height: 32 }}>{user?.name?.charAt(0)}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <LogoutButton>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <FaSignOutAlt fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </LogoutButton>
      </Menu>
    </>
  );
};
