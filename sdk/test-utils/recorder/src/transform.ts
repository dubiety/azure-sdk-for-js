// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createPipelineRequest, HttpClient } from "@azure/core-rest-pipeline";
import { paths } from "./utils/paths";
import { RecorderError } from "./utils/utils";

interface ApplyCondition {
  uriRegex: string;
}

type TransformType<TType extends string, TParams = undefined> = {
  type: TType;
  applyCondition?: ApplyCondition;
} & (TParams extends undefined ? unknown : { params: TParams });

interface HeaderTransformParams {
  key: string;
  value: string;
}

export type Transform =
  | TransformType<"ApiVersionTransform">
  | TransformType<"ClientIdTransform">
  | TransformType<"StorageRequestIdTransform">
  | TransformType<"HeaderTransform", HeaderTransformParams>;

export async function addTransform(
  recorderUrl: string,
  httpClient: HttpClient,
  transform: Transform,
  recordingId: string
): Promise<void> {
  const url = `${recorderUrl}${paths.admin}${paths.addTransform}`;

  const request = createPipelineRequest({ url, method: "POST", allowInsecureConnection: true });
  request.headers.set("x-abstraction-identifier", transform.type);
  if (recordingId) {
    request.headers.set("x-recording-id", recordingId);
  }

  request.body = JSON.stringify({
    ...(transform.applyCondition ? { applyCondition: transform.applyCondition } : {}),
    ...((transform as { params?: Record<string, unknown> }).params ?? {}),
  });

  const { status, bodyAsText } = await httpClient.sendRequest(request);

  if (status < 200 || status > 299) {
    throw new RecorderError(`addTransform failed: ${bodyAsText}`, status);
  }
}
