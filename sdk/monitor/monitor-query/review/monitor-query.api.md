## API Report File for "@azure/monitor-query"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { OperationOptions } from '@azure/core-client';
import { PipelineOptions } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

// @public
export type AggregationType = "None" | "Average" | "Count" | "Minimum" | "Maximum" | "Total";

// @public
export interface BatchQuery {
    additionalWorkspaces?: string[];
    includeQueryStatistics?: boolean;
    includeVisualization?: boolean;
    query: string;
    serverTimeoutInSeconds?: number;
    timespan: string;
    workspaceId: string;
}

// @public
export const Durations: {
    readonly last7Days: "P7D";
    readonly last3Days: "P3D";
    readonly last2Days: "P2D";
    readonly lastDay: "P1D";
    readonly lastHour: "PT1H";
    readonly last4Hours: "PT4H";
    readonly last24Hours: "P1D";
    readonly last48Hours: "P2D";
    readonly last30Minutes: "PT30M";
    readonly last5Minutes: "PT5M";
};

// @public
export interface ErrorDetail {
    additionalProperties?: Record<string, unknown>;
    code: string;
    message: string;
    resources?: string[];
    target?: string;
    value?: string;
}

// @public
export interface ErrorInfo {
    additionalProperties?: Record<string, unknown>;
    code: string;
    details?: ErrorDetail[];
    innererror?: ErrorInfo;
    message: string;
}

// @public
export interface GetMetricDefinitionsOptions extends OperationOptions {
    metricNamespace?: string;
}

// @public
export interface GetMetricDefinitionsResult {
    definitions: MetricDefinition[];
}

// @public
export interface GetMetricNamespacesOptions {
    startTime?: string;
}

// @public
export interface GetMetricNamespacesResult {
    namespaces: MetricNamespace[];
}

// @public
export type LogsColumnType = string;

// @public
export class LogsQueryClient {
    constructor(tokenCredential: TokenCredential, options?: LogsQueryClientOptions);
    queryLogs(workspaceId: string, query: string, timespan: string, options?: QueryLogsOptions): Promise<QueryLogsResult>;
    queryLogsBatch(batch: QueryLogsBatch, options?: QueryLogsBatchOptions): Promise<QueryLogsBatchResult>;
}

// @public
export interface LogsQueryClientOptions extends PipelineOptions {
    endpoint?: string;
    scopes?: string | string[];
}

// @public
export interface LogsTable {
    columns: MetricColumn[];
    name: string;
    rows: (Date | string | number | Record<string, unknown> | boolean)[][];
}

// @public
export interface MetadataValue {
    name?: string;
    value?: string;
}

// @public
export interface Metric {
    displayDescription?: string;
    errorCode?: string;
    id: string;
    name: string;
    timeseries: TimeSeriesElement[];
    type: string;
    unit: MetricUnit;
}

// @public
export interface MetricAvailability {
    retention?: string;
    timeGrain?: string;
}

// @public
export type MetricClass = string;

// @public
export interface MetricColumn {
    name?: string;
    type?: LogsColumnType;
}

// @public
export interface MetricDefinition {
    category?: string;
    dimensions?: string[];
    displayDescription?: string;
    id?: string;
    isDimensionRequired?: boolean;
    metricAvailabilities?: MetricAvailability[];
    name?: string;
    primaryAggregationType?: AggregationType;
    resourceId?: string;
    unit?: MetricUnit;
}

// @public
export interface MetricDefinition {
    category?: string;
    dimensions?: string[];
    displayDescription?: string;
    id?: string;
    isDimensionRequired?: boolean;
    metricAvailabilities?: MetricAvailability[];
    metricClass?: MetricClass;
    name?: string;
    namespace?: string;
    primaryAggregationType?: AggregationType;
    resourceId?: string;
    supportedAggregationTypes?: AggregationType[];
    unit?: MetricUnit;
}

// @public
export interface MetricNamespace {
    classification?: NamespaceClassification;
    id?: string;
    name?: string;
    properties?: MetricNamespaceName;
    type?: string;
}

// @public
export interface MetricNamespaceName {
    metricNamespaceName?: string;
}

// @public
export interface MetricsClientOptions extends PipelineOptions {
    endpoint?: string;
}

// @public
export class MetricsQueryClient {
    constructor(tokenCredential: TokenCredential, options?: MetricsClientOptions);
    getMetricDefinitions(resourceUri: string, options?: GetMetricDefinitionsOptions): Promise<GetMetricDefinitionsResult>;
    getMetricNamespaces(resourceUri: string, options?: GetMetricNamespacesOptions): Promise<GetMetricNamespacesResult>;
    queryMetrics(resourceUri: string, timespan: string, options?: QueryMetricsOptions): Promise<QueryMetricsResult>;
}

// @public
export type MetricUnit = string;

// @public
export interface MetricValue {
    average?: number;
    count?: number;
    maximum?: number;
    minimum?: number;
    timeStamp: Date;
    total?: number;
}

// @public
export type NamespaceClassification = string;

// @public
export interface QueryLogsBatch {
    queries: BatchQuery[];
}

// @public
export type QueryLogsBatchOptions = OperationOptions;

// @public
export interface QueryLogsBatchResult {
    results?: {
        id?: string;
        status?: number;
        tables?: LogsTable[];
        error?: ErrorInfo;
        statistics?: any;
        visualization?: any;
    }[];
}

// @public
export interface QueryLogsOptions extends OperationOptions {
    additionalWorkspaces?: string[];
    includeQueryStatistics?: boolean;
    includeVisualization?: boolean;
    serverTimeoutInSeconds?: number;
}

// @public
export interface QueryLogsResult {
    error?: ErrorInfo;
    statistics?: any;
    tables: LogsTable[];
    visualization?: any;
}

// @public
export interface QueryMetricsOptions extends OperationOptions {
    aggregations?: string[];
    filter?: string;
    interval?: string;
    metricNames?: string[];
    metricNamespace?: string;
    orderBy?: string;
    resultType?: ResultType;
    top?: number;
}

// @public
export interface QueryMetricsResult {
    cost?: number;
    interval?: string;
    metrics: Metric[];
    namespace?: string;
    resourceRegion?: string;
    timespan: string;
}

// @public
export type ResultType = "Data" | "Metadata";

// @public
export interface TimeSeriesElement {
    data?: MetricValue[];
    metadataValues?: MetadataValue[];
}


// (No @packageDocumentation comment for this package)

```