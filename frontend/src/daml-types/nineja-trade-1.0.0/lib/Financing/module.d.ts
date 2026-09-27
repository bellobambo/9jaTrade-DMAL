// Generated from ../Financing/module.daml

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

import * as pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4 from '@daml.js/daml-prim-DA-Types-1.0.0';
import * as pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 from '@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0';

import * as Invoice from '../Invoice/module';

export declare type AcceptFinancingOffer = {
  agreementId: string,
}

export declare const AcceptFinancingOffer:
  damlTypes.Serializable<AcceptFinancingOffer>

export declare type CancelFinancingRequest = {
}

export declare const CancelFinancingRequest:
  damlTypes.Serializable<CancelFinancingRequest>

export declare type CloseBidNotice = {
}

export declare const CloseBidNotice:
  damlTypes.Serializable<CloseBidNotice>

export declare type ExpireOffer = {
}

export declare const ExpireOffer:
  damlTypes.Serializable<ExpireOffer>

export declare type FinancingAgreement = {
  agreementId: string,
  invoiceId: string,
  supplier: damlTypes.Party,
  buyer: damlTypes.Party,
  financier: damlTypes.Party,
  operator: damlTypes.Party,
  invoiceAmount: damlTypes.Numeric,
  fundingAmount: damlTypes.Numeric,
  financingFee: damlTypes.Numeric,
  totalRepaymentToFinancier: damlTypes.Numeric,
  supplierBalanceDue: damlTypes.Numeric,
  currency: string,
  dueDate: damlTypes.Time,
  isFunded: boolean,
  isSettled: boolean,
}

export declare interface FinancingAgreementInterface {
  Archive: 
    damlTypes.Choice<FinancingAgreement, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingAgreement, undefined>>;
  MarkAsFunded: 
    damlTypes.Choice<FinancingAgreement, MarkAsFunded, damlTypes.ContractId<FinancingAgreement>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingAgreement, undefined>>;
  SettleFinancing: 
    damlTypes.Choice<FinancingAgreement, SettleFinancing, pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2<damlTypes.ContractId<SettlementRecord>, damlTypes.ContractId<FinancingAgreement>>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingAgreement, undefined>>;
}
export declare const FinancingAgreement:
  damlTypes.Template<FinancingAgreement, undefined, '#nineja-trade:Financing:FinancingAgreement'> &
  damlTypes.ToInterface<FinancingAgreement, never> &
  FinancingAgreementInterface

export declare type FinancingBidNotice = {
  requestId: string,
  invoiceId: string,
  offerId: string,
  financier: damlTypes.Party,
  supplier: damlTypes.Party,
  eligibleFinanciers: damlTypes.Party[],
  operator: damlTypes.Party,
  submittedAt: damlTypes.Time,
}

export declare interface FinancingBidNoticeInterface {
  Archive: 
    damlTypes.Choice<FinancingBidNotice, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingBidNotice, undefined>>;
  CloseBidNotice: 
    damlTypes.Choice<FinancingBidNotice, CloseBidNotice, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingBidNotice, undefined>>;
  WithdrawBidNotice: 
    damlTypes.Choice<FinancingBidNotice, WithdrawBidNotice, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingBidNotice, undefined>>;
}
export declare const FinancingBidNotice:
  damlTypes.Template<FinancingBidNotice, undefined, '#nineja-trade:Financing:FinancingBidNotice'> &
  damlTypes.ToInterface<FinancingBidNotice, never> &
  FinancingBidNoticeInterface

export declare type FinancingOffer = {
  offerId: string,
  requestId: string,
  invoiceId: string,
  invoiceCid: damlTypes.ContractId<Invoice.Invoice>,
  financier: damlTypes.Party,
  supplier: damlTypes.Party,
  buyer: damlTypes.Party,
  operator: damlTypes.Party,
  invoiceAmount: damlTypes.Numeric,
  fundingAmount: damlTypes.Numeric,
  financingFee: damlTypes.Numeric,
  totalRepayment: damlTypes.Numeric,
  currency: string,
  termDays: damlTypes.Int,
  offerExpiry: damlTypes.Time,
  invoiceDueDate: damlTypes.Time,
  conditions: string,
}

export declare interface FinancingOfferInterface {
  AcceptFinancingOffer: 
    damlTypes.Choice<FinancingOffer, AcceptFinancingOffer, pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2<damlTypes.ContractId<FinancingAgreement>, damlTypes.ContractId<Invoice.Invoice>>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingOffer, undefined>>;
  Archive: 
    damlTypes.Choice<FinancingOffer, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingOffer, undefined>>;
  ExpireOffer: 
    damlTypes.Choice<FinancingOffer, ExpireOffer, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingOffer, undefined>>;
  RejectFinancingOffer: 
    damlTypes.Choice<FinancingOffer, RejectFinancingOffer, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingOffer, undefined>>;
}
export declare const FinancingOffer:
  damlTypes.Template<FinancingOffer, undefined, '#nineja-trade:Financing:FinancingOffer'> &
  damlTypes.ToInterface<FinancingOffer, never> &
  FinancingOfferInterface

export declare type FinancingRequest = {
  requestId: string,
  invoiceId: string,
  invoiceCid: damlTypes.ContractId<Invoice.Invoice>,
  supplier: damlTypes.Party,
  buyer: damlTypes.Party,
  operator: damlTypes.Party,
  eligibleFinanciers: damlTypes.Party[],
  invoiceAmount: damlTypes.Numeric,
  maxFundingRequested: damlTypes.Numeric,
  currency: string,
  dueDate: damlTypes.Time,
}

export declare interface FinancingRequestInterface {
  Archive: 
    damlTypes.Choice<FinancingRequest, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingRequest, undefined>>;
  CancelFinancingRequest: 
    damlTypes.Choice<FinancingRequest, CancelFinancingRequest, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingRequest, undefined>>;
  MakeFinancingOffer: 
    damlTypes.Choice<FinancingRequest, MakeFinancingOffer, pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2<damlTypes.ContractId<FinancingOffer>, damlTypes.ContractId<FinancingBidNotice>>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<FinancingRequest, undefined>>;
}
export declare const FinancingRequest:
  damlTypes.Template<FinancingRequest, undefined, '#nineja-trade:Financing:FinancingRequest'> &
  damlTypes.ToInterface<FinancingRequest, never> &
  FinancingRequestInterface

export declare type MakeFinancingOffer = {
  offerId: string,
  financier: damlTypes.Party,
  fundingAmount: damlTypes.Numeric,
  financingFee: damlTypes.Numeric,
  termDays: damlTypes.Int,
  offerExpiry: damlTypes.Time,
  conditions: string,
}

export declare const MakeFinancingOffer:
  damlTypes.Serializable<MakeFinancingOffer>

export declare type MarkAsFunded = {
}

export declare const MarkAsFunded:
  damlTypes.Serializable<MarkAsFunded>

export declare type RejectFinancingOffer = {
}

export declare const RejectFinancingOffer:
  damlTypes.Serializable<RejectFinancingOffer>

export declare type SettleFinancing = {
  settlementAmount: damlTypes.Numeric,
  paymentReference: string,
}

export declare const SettleFinancing:
  damlTypes.Serializable<SettleFinancing>

export declare type SettlementRecord = {
  agreementId: string,
  invoiceId: string,
  supplier: damlTypes.Party,
  buyer: damlTypes.Party,
  financier: damlTypes.Party,
  operator: damlTypes.Party,
  totalSettledAmount: damlTypes.Numeric,
  financierPayout: damlTypes.Numeric,
  supplierRemainderPayout: damlTypes.Numeric,
  currency: string,
  settledAt: damlTypes.Time,
  paymentReference: string,
}

export declare interface SettlementRecordInterface {
  Archive: 
    damlTypes.Choice<SettlementRecord, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<SettlementRecord, undefined>>;
}
export declare const SettlementRecord:
  damlTypes.Template<SettlementRecord, undefined, '#nineja-trade:Financing:SettlementRecord'> &
  damlTypes.ToInterface<SettlementRecord, never> &
  SettlementRecordInterface

export declare type WithdrawBidNotice = {
}

export declare const WithdrawBidNotice:
  damlTypes.Serializable<WithdrawBidNotice>
