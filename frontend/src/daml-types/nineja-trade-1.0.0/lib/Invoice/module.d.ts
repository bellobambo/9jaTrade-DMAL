// Generated from ../Invoice/module.daml

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

import * as pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4 from '@daml.js/daml-prim-DA-Types-1.0.0';
import * as pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 from '@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0';

import * as Types from '../Types/module';

export declare type AttachDocument = {
  newDoc: Types.DocumentEvidence,
}

export declare const AttachDocument:
  damlTypes.Serializable<AttachDocument>

export declare type BuyerConfirmation = {
  invoiceId: string,
  supplier: damlTypes.Party,
  buyer: damlTypes.Party,
  operator: damlTypes.Party,
  amount: damlTypes.Numeric,
  currency: string,
  dueDate: damlTypes.Time,
  confirmedAt: damlTypes.Time,
  confirmationNotes: string,
}

export declare interface BuyerConfirmationInterface {
  Archive: 
    damlTypes.Choice<BuyerConfirmation, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<BuyerConfirmation, undefined>>;
}
export declare const BuyerConfirmation:
  damlTypes.Template<BuyerConfirmation, undefined, '#nineja-trade:Invoice:BuyerConfirmation'> &
  damlTypes.ToInterface<BuyerConfirmation, never> &
  BuyerConfirmationInterface

export declare type CloseInvoiceAsSettled = {
}

export declare const CloseInvoiceAsSettled:
  damlTypes.Serializable<CloseInvoiceAsSettled>

export declare type ConfirmDelivery = {
  fulfillmentNotes: string,
  deliveryEvidence: Types.DocumentEvidence,
}

export declare const ConfirmDelivery:
  damlTypes.Serializable<ConfirmDelivery>

export declare type ConfirmInvoice = {
  confirmationNotes: string,
}

export declare const ConfirmInvoice:
  damlTypes.Serializable<ConfirmInvoice>

export declare type DeliveryConfirmation = {
  invoiceId: string,
  supplier: damlTypes.Party,
  buyer: damlTypes.Party,
  operator: damlTypes.Party,
  deliveredAt: damlTypes.Time,
  fulfillmentNotes: string,
  evidence: Types.DocumentEvidence,
}

export declare interface DeliveryConfirmationInterface {
  Archive: 
    damlTypes.Choice<DeliveryConfirmation, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<DeliveryConfirmation, undefined>>;
}
export declare const DeliveryConfirmation:
  damlTypes.Template<DeliveryConfirmation, undefined, '#nineja-trade:Invoice:DeliveryConfirmation'> &
  damlTypes.ToInterface<DeliveryConfirmation, never> &
  DeliveryConfirmationInterface

export declare type Invoice = {
  invoiceId: string,
  supplier: damlTypes.Party,
  buyer: damlTypes.Party,
  operator: damlTypes.Party,
  amount: damlTypes.Numeric,
  currency: string,
  issueDate: damlTypes.Time,
  dueDate: damlTypes.Time,
  description: string,
  items: Types.InvoiceItem[],
  supportingDocuments: Types.DocumentEvidence[],
  status: Types.InvoiceStatus,
  correctionNotes: damlTypes.Optional<string>,
}

export declare interface InvoiceInterface {
  Archive: 
    damlTypes.Choice<Invoice, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  AttachDocument: 
    damlTypes.Choice<Invoice, AttachDocument, damlTypes.ContractId<Invoice>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  CloseInvoiceAsSettled: 
    damlTypes.Choice<Invoice, CloseInvoiceAsSettled, damlTypes.ContractId<Invoice>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  ConfirmDelivery: 
    damlTypes.Choice<Invoice, ConfirmDelivery, pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2<damlTypes.ContractId<Invoice>, damlTypes.ContractId<DeliveryConfirmation>>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  ConfirmInvoice: 
    damlTypes.Choice<Invoice, ConfirmInvoice, pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2<damlTypes.ContractId<Invoice>, damlTypes.ContractId<BuyerConfirmation>>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  LockAsFinanced: 
    damlTypes.Choice<Invoice, LockAsFinanced, damlTypes.ContractId<Invoice>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  RaiseDispute: 
    damlTypes.Choice<Invoice, RaiseDispute, pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2<damlTypes.ContractId<Invoice>, damlTypes.ContractId<InvoiceDispute>>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  RejectInvoice: 
    damlTypes.Choice<Invoice, RejectInvoice, damlTypes.ContractId<Invoice>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  RequestCorrection: 
    damlTypes.Choice<Invoice, RequestCorrection, damlTypes.ContractId<Invoice>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
  SubmitForReview: 
    damlTypes.Choice<Invoice, SubmitForReview, damlTypes.ContractId<Invoice>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<Invoice, undefined>>;
}
export declare const Invoice:
  damlTypes.Template<Invoice, undefined, '#nineja-trade:Invoice:Invoice'> &
  damlTypes.ToInterface<Invoice, never> &
  InvoiceInterface

export declare type InvoiceDispute = {
  invoiceId: string,
  initiator: damlTypes.Party,
  counterparty: damlTypes.Party,
  operator: damlTypes.Party,
  disputeType: Types.DisputeType,
  evidenceNotes: string,
  resolved: boolean,
}

export declare interface InvoiceDisputeInterface {
  Archive: 
    damlTypes.Choice<InvoiceDispute, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<InvoiceDispute, undefined>>;
  ResolveDispute: 
    damlTypes.Choice<InvoiceDispute, ResolveDispute, damlTypes.ContractId<InvoiceDispute>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<InvoiceDispute, undefined>>;
}
export declare const InvoiceDispute:
  damlTypes.Template<InvoiceDispute, undefined, '#nineja-trade:Invoice:InvoiceDispute'> &
  damlTypes.ToInterface<InvoiceDispute, never> &
  InvoiceDisputeInterface

export declare type LockAsFinanced = {
}

export declare const LockAsFinanced:
  damlTypes.Serializable<LockAsFinanced>

export declare type RaiseDispute = {
  initiator: damlTypes.Party,
  disputeType: Types.DisputeType,
  evidenceNotes: string,
}

export declare const RaiseDispute:
  damlTypes.Serializable<RaiseDispute>

export declare type RejectInvoice = {
  rejectionReason: string,
}

export declare const RejectInvoice:
  damlTypes.Serializable<RejectInvoice>

export declare type RequestCorrection = {
  reason: string,
}

export declare const RequestCorrection:
  damlTypes.Serializable<RequestCorrection>

export declare type ResolveDispute = {
  resolutionRuling: string,
}

export declare const ResolveDispute:
  damlTypes.Serializable<ResolveDispute>

export declare type SubmitForReview = {
}

export declare const SubmitForReview:
  damlTypes.Serializable<SubmitForReview>
