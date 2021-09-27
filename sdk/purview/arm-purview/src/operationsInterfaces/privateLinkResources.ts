/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByAccountOptionalParams,
  PrivateLinkResourcesGetByGroupIdOptionalParams,
  PrivateLinkResourcesGetByGroupIdResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets a list of privately linkable resources for an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param options The options parameters.
   */
  listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateLinkResourcesListByAccountOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource>;
  /**
   * Gets a privately linkable resources for an account with given group identifier
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param groupId The group identifier.
   * @param options The options parameters.
   */
  getByGroupId(
    resourceGroupName: string,
    accountName: string,
    groupId: string,
    options?: PrivateLinkResourcesGetByGroupIdOptionalParams
  ): Promise<PrivateLinkResourcesGetByGroupIdResponse>;
}