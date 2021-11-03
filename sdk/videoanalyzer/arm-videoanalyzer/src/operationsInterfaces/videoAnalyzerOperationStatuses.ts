/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VideoAnalyzerOperationStatusesGetOptionalParams,
  VideoAnalyzerOperationStatusesGetResponse
} from "../models";

/** Interface representing a VideoAnalyzerOperationStatuses. */
export interface VideoAnalyzerOperationStatuses {
  /**
   * Get video analyzer operation status.
   * @param locationName Location name.
   * @param operationId Operation Id.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    operationId: string,
    options?: VideoAnalyzerOperationStatusesGetOptionalParams
  ): Promise<VideoAnalyzerOperationStatusesGetResponse>;
}