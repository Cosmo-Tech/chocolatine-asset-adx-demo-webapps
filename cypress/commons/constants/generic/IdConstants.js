// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.

export const GENERIC_SELECTORS = {
  login: {
    microsoftLoginButton: '[data-cy=sign-in-with-microsoft-button]',
  },
  userInfoMenu: {
    button: '[data-cy=user-profile-menu]',
    popover: '[data-cy=main-menu]',
    logout: '[data-cy=logout]',
    language: {
      change: '[data-cy=change-language]',
      en: '[data-cy=set-lang-en]',
      fr: '[data-cy=set-lang-fr]',
    },
  },
  helpMenu: {
    menu: '[data-cy=help-menu]',
    aboutButton: '[data-cy=about-button]',
    aboutDialog: '[data-cy=about-dialog]',
    aboutDialogCloseButton: '[data-cy=about-dialog-close-button]',
    support: '[data-cy=support-link]',
    documentation: '[data-cy=documentation-link]',
  },
  instance: {
    tabName: '[data-cy="tabs.instance.key"]',
    cytovizContainer: '[data-cy="cytoviz-container"]',
    cytovizLoading: '[data-cy="cytoviz-loading-container"]',
    cytovizPlaceholder: '[data-cy="cytoviz-placeholder"]',
    cytovizCytoscapeScene: '[id="cytoviz-cytoscape-scene"]',
    cytovizOpenDrawerButton: '[data-cy="cytoviz-open-drawer-button"]',
    cytovizCloseDrawerButton: '[data-cy="cytoviz-close-drawer-button"]',
    cytovizDrawer: '[data-cy="cytoviz-drawer"]',
    cytovizDrawerDetailsTabButton: '[data-cy="cytoviz-drawer-details-tab-button"]',
    cytovizDrawerSettingsTabButton: '[data-cy="cytoviz-drawer-settings-tab-button"]',
    cytovizDrawerDetailsTabContent: '[data-cy="cytoviz-drawer-details-tab-content"]',
    cytovizDrawerSettingsTabContent: '[data-cy="cytoviz-drawer-settings-tab-content"]',
    cytovizLayoutSelector: '[data-cy="cytoviz-layout-selector"]',
    cytovizLayoutSelectOption: '[data-cy="cytoviz-layout-item-$LAYOUTNAME"]',
    cytovizCompactModeCheckbox: '[data-cy="cytoviz-compact-mode-checkbox"]',
    cytovizSpacingFactorSlider: '[data-cy="cytoviz-spacing-factor-slider"]',
    cytovizZoomLimitsSlider: '[data-cy="cytoviz-zoom-limits-slider"]',
    cytovizElementAttributeByName: '[data-cy="cytoviz-element-attribute-$ATTRIBUTENAME"]',
    cytovizElementAttributeName: '[data-cy="cytoviz-element-attribute-name"]',
    cytovizElementAttributeValue: '[data-cy="cytoviz-element-attribute-value"]',
  },
  scenario: {
    view: '[data-cy=scenario-view]',
    tabName: '[data-cy="tabs.scenario.key"]',
    dashboard: {
      placeholder: '[data-cy=dashboard-placeholder]',
    },
    selectInput: '[data-cy=scenario-select-input]',
    scenarioSelectOption: 'span[data-testid=option-$SCENARIOID]',
    parameters: {
      tabs: '[data-cy=scenario-parameters-tabs]',
      accordionSummary: '[data-cy=scenario-params-accordion-summary]',
      editButton: '[data-cy=edit-parameters-button]',
      launchButton: '[data-cy=launch-scenario-button]',
      updateAndLaunchButton: '[data-cy=update-and-launch-scenario]',
      dialogLaunch: {
        dialogTitle: '[data-cy=launch-confirm-dialog-title]',
        confirmButton: '[data-cy=launch-confirm-button]',
        cancelButton: '[data-cy=launch-cancel-button]',
        dontAskAgainCheckbox: '[data-cy=launch-dontAskAgain-checkbox]',
      },
      discardButton: '[data-cy=discard-button]',
      dialogDiscardButton: '[data-cy=discard-changes-button2]',
      noParametersPlaceholder: '[data-cy=no-parameters-placeholder]',
    },
    ownerName: '[data-cy=scenario-owner-name]',
    creationDate: '[data-cy=scenario-creation-date]',
    scenarioStatus: {
      created: '[data-cy=scenario-status-created]',
      running: '[data-cy=scenario-status-running]',
      successful: '[data-cy=scenario-status-successful]',
      failed: '[data-cy=scenario-status-failed]',
      unknown: '[data-cy=scenario-status-unknown]',
    },
    validationStatusLoadingSpinner: '[data-cy=scenario-validation-status-loading-spinner]',
    scenarioViewRedirect: '[data-cy=scenario-view-redirect]',
    validationStatusChip: '[data-cy=scenario-validation-status]',
    validationStatusChipDeleteIcon: 'svg',
    validateButton: '[data-cy=validate-scenario-button]',
    rejectButton: '[data-cy=reject-scenario-button]',
    runTemplateName: '[data-cy=run-template-name]',
    createButton: '[data-cy=create-scenario-button]',
    createDialog: {
      dialog: '[data-cy=create-scenario-dialog]',
      masterCheckbox: 'input[id=isScenarioMaster]',
      nameTextfield: '[data-cy=create-scenario-dialog-name-textfield]',
      errorLabel: '[id=scenarioName-helper-text]',
      datasetSelect: '[data-cy=create-scenario-dialog-dataset-select]',
      datasetSelectorOptions: '[data-cy=create-scenario-dialog-dataset-select-options]',
      typeSelect: '[data-cy=create-scenario-dialog-type-select]',
      typeSelectorOptions: '[data-cy=create-scenario-dialog-type-select-options]',
      submitButton: '[data-cy=create-scenario-dialog-submit-button]',
    },
    manager: {
      view: '[data-cy=scenario-manager-view]',
      tabName: '[data-cy="tabs.scenariomanager.key"]',
      confirmDeleteDialog: '[data-cy=confirm-scenario-delete-dialog]',
      search: '[data-cy=scenario-manager-search-field]',
      button: {
        delete: '[data-cy=scenario-delete-button]',
      },
      scenarioAccordion: '[data-cy=scenario-accordion-$SCENARIOID]',
      scenarioAccordionExpandButton: '[data-cy=expand-accordion-button]',
      scenarioDataset: '[data-cy=scenario-datasets]',
      editableLabel: '[data-cy=editable-label]',
    },
  },
  genericComponents: {
    uploadFile: {
      browseButtonInput: 'input[type=file]',
      downloadButton: '[data-cy=download-button]',
      deleteButton: '[data-cy=delete-button]',
      fileName: '[data-cy=file-name]',
    },
    table: {
      label: '[data-cy=label]',
      grid: '[data-cy=grid]',
      errorsPanel: '[data-cy=errors-panel]',
      errorsHeader: '[data-cy=errors-header]',
      errorAccordions: '[data-cy^=error-accordion-]',
      errorAccordionByIndex: '[data-cy=error-accordion-$ERRORINDEX]',
      errorSummary: '[data-cy=error-summary]',
      errorLoc: '[data-cy=error-loc]',
      importButton: '[data-cy=import-file-button]',
      importButtonInput: 'input[type=file]',
      csvExportButton: '[data-cy=export-csv-button]',
      header: '[class=ag-header-viewport]',
      colByName: '[col-id=$COLNAME]',
      rowsContainer: '[class=ag-center-cols-container]',
      row: '.ag-row',
      rowByIndex: '[row-index="$ROWINDEX"]',
    },
    basicEnumInput: {
      input: 'input',
      textField: '[data-cy=text_field]',
    },
    basicTextInput: {
      input: 'input',
    },
    basicNumberInput: {
      input: 'input',
    },
    errorBanner: {
      banner: '[data-cy=error-banner]',
      errorDetail: '[data-cy=error-detail]',
      errorComment: '[data-cy=error-comment]',
      dismissErrorButton: '[data-cy=dismiss-error-button]',
    },
    hierarchicalComboBox: {
      selector: '[data-cy=scenario-selector]',
      selectorOptions: '[data-cy=scenario-selector-options]',
    },
  },
};
