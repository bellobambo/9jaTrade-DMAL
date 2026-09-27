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

exports.CompanyRole = {
  SupplierRole: 'SupplierRole',
  BuyerRole: 'BuyerRole',
  FinancierRole: 'FinancierRole',
  keys: ['SupplierRole', 'BuyerRole', 'FinancierRole'],
  decoder: damlTypes.lazyMemo(function () {
    return jtv.oneOf(
      jtv.constant(exports.CompanyRole.SupplierRole),
      jtv.constant(exports.CompanyRole.BuyerRole),
      jtv.constant(exports.CompanyRole.FinancierRole),
    );
  }),
  encode: function (__typed__) { return __typed__; },
};

exports.DisputeType = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.oneOf(
      jtv.object({
        tag: jtv.constant("AmountMismatch"),
        value: damlTypes.Unit.decoder,
      }),
      jtv.object({
        tag: jtv.constant("DeliveryIncomplete"),
        value: damlTypes.Unit.decoder,
      }),
      jtv.object({
        tag: jtv.constant("QualityIssue"),
        value: damlTypes.Unit.decoder,
      }),
      jtv.object({
        tag: jtv.constant("OtherDispute"),
        value: damlTypes.Text.decoder,
      }),
    );
  }),
  encode: function (__typed__) {
    switch(__typed__.tag) {
      case 'AmountMismatch': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
      case 'DeliveryIncomplete': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
      case 'QualityIssue': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
      case 'OtherDispute': return {tag: __typed__.tag, value: damlTypes.Text.encode(__typed__.value)};
      default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type DisputeType';
    }
  },
};

exports.DocumentEvidence = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      docType: damlTypes.Text.decoder,
      documentHash: damlTypes.Text.decoder,
      uriOrRef: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      docType: damlTypes.Text.encode(__typed__.docType),
      documentHash: damlTypes.Text.encode(__typed__.documentHash),
      uriOrRef: damlTypes.Text.encode(__typed__.uriOrRef),
    };
  },
};

exports.InvoiceItem = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      description: damlTypes.Text.decoder,
      quantity: damlTypes.Numeric(10).decoder,
      unit: damlTypes.Text.decoder,
      unitPrice: damlTypes.Numeric(10).decoder,
      itemTotal: damlTypes.Numeric(10).decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      description: damlTypes.Text.encode(__typed__.description),
      quantity: damlTypes.Numeric(10).encode(__typed__.quantity),
      unit: damlTypes.Text.encode(__typed__.unit),
      unitPrice: damlTypes.Numeric(10).encode(__typed__.unitPrice),
      itemTotal: damlTypes.Numeric(10).encode(__typed__.itemTotal),
    };
  },
};

exports.InvoiceStatus = {
  InvoiceDraft: 'InvoiceDraft',
  InvoiceSubmitted: 'InvoiceSubmitted',
  InvoiceConfirmed: 'InvoiceConfirmed',
  InvoiceDelivered: 'InvoiceDelivered',
  InvoiceFinanced: 'InvoiceFinanced',
  InvoiceSettled: 'InvoiceSettled',
  InvoiceRejected: 'InvoiceRejected',
  InvoiceDisputed: 'InvoiceDisputed',
  keys: ['InvoiceDraft', 'InvoiceSubmitted', 'InvoiceConfirmed', 'InvoiceDelivered', 'InvoiceFinanced', 'InvoiceSettled', 'InvoiceRejected', 'InvoiceDisputed'],
  decoder: damlTypes.lazyMemo(function () {
    return jtv.oneOf(
      jtv.constant(exports.InvoiceStatus.InvoiceDraft),
      jtv.constant(exports.InvoiceStatus.InvoiceSubmitted),
      jtv.constant(exports.InvoiceStatus.InvoiceConfirmed),
      jtv.constant(exports.InvoiceStatus.InvoiceDelivered),
      jtv.constant(exports.InvoiceStatus.InvoiceFinanced),
      jtv.constant(exports.InvoiceStatus.InvoiceSettled),
      jtv.constant(exports.InvoiceStatus.InvoiceRejected),
      jtv.constant(exports.InvoiceStatus.InvoiceDisputed),
    );
  }),
  encode: function (__typed__) { return __typed__; },
};
