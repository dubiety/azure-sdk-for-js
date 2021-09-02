/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureChangeAnalysisManagementClientContext } from "./azureChangeAnalysisManagementClientContext";


class AzureChangeAnalysisManagementClient extends AzureChangeAnalysisManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  resourceChanges: operations.ResourceChanges;
  changes: operations.Changes;

  /**
   * Initializes a new instance of the AzureChangeAnalysisManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.AzureChangeAnalysisManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.resourceChanges = new operations.ResourceChanges(this);
    this.changes = new operations.Changes(this);
  }
}

// Operation Specifications

export {
  AzureChangeAnalysisManagementClient,
  AzureChangeAnalysisManagementClientContext,
  Models as AzureChangeAnalysisManagementModels,
  Mappers as AzureChangeAnalysisManagementMappers
};
export * from "./operations";