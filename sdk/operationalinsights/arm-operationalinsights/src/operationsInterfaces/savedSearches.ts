/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SavedSearchesDeleteOptionalParams,
  SavedSearch,
  SavedSearchesCreateOrUpdateOptionalParams,
  SavedSearchesCreateOrUpdateResponse,
  SavedSearchesGetOptionalParams,
  SavedSearchesGetResponse,
  SavedSearchesListByWorkspaceOptionalParams,
  SavedSearchesListByWorkspaceResponse
} from "../models";

/** Interface representing a SavedSearches. */
export interface SavedSearches {
  /**
   * Deletes the specified saved search in a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    savedSearchId: string,
    options?: SavedSearchesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Creates or updates a saved search for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param parameters The parameters required to save a search.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    savedSearchId: string,
    parameters: SavedSearch,
    options?: SavedSearchesCreateOrUpdateOptionalParams
  ): Promise<SavedSearchesCreateOrUpdateResponse>;
  /**
   * Gets the specified saved search for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    savedSearchId: string,
    options?: SavedSearchesGetOptionalParams
  ): Promise<SavedSearchesGetResponse>;
  /**
   * Gets the saved searches for a given Log Analytics Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: SavedSearchesListByWorkspaceOptionalParams
  ): Promise<SavedSearchesListByWorkspaceResponse>;
}