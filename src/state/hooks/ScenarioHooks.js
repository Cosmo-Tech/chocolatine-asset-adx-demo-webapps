// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.

import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  dispatchSetScenarioValidationStatus,
  dispatchFindScenarioById,
  dispatchCreateScenario,
  dispatchSetCurrentScenario,
  dispatchUpdateAndLaunchScenario,
  dispatchLaunchScenario,
} from '../dispatchers/scenario/ScenarioDispatcher';

export const useScenarioList = () => {
  return useSelector((state) => state.scenario.list);
};

export const useCurrentScenario = () => {
  return useSelector((state) => state.scenario.current);
};

export const useSetScenarioValidationStatus = () => {
  const dispatch = useDispatch();
  return useCallback(
    (scenarioId, validationStatus) => dispatch(dispatchSetScenarioValidationStatus(scenarioId, validationStatus)),
    [dispatch]
  );
};

export const useFindScenarioById = () => {
  const dispatch = useDispatch();
  return useCallback(
    (workspaceId, scenarioId) => dispatch(dispatchFindScenarioById(workspaceId, scenarioId)),
    [dispatch]
  );
};

export const useCreateScenario = () => {
  const dispatch = useDispatch();
  return useCallback((workspaceId, scenario) => dispatch(dispatchCreateScenario(workspaceId, scenario)), [dispatch]);
};

export const useUpdateCurrentScenario = () => {
  const dispatch = useDispatch();
  return useCallback((scenario) => dispatch(dispatchSetCurrentScenario(scenario)), [dispatch]);
};

export const useUpdateAndLaunchScenario = () => {
  const dispatch = useDispatch();
  return useCallback(
    (workspaceId, scenarioId, scenarioParameters) =>
      dispatch(dispatchUpdateAndLaunchScenario(workspaceId, scenarioId, scenarioParameters)),
    [dispatch]
  );
};

export const useLaunchScenario = () => {
  const dispatch = useDispatch();
  return useCallback(
    (workspaceId, scenarioId) => dispatch(dispatchLaunchScenario(workspaceId, scenarioId)),
    [dispatch]
  );
};
