// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.

import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchLogIn, dispatchLogOut } from '../dispatchers/auth/AuthDispatcher';

export const useAuthStatus = () => {
  return useSelector((state) => state.auth.status);
};

export const useUser = () => {
  return useSelector((state) => state.auth);
};

export const useLogIn = () => {
  const dispatch = useDispatch();
  return useCallback((authProvider) => dispatch(dispatchLogIn(authProvider)), [dispatch]);
};

export const useLogOut = () => {
  const dispatch = useDispatch();
  return useCallback((data) => dispatch(dispatchLogOut(data)), [dispatch]);
};
