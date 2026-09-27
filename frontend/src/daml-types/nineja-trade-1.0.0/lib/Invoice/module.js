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

var Types = require('../Types/module');

exports.AttachDocument = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      newDoc: Types.DocumentEvidence.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      newDoc: Types.DocumentEvidence.encode(__typed__.newDoc),
    };
  },
};

exports.BuyerConfirmation = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Invoice:BuyerConfirmation',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Invoice:BuyerConfirmation',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        invoiceId: damlTypes.Text.decoder,
        supplier: damlTypes.Party.decoder,
        buyer: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        amount: damlTypes.Numeric(10).decoder,
        currency: damlTypes.Text.decoder,
        dueDate: damlTypes.Time.decoder,
        confirmedAt: damlTypes.Time.decoder,
        confirmationNotes: damlTypes.Text.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        buyer: damlTypes.Party.encode(__typed__.buyer),
        operator: damlTypes.Party.encode(__typed__.operator),
        amount: damlTypes.Numeric(10).encode(__typed__.amount),
        currency: damlTypes.Text.encode(__typed__.currency),
        dueDate: damlTypes.Time.encode(__typed__.dueDate),
        confirmedAt: damlTypes.Time.encode(__typed__.confirmedAt),
        confirmationNotes: damlTypes.Text.encode(__typed__.confirmationNotes),
      };
    },
    Archive: {
      template: function () { return exports.BuyerConfirmation; },
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

damlTypes.registerTemplate(exports.BuyerConfirmation, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.CloseInvoiceAsSettled = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.ConfirmDelivery = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      fulfillmentNotes: damlTypes.Text.decoder,
      deliveryEvidence: Types.DocumentEvidence.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      fulfillmentNotes: damlTypes.Text.encode(__typed__.fulfillmentNotes),
      deliveryEvidence: Types.DocumentEvidence.encode(__typed__.deliveryEvidence),
    };
  },
};

exports.ConfirmInvoice = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      confirmationNotes: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      confirmationNotes: damlTypes.Text.encode(__typed__.confirmationNotes),
    };
  },
};

exports.DeliveryConfirmation = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Invoice:DeliveryConfirmation',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Invoice:DeliveryConfirmation',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        invoiceId: damlTypes.Text.decoder,
        supplier: damlTypes.Party.decoder,
        buyer: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        deliveredAt: damlTypes.Time.decoder,
        fulfillmentNotes: damlTypes.Text.decoder,
        evidence: Types.DocumentEvidence.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        buyer: damlTypes.Party.encode(__typed__.buyer),
        operator: damlTypes.Party.encode(__typed__.operator),
        deliveredAt: damlTypes.Time.encode(__typed__.deliveredAt),
        fulfillmentNotes: damlTypes.Text.encode(__typed__.fulfillmentNotes),
        evidence: Types.DocumentEvidence.encode(__typed__.evidence),
      };
    },
    Archive: {
      template: function () { return exports.DeliveryConfirmation; },
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

damlTypes.registerTemplate(exports.DeliveryConfirmation, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.Invoice = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Invoice:Invoice',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Invoice:Invoice',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        invoiceId: damlTypes.Text.decoder,
        supplier: damlTypes.Party.decoder,
        buyer: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        amount: damlTypes.Numeric(10).decoder,
        currency: damlTypes.Text.decoder,
        issueDate: damlTypes.Time.decoder,
        dueDate: damlTypes.Time.decoder,
        description: damlTypes.Text.decoder,
        items: damlTypes.List(Types.InvoiceItem).decoder,
        supportingDocuments: damlTypes.List(Types.DocumentEvidence).decoder,
        status: Types.InvoiceStatus.decoder,
        correctionNotes: jtv.Decoder.withDefault(null, damlTypes.Optional(damlTypes.Text).decoder),
      });
    }),
    encode: function (__typed__) {
      return {
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        supplier: damlTypes.Party.encode(__typed__.supplier),
        buyer: damlTypes.Party.encode(__typed__.buyer),
        operator: damlTypes.Party.encode(__typed__.operator),
        amount: damlTypes.Numeric(10).encode(__typed__.amount),
        currency: damlTypes.Text.encode(__typed__.currency),
        issueDate: damlTypes.Time.encode(__typed__.issueDate),
        dueDate: damlTypes.Time.encode(__typed__.dueDate),
        description: damlTypes.Text.encode(__typed__.description),
        items: damlTypes.List(Types.InvoiceItem).encode(__typed__.items),
        supportingDocuments: damlTypes.List(Types.DocumentEvidence).encode(__typed__.supportingDocuments),
        status: Types.InvoiceStatus.encode(__typed__.status),
        correctionNotes: damlTypes.Optional(damlTypes.Text).encode(__typed__.correctionNotes),
      };
    },
    Archive: {
      template: function () { return exports.Invoice; },
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
    AttachDocument: {
      template: function () { return exports.Invoice; },
      choiceName: 'AttachDocument',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.AttachDocument.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.AttachDocument.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.Invoice).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Invoice).encode(__typed__); },
    },
    CloseInvoiceAsSettled: {
      template: function () { return exports.Invoice; },
      choiceName: 'CloseInvoiceAsSettled',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.CloseInvoiceAsSettled.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.CloseInvoiceAsSettled.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.Invoice).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Invoice).encode(__typed__); },
    },
    ConfirmDelivery: {
      template: function () { return exports.Invoice; },
      choiceName: 'ConfirmDelivery',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.ConfirmDelivery.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.ConfirmDelivery.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.Invoice), damlTypes.ContractId(exports.DeliveryConfirmation)).decoder;
      }),
      resultEncode: function (__typed__) { return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.Invoice), damlTypes.ContractId(exports.DeliveryConfirmation)).encode(__typed__); },
    },
    ConfirmInvoice: {
      template: function () { return exports.Invoice; },
      choiceName: 'ConfirmInvoice',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.ConfirmInvoice.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.ConfirmInvoice.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.Invoice), damlTypes.ContractId(exports.BuyerConfirmation)).decoder;
      }),
      resultEncode: function (__typed__) { return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.Invoice), damlTypes.ContractId(exports.BuyerConfirmation)).encode(__typed__); },
    },
    LockAsFinanced: {
      template: function () { return exports.Invoice; },
      choiceName: 'LockAsFinanced',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.LockAsFinanced.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.LockAsFinanced.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.Invoice).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Invoice).encode(__typed__); },
    },
    RaiseDispute: {
      template: function () { return exports.Invoice; },
      choiceName: 'RaiseDispute',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.RaiseDispute.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.RaiseDispute.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.Invoice), damlTypes.ContractId(exports.InvoiceDispute)).decoder;
      }),
      resultEncode: function (__typed__) { return pkg5aee9b21b8e9a4c4975b5f4c4198e6e6e8469df49e2010820e792f393db870f4.DA.Types.Tuple2(damlTypes.ContractId(exports.Invoice), damlTypes.ContractId(exports.InvoiceDispute)).encode(__typed__); },
    },
    RejectInvoice: {
      template: function () { return exports.Invoice; },
      choiceName: 'RejectInvoice',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.RejectInvoice.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.RejectInvoice.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.Invoice).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Invoice).encode(__typed__); },
    },
    RequestCorrection: {
      template: function () { return exports.Invoice; },
      choiceName: 'RequestCorrection',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.RequestCorrection.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.RequestCorrection.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.Invoice).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Invoice).encode(__typed__); },
    },
    SubmitForReview: {
      template: function () { return exports.Invoice; },
      choiceName: 'SubmitForReview',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.SubmitForReview.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.SubmitForReview.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.Invoice).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Invoice).encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.Invoice, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.InvoiceDispute = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Invoice:InvoiceDispute',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Invoice:InvoiceDispute',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        invoiceId: damlTypes.Text.decoder,
        initiator: damlTypes.Party.decoder,
        counterparty: damlTypes.Party.decoder,
        operator: damlTypes.Party.decoder,
        disputeType: Types.DisputeType.decoder,
        evidenceNotes: damlTypes.Text.decoder,
        resolved: damlTypes.Bool.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        invoiceId: damlTypes.Text.encode(__typed__.invoiceId),
        initiator: damlTypes.Party.encode(__typed__.initiator),
        counterparty: damlTypes.Party.encode(__typed__.counterparty),
        operator: damlTypes.Party.encode(__typed__.operator),
        disputeType: Types.DisputeType.encode(__typed__.disputeType),
        evidenceNotes: damlTypes.Text.encode(__typed__.evidenceNotes),
        resolved: damlTypes.Bool.encode(__typed__.resolved),
      };
    },
    Archive: {
      template: function () { return exports.InvoiceDispute; },
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
    ResolveDispute: {
      template: function () { return exports.InvoiceDispute; },
      choiceName: 'ResolveDispute',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.ResolveDispute.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.ResolveDispute.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.InvoiceDispute).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.InvoiceDispute).encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.InvoiceDispute, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.LockAsFinanced = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.RaiseDispute = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      initiator: damlTypes.Party.decoder,
      disputeType: Types.DisputeType.decoder,
      evidenceNotes: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      initiator: damlTypes.Party.encode(__typed__.initiator),
      disputeType: Types.DisputeType.encode(__typed__.disputeType),
      evidenceNotes: damlTypes.Text.encode(__typed__.evidenceNotes),
    };
  },
};

exports.RejectInvoice = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      rejectionReason: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      rejectionReason: damlTypes.Text.encode(__typed__.rejectionReason),
    };
  },
};

exports.RequestCorrection = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      reason: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      reason: damlTypes.Text.encode(__typed__.reason),
    };
  },
};

exports.ResolveDispute = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      resolutionRuling: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      resolutionRuling: damlTypes.Text.encode(__typed__.resolutionRuling),
    };
  },
};

exports.SubmitForReview = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};
