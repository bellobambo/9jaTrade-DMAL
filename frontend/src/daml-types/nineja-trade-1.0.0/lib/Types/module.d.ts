// Generated from ../Types/module.daml

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

export declare type CompanyRole =
  | 'SupplierRole'
  | 'BuyerRole'
  | 'FinancierRole'


export declare const CompanyRole:
  damlTypes.Serializable<CompanyRole> & { readonly keys: CompanyRole[] } & { readonly [e in CompanyRole]: e }

export declare type DisputeType =
  | { tag: 'AmountMismatch'; value: {} }
  | { tag: 'DeliveryIncomplete'; value: {} }
  | { tag: 'QualityIssue'; value: {} }
  | { tag: 'OtherDispute'; value: string }


export declare const DisputeType:
  damlTypes.Serializable<DisputeType>

export declare type DocumentEvidence = {
  docType: string,
  documentHash: string,
  uriOrRef: string,
}

export declare const DocumentEvidence:
  damlTypes.Serializable<DocumentEvidence>

export declare type InvoiceItem = {
  description: string,
  quantity: damlTypes.Numeric,
  unit: string,
  unitPrice: damlTypes.Numeric,
  itemTotal: damlTypes.Numeric,
}

export declare const InvoiceItem:
  damlTypes.Serializable<InvoiceItem>

export declare type InvoiceStatus =
  | 'InvoiceDraft'
  | 'InvoiceSubmitted'
  | 'InvoiceConfirmed'
  | 'InvoiceDelivered'
  | 'InvoiceFinanced'
  | 'InvoiceSettled'
  | 'InvoiceRejected'
  | 'InvoiceDisputed'


export declare const InvoiceStatus:
  damlTypes.Serializable<InvoiceStatus> & { readonly keys: InvoiceStatus[] } & { readonly [e in InvoiceStatus]: e }
