// Generated from ../Registration/module.daml

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';

import * as pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69 from '@daml.js/ghc-stdlib-DA-Internal-Template-1.0.0';

import * as Types from '../Types/module';

export declare type AcceptInvitation = {
  cacOrRegistrationNumber: string,
}

export declare const AcceptInvitation:
  damlTypes.Serializable<AcceptInvitation>

export declare type ApproveRegistration = {
}

export declare const ApproveRegistration:
  damlTypes.Serializable<ApproveRegistration>

export declare type CompanyProfile = {
  operator: damlTypes.Party,
  companyParty: damlTypes.Party,
  companyName: string,
  businessLocation: string,
  cacOrRegistrationNumber: string,
  role: Types.CompanyRole,
  roleCode: damlTypes.Int,
  isVerified: boolean,
}

export declare interface CompanyProfileInterface {
  Archive: 
    damlTypes.Choice<CompanyProfile, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<CompanyProfile, undefined>>;
  UpdateVerificationStatus: 
    damlTypes.Choice<CompanyProfile, UpdateVerificationStatus, damlTypes.ContractId<CompanyProfile>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<CompanyProfile, undefined>>;
}
export declare const CompanyProfile:
  damlTypes.Template<CompanyProfile, undefined, '#nineja-trade:Registration:CompanyProfile'> &
  damlTypes.ToInterface<CompanyProfile, never> &
  CompanyProfileInterface

export declare type RegistrationInvitation = {
  operator: damlTypes.Party,
  inviteeParty: damlTypes.Party,
  companyName: string,
  businessLocation: string,
  assignedRole: Types.CompanyRole,
  roleCode: damlTypes.Int,
}

export declare interface RegistrationInvitationInterface {
  AcceptInvitation: 
    damlTypes.Choice<RegistrationInvitation, AcceptInvitation, damlTypes.ContractId<CompanyProfile>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<RegistrationInvitation, undefined>>;
  Archive: 
    damlTypes.Choice<RegistrationInvitation, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<RegistrationInvitation, undefined>>;
}
export declare const RegistrationInvitation:
  damlTypes.Template<RegistrationInvitation, undefined, '#nineja-trade:Registration:RegistrationInvitation'> &
  damlTypes.ToInterface<RegistrationInvitation, never> &
  RegistrationInvitationInterface

export declare type RegistrationRequest = {
  operator: damlTypes.Party,
  applicantParty: damlTypes.Party,
  companyName: string,
  businessLocation: string,
  cacOrRegistrationNumber: string,
  requestedRole: Types.CompanyRole,
  roleCode: damlTypes.Int,
}

export declare interface RegistrationRequestInterface {
  ApproveRegistration: 
    damlTypes.Choice<RegistrationRequest, ApproveRegistration, damlTypes.ContractId<CompanyProfile>, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<RegistrationRequest, undefined>>;
  Archive: 
    damlTypes.Choice<RegistrationRequest, pkg9e70a8b3510d617f8a136213f33d6a903a10ca0eeec76bb06ba55d1ed9680f69.DA.Internal.Template.Archive, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<RegistrationRequest, undefined>>;
  RejectRegistration: 
    damlTypes.Choice<RegistrationRequest, RejectRegistration, {}, undefined> &
    damlTypes.ChoiceFrom<damlTypes.Template<RegistrationRequest, undefined>>;
}
export declare const RegistrationRequest:
  damlTypes.Template<RegistrationRequest, undefined, '#nineja-trade:Registration:RegistrationRequest'> &
  damlTypes.ToInterface<RegistrationRequest, never> &
  RegistrationRequestInterface

export declare type RejectRegistration = {
  reason: string,
}

export declare const RejectRegistration:
  damlTypes.Serializable<RejectRegistration>

export declare type UpdateVerificationStatus = {
  newStatus: boolean,
}

export declare const UpdateVerificationStatus:
  damlTypes.Serializable<UpdateVerificationStatus>
