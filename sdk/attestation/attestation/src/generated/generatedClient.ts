/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PolicyImpl,
  PolicyCertificatesImpl,
  AttestationImpl,
  SigningCertificatesImpl,
  MetadataConfigurationImpl
} from "./operations";
import {
  Policy,
  PolicyCertificates,
  Attestation,
  SigningCertificates,
  MetadataConfiguration
} from "./operationsInterfaces";
import { GeneratedClientContext } from "./generatedClientContext";
import { GeneratedClientOptionalParams } from "./models";

export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param instanceUrl The attestation instance base URI, for example https://mytenant.attest.azure.net.
   * @param options The parameter options
   */
  constructor(instanceUrl: string, options?: GeneratedClientOptionalParams) {
    super(instanceUrl, options);
    this.policy = new PolicyImpl(this);
    this.policyCertificates = new PolicyCertificatesImpl(this);
    this.attestation = new AttestationImpl(this);
    this.signingCertificates = new SigningCertificatesImpl(this);
    this.metadataConfiguration = new MetadataConfigurationImpl(this);
  }

  policy: Policy;
  policyCertificates: PolicyCertificates;
  attestation: Attestation;
  signingCertificates: SigningCertificates;
  metadataConfiguration: MetadataConfiguration;
}