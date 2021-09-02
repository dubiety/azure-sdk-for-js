/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { GeneratedClientOptionalParams } from "./models";

export class GeneratedClientContext extends coreClient.ServiceClient {
  instanceUrl: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param instanceUrl The attestation instance base URI, for example https://mytenant.attest.azure.net.
   * @param options The parameter options
   */
  constructor(instanceUrl: string, options?: GeneratedClientOptionalParams) {
    if (instanceUrl === undefined) {
      throw new Error("'instanceUrl' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-attestation/1.0.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{instanceUrl}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.instanceUrl = instanceUrl;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2020-10-01";
  }
}