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

var pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 = require('@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0');

var Types = require('../Types/module');

exports.AcceptInvitation = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      cacOrRegistrationNumber: damlTypes.Text.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      cacOrRegistrationNumber: damlTypes.Text.encode(__typed__.cacOrRegistrationNumber),
    };
  },
};

exports.ApproveRegistration = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
    });
  }),
  encode: function (__typed__) {
    return {};
  },
};

exports.CompanyProfile = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Registration:CompanyProfile',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Registration:CompanyProfile',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        operator: damlTypes.Party.decoder,
        companyParty: damlTypes.Party.decoder,
        companyName: damlTypes.Text.decoder,
        businessLocation: damlTypes.Text.decoder,
        cacOrRegistrationNumber: damlTypes.Text.decoder,
        role: Types.CompanyRole.decoder,
        roleCode: damlTypes.Int.decoder,
        isVerified: damlTypes.Bool.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        operator: damlTypes.Party.encode(__typed__.operator),
        companyParty: damlTypes.Party.encode(__typed__.companyParty),
        companyName: damlTypes.Text.encode(__typed__.companyName),
        businessLocation: damlTypes.Text.encode(__typed__.businessLocation),
        cacOrRegistrationNumber: damlTypes.Text.encode(__typed__.cacOrRegistrationNumber),
        role: Types.CompanyRole.encode(__typed__.role),
        roleCode: damlTypes.Int.encode(__typed__.roleCode),
        isVerified: damlTypes.Bool.encode(__typed__.isVerified),
      };
    },
    Archive: {
      template: function () { return exports.CompanyProfile; },
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
    UpdateVerificationStatus: {
      template: function () { return exports.CompanyProfile; },
      choiceName: 'UpdateVerificationStatus',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.UpdateVerificationStatus.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.UpdateVerificationStatus.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.CompanyProfile).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CompanyProfile).encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.CompanyProfile, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.RegistrationInvitation = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Registration:RegistrationInvitation',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Registration:RegistrationInvitation',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        operator: damlTypes.Party.decoder,
        inviteeParty: damlTypes.Party.decoder,
        companyName: damlTypes.Text.decoder,
        businessLocation: damlTypes.Text.decoder,
        assignedRole: Types.CompanyRole.decoder,
        roleCode: damlTypes.Int.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        operator: damlTypes.Party.encode(__typed__.operator),
        inviteeParty: damlTypes.Party.encode(__typed__.inviteeParty),
        companyName: damlTypes.Text.encode(__typed__.companyName),
        businessLocation: damlTypes.Text.encode(__typed__.businessLocation),
        assignedRole: Types.CompanyRole.encode(__typed__.assignedRole),
        roleCode: damlTypes.Int.encode(__typed__.roleCode),
      };
    },
    AcceptInvitation: {
      template: function () { return exports.RegistrationInvitation; },
      choiceName: 'AcceptInvitation',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.AcceptInvitation.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.AcceptInvitation.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.CompanyProfile).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CompanyProfile).encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.RegistrationInvitation; },
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

damlTypes.registerTemplate(exports.RegistrationInvitation, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.RegistrationRequest = damlTypes.assembleTemplate(
  {
    templateId: '#nineja-trade:Registration:RegistrationRequest',
    templateIdWithPackageId: '#8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5:Registration:RegistrationRequest',
    keyDecoder: jtv.constant(undefined),
    keyEncode: function () { throw 'EncodeError'; },
    decoder: damlTypes.lazyMemo(function () {
      return jtv.object({
        operator: damlTypes.Party.decoder,
        applicantParty: damlTypes.Party.decoder,
        companyName: damlTypes.Text.decoder,
        businessLocation: damlTypes.Text.decoder,
        cacOrRegistrationNumber: damlTypes.Text.decoder,
        requestedRole: Types.CompanyRole.decoder,
        roleCode: damlTypes.Int.decoder,
      });
    }),
    encode: function (__typed__) {
      return {
        operator: damlTypes.Party.encode(__typed__.operator),
        applicantParty: damlTypes.Party.encode(__typed__.applicantParty),
        companyName: damlTypes.Text.encode(__typed__.companyName),
        businessLocation: damlTypes.Text.encode(__typed__.businessLocation),
        cacOrRegistrationNumber: damlTypes.Text.encode(__typed__.cacOrRegistrationNumber),
        requestedRole: Types.CompanyRole.encode(__typed__.requestedRole),
        roleCode: damlTypes.Int.encode(__typed__.roleCode),
      };
    },
    ApproveRegistration: {
      template: function () { return exports.RegistrationRequest; },
      choiceName: 'ApproveRegistration',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.ApproveRegistration.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.ApproveRegistration.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.ContractId(exports.CompanyProfile).decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.ContractId(exports.CompanyProfile).encode(__typed__); },
    },
    Archive: {
      template: function () { return exports.RegistrationRequest; },
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
    RejectRegistration: {
      template: function () { return exports.RegistrationRequest; },
      choiceName: 'RejectRegistration',
      argumentDecoder: damlTypes.lazyMemo(function () {
        return exports.RejectRegistration.decoder;
      }),
      argumentEncode: function (__typed__) { return exports.RejectRegistration.encode(__typed__); },
      resultDecoder: damlTypes.lazyMemo(function () {
        return damlTypes.Unit.decoder;
      }),
      resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
    },
  },
);

damlTypes.registerTemplate(exports.RegistrationRequest, ['8300d64906ab73949a20f2b1ecbd07e55deb03f89b4bb9a6051c2c964beab4a5', '#nineja-trade']);

exports.RejectRegistration = {
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

exports.UpdateVerificationStatus = {
  decoder: damlTypes.lazyMemo(function () {
    return jtv.object({
      newStatus: damlTypes.Bool.decoder,
    });
  }),
  encode: function (__typed__) {
    return {
      newStatus: damlTypes.Bool.encode(__typed__.newStatus),
    };
  },
};
