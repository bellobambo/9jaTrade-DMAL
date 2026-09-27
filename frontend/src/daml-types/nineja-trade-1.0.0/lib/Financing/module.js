"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });

/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');

var pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4 = require('@daml.js/daml-prim-DA-Types-1.0.0');
var pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 = require('@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0');

var Invoice = require('../Invoice/module');

exports.AcceptFinancingOffer = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      agreementId: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      agreementId: damlTypes.Text.encode(__typed__.agreementId),
    };
  },
};

exports.CancelFinancingRequest = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.CloseBidNotice = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.ExpireOffer = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.FinancingAgreement = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Financing:FinancingAgreement',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Financing:FinancingAgreement',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        agreementId: damlTypes.Text.decoder,
        invoiceId: damlTypes.Text.decoder,
        supplier: damlTypes.Party.decoder,
        buyer: damlTypes.Party.decoder,
        financier: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        invoiceAmount: damlTypes.Numeric(10).decoder,
        fundingAmount: damlTypes.Numeric(10).decoder,
        financingFee: damlTypes.Numeric(10).decoder,
        totalRepaymentToFinancier: damlTypes.Numeric(10).decoder,
        supplierBalanceDue: damlTypes.Numeric(10).decoder,
        currency: damlTypes.Text.decoder,
        dueDate: damlTypes.Time.decoder,
        isFunded: damlTypes.Bool.decoder,
        isSettled: damlTypes.Bool.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        agreementId: damlTypes.Text.encode(__typed__.agreementId),
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        buyer: damlTypes.Party.encode(__typed__.buyer),
        financier: damlTypes.Party.encode(__typed__.financier),
        operator: damlTypes.Party.encode(__typed__.operator),
        invoiceAmount: damlTypes.Numeric(10).encode(__typed__.invoiceAmount),
        fundingAmount: damlTypes.Numeric(10).encode(__typed__.fundingAmount),
        financingFee: damlTypes.Numeric(10).encode(__typed__.financingFee),
        totalRepaymentToFinancier: damlTypes.Numeric(10).encode(__typed__.totalRepaymentToFinancier),
        supplierBalanceDue: damlTypes.Numeric(10).encode(__typed__.supplierBalanceDue),
        currency: damlTypes.Text.encode(__typed__.currency),
        dueDate: damlTypes.Time.encode(__typed__.dueDate),
        isFunded: damlTypes.Bool.encode(__typed__.isFunded),
        isSettled: damlTypes.Bool.encode(__typed__.isSettled),
      };
    },
    Archive: {
      template: function () { return exports.FinancingAgreement; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder;
      }),
      argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    MarkAsFunded: {
      template: function () { return exports.FinancingAgreement; },
      choiceName: 'MarkAsFunded',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.MarkAsFunded.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.MarkAsFunded.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.FinancingAgreement).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.FinancingAgreement).encode(__typed__); },
    },
    SettleFinancing: {
      template: function () { return exports.FinancingAgreement; },
      choiceName: 'SettleFinancing',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.SettleFinancing.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.SettleFinancing.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.SettlementRecord), damlTypes.ContractId(exports.FinancingAgreement)).decoder;
      }),
      resultEncode: function (__typed__) { return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.SettlementRecord), damlTypes.ContractId(exports.FinancingAgreement)).encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.FinancingAgreement, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.FinancingBidNotice = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Financing:FinancingBidNotice',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Financing:FinancingBidNotice',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        requestId: damlTypes.Text.decoder,
        invoiceId: damlTypes.Text.decoder,
        offerId: damlTypes.Text.decoder,
        financier: damlTypes.Party.decoder,
        supplier: damlTypes.Party.decoder,
        eligibleFinanciers: damlTypes.List(damlTypes.Party).decoder,
        operator: damlTypes.Party.decoder,
        submittedAt: damlTypes.Time.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        requestId: damlTypes.Text.encode(__typed__.requestId),
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        offerId: damlTypes.Text.encode(__typed__.offerId),
        financier: damlTypes.Party.encode(__typed__.financier),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        eligibleFinanciers: damlTypes.List(damlTypes.Party).encode(__typed__.eligibleFinanciers),
        operator: damlTypes.Party.encode(__typed__.operator),
        submittedAt: damlTypes.Time.encode(__typed__.submittedAt),
      };
    },
    Archive: {
      template: function () { return exports.FinancingBidNotice; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder;
      }),
      argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    CloseBidNotice: {
      template: function () { return exports.FinancingBidNotice; },
      choiceName: 'CloseBidNotice',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.CloseBidNotice.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.CloseBidNotice.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    WithdrawBidNotice: {
      template: function () { return exports.FinancingBidNotice; },
      choiceName: 'WithdrawBidNotice',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.WithdrawBidNotice.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.WithdrawBidNotice.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.FinancingBidNotice, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.FinancingOffer = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Financing:FinancingOffer',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Financing:FinancingOffer',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        offerId: damlTypes.Text.decoder,
        requestId: damlTypes.Text.decoder,
        invoiceId: damlTypes.Text.decoder,
        invoiceCid: damlTypes.ContractId(Invoice.Invoice).decoder,
        financier: damlTypes.Party.decoder,
        supplier: damlTypes.Party.decoder,
        buyer: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        invoiceAmount: damlTypes.Numeric(10).decoder,
        fundingAmount: damlTypes.Numeric(10).decoder,
        financingFee: damlTypes.Numeric(10).decoder,
        totalRepayment: damlTypes.Numeric(10).decoder,
        currency: damlTypes.Text.decoder,
        termDays: damlTypes.Int.decoder,
        offerExpiry: damlTypes.Time.decoder,
        invoiceDueDate: damlTypes.Time.decoder,
        conditions: damlTypes.Text.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        offerId: damlTypes.Text.encode(__typed__.offerId),
        requestId: damlTypes.Text.encode(__typed__.requestId),
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        invoiceCid: damlTypes.ContractId(Invoice.Invoice).encode(__typed__.invoiceCid),
        financier: damlTypes.Party.encode(__typed__.financier),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        buyer: damlTypes.Party.encode(__typed__.buyer),
        operator: damlTypes.Party.encode(__typed__.operator),
        invoiceAmount: damlTypes.Numeric(10).encode(__typed__.invoiceAmount),
        fundingAmount: damlTypes.Numeric(10).encode(__typed__.fundingAmount),
        financingFee: damlTypes.Numeric(10).encode(__typed__.financingFee),
        totalRepayment: damlTypes.Numeric(10).encode(__typed__.totalRepayment),
        currency: damlTypes.Text.encode(__typed__.currency),
        termDays: damlTypes.Int.encode(__typed__.termDays),
        offerExpiry: damlTypes.Time.encode(__typed__.offerExpiry),
        invoiceDueDate: damlTypes.Time.encode(__typed__.invoiceDueDate),
        conditions: damlTypes.Text.encode(__typed__.conditions),
      };
    },
    AcceptFinancingOffer: {
      template: function () { return exports.FinancingOffer; },
      choiceName: 'AcceptFinancingOffer',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.AcceptFinancingOffer.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.AcceptFinancingOffer.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.FinancingAgreement), damlTypes.ContractId(Invoice.Invoice)).decoder;
      }),
      resultEncode: function (__typed__) { return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.FinancingAgreement), damlTypes.ContractId(Invoice.Invoice)).encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.FinancingOffer; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder;
      }),
      argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    ExpireOffer: {
      template: function () { return exports.FinancingOffer; },
      choiceName: 'ExpireOffer',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.ExpireOffer.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.ExpireOffer.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    RejectFinancingOffer: {
      template: function () { return exports.FinancingOffer; },
      choiceName: 'RejectFinancingOffer',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.RejectFinancingOffer.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.RejectFinancingOffer.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.FinancingOffer, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.FinancingRequest = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Financing:FinancingRequest',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Financing:FinancingRequest',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        requestId: damlTypes.Text.decoder,
        invoiceId: damlTypes.Text.decoder,
        invoiceCid: damlTypes.ContractId(Invoice.Invoice).decoder,
        supplier: damlTypes.Party.decoder,
        buyer: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        eligibleFinanciers: damlTypes.List(damlTypes.Party).decoder,
        invoiceAmount: damlTypes.Numeric(10).decoder,
        maxFundingRequested: damlTypes.Numeric(10).decoder,
        currency: damlTypes.Text.decoder,
        dueDate: damlTypes.Time.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        requestId: damlTypes.Text.encode(__typed__.requestId),
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        invoiceCid: damlTypes.ContractId(Invoice.Invoice).encode(__typed__.invoiceCid),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        buyer: damlTypes.Party.encode(__typed__.buyer),
        operator: damlTypes.Party.encode(__typed__.operator),
        eligibleFinanciers: damlTypes.List(damlTypes.Party).encode(__typed__.eligibleFinanciers),
        invoiceAmount: damlTypes.Numeric(10).encode(__typed__.invoiceAmount),
        maxFundingRequested: damlTypes.Numeric(10).encode(__typed__.maxFundingRequested),
        currency: damlTypes.Text.encode(__typed__.currency),
        dueDate: damlTypes.Time.encode(__typed__.dueDate),
      };
    },
    Archive: {
      template: function () { return exports.FinancingRequest; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder;
      }),
      argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    CancelFinancingRequest: {
      template: function () { return exports.FinancingRequest; },
      choiceName: 'CancelFinancingRequest',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.CancelFinancingRequest.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.CancelFinancingRequest.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
    MakeFinancingOffer: {
      template: function () { return exports.FinancingRequest; },
      choiceName: 'MakeFinancingOffer',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.MakeFinancingOffer.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.MakeFinancingOffer.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.FinancingOffer), damlTypes.ContractId(exports.FinancingBidNotice)).decoder;
      }),
      resultEncode: function (__typed__) { return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.FinancingOffer), damlTypes.ContractId(exports.FinancingBidNotice)).encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.FinancingRequest, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.MakeFinancingOffer = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      offerId: damlTypes.Text.decoder,
      financier: damlTypes.Party.decoder,
      fundingAmount: damlTypes.Numeric(10).decoder,
      financingFee: damlTypes.Numeric(10).decoder,
      termDays: damlTypes.Int.decoder,
      offerExpiry: damlTypes.Time.decoder,
      conditions: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      offerId: damlTypes.Text.encode(__typed__.offerId),
      financier: damlTypes.Party.encode(__typed__.financier),
      fundingAmount: damlTypes.Numeric(10).encode(__typed__.fundingAmount),
      financingFee: damlTypes.Numeric(10).encode(__typed__.financingFee),
      termDays: damlTypes.Int.encode(__typed__.termDays),
      offerExpiry: damlTypes.Time.encode(__typed__.offerExpiry),
      conditions: damlTypes.Text.encode(__typed__.conditions),
    };
  },
};

exports.MarkAsFunded = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.RejectFinancingOffer = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.SettleFinancing = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      settlementAmount: damlTypes.Numeric(10).decoder,
      paymentReference: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      settlementAmount: damlTypes.Numeric(10).encode(__typed__.settlementAmount),
      paymentReference: damlTypes.Text.encode(__typed__.paymentReference),
    };
  },
};

exports.SettlementRecord = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Financing:SettlementRecord',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Financing:SettlementRecord',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        agreementId: damlTypes.Text.decoder,
        invoiceId: damlTypes.Text.decoder,
        supplier: damlTypes.Party.decoder,
        buyer: damlTypes.Party.decoder,
        financier: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        totalSettledAmount: damlTypes.Numeric(10).decoder,
        financierPayout: damlTypes.Numeric(10).decoder,
        supplierRemainderPayout: damlTypes.Numeric(10).decoder,
        currency: damlTypes.Text.decoder,
        settledAt: damlTypes.Time.decoder,
        paymentReference: damlTypes.Text.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        agreementId: damlTypes.Text.encode(__typed__.agreementId),
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        buyer: damlTypes.Party.encode(__typed__.buyer),
        financier: damlTypes.Party.encode(__typed__.financier),
        operator: damlTypes.Party.encode(__typed__.operator),
        totalSettledAmount: damlTypes.Numeric(10).encode(__typed__.totalSettledAmount),
        financierPayout: damlTypes.Numeric(10).encode(__typed__.financierPayout),
        supplierRemainderPayout: damlTypes.Numeric(10).encode(__typed__.supplierRemainderPayout),
        currency: damlTypes.Text.encode(__typed__.currency),
        settledAt: damlTypes.Time.encode(__typed__.settledAt),
        paymentReference: damlTypes.Text.encode(__typed__.paymentReference),
      };
    },
    Archive: {
      template: function () { return exports.SettlementRecord; },
      choiceName: 'Archive',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.decoder;
      }),
      argumentEncode: function (__typed__) { return pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.SettlementRecord, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.WithdrawBidNotice = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};
