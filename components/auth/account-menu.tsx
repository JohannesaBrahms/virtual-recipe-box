'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import { Divider, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { LogoutButton } from '@/components/auth/logout-button';
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import Avatar from '@/components/avatar';

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
      <Avatar
        open={open}
        tooltip={
          <>
            <Typography color="inherit">{user?.name}</Typography>
            <b>{'Account settings'}</b>
          </>
        }
        onClick={(e) => handleClick(e)}>
        {user?.name?.charAt(0)}
      </Avatar>
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
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaCog fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
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
