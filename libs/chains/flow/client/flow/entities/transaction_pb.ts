// @generated by protoc-gen-es v2.2.3 with parameter "import_extension=ts,target=ts"
// @generated from file flow/entities/transaction.proto (package flow.entities, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1"
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1"
import { file_flow_entities_event } from "./event_pb.ts"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/entities/transaction.proto.
 */
export const file_flow_entities_transaction: GenFile = /*@__PURE__*/
  fileDesc(
    "Ch9mbG93L2VudGl0aWVzL3RyYW5zYWN0aW9uLnByb3RvEg1mbG93LmVudGl0aWVzItADCgtUcmFuc2FjdGlvbhIOCgZzY3JpcHQYASABKAwSEQoJYXJndW1lbnRzGAIgAygMEhoKEnJlZmVyZW5jZV9ibG9ja19pZBgDIAEoDBIRCglnYXNfbGltaXQYBCABKAQSPAoMcHJvcG9zYWxfa2V5GAUgASgLMiYuZmxvdy5lbnRpdGllcy5UcmFuc2FjdGlvbi5Qcm9wb3NhbEtleRINCgVwYXllchgGIAEoDBITCgthdXRob3JpemVycxgHIAMoDBJAChJwYXlsb2FkX3NpZ25hdHVyZXMYCCADKAsyJC5mbG93LmVudGl0aWVzLlRyYW5zYWN0aW9uLlNpZ25hdHVyZRJBChNlbnZlbG9wZV9zaWduYXR1cmVzGAkgAygLMiQuZmxvdy5lbnRpdGllcy5UcmFuc2FjdGlvbi5TaWduYXR1cmUaRwoLUHJvcG9zYWxLZXkSDwoHYWRkcmVzcxgBIAEoDBIOCgZrZXlfaWQYAiABKA0SFwoPc2VxdWVuY2VfbnVtYmVyGAMgASgEGj8KCVNpZ25hdHVyZRIPCgdhZGRyZXNzGAEgASgMEg4KBmtleV9pZBgCIAEoDRIRCglzaWduYXR1cmUYAyABKAwqYwoRVHJhbnNhY3Rpb25TdGF0dXMSCwoHVU5LTk9XThAAEgsKB1BFTkRJTkcQARINCglGSU5BTElaRUQQAhIMCghFWEVDVVRFRBADEgoKBlNFQUxFRBAEEgsKB0VYUElSRUQQBUJQChxvcmcub25mbG93LnByb3RvYnVmLmVudGl0aWVzWjBnaXRodWIuY29tL29uZmxvdy9mbG93L3Byb3RvYnVmL2dvL2Zsb3cvZW50aXRpZXNiBnByb3RvMw",
    [file_flow_entities_event],
  )

/**
 * @generated from message flow.entities.Transaction
 */
export type Transaction = Message<"flow.entities.Transaction"> & {
  /**
   * @generated from field: bytes script = 1;
   */
  script: Uint8Array

  /**
   * @generated from field: repeated bytes arguments = 2;
   */
  arguments: Uint8Array[]

  /**
   * @generated from field: bytes reference_block_id = 3;
   */
  referenceBlockId: Uint8Array

  /**
   * @generated from field: uint64 gas_limit = 4;
   */
  gasLimit: bigint

  /**
   * @generated from field: flow.entities.Transaction.ProposalKey proposal_key = 5;
   */
  proposalKey?: Transaction_ProposalKey

  /**
   * @generated from field: bytes payer = 6;
   */
  payer: Uint8Array

  /**
   * @generated from field: repeated bytes authorizers = 7;
   */
  authorizers: Uint8Array[]

  /**
   * @generated from field: repeated flow.entities.Transaction.Signature payload_signatures = 8;
   */
  payloadSignatures: Transaction_Signature[]

  /**
   * @generated from field: repeated flow.entities.Transaction.Signature envelope_signatures = 9;
   */
  envelopeSignatures: Transaction_Signature[]
}

/**
 * Describes the message flow.entities.Transaction.
 * Use `create(TransactionSchema)` to create a new message.
 */
export const TransactionSchema: GenMessage<Transaction> = /*@__PURE__*/
  messageDesc(file_flow_entities_transaction, 0)

/**
 * @generated from message flow.entities.Transaction.ProposalKey
 */
export type Transaction_ProposalKey =
  & Message<"flow.entities.Transaction.ProposalKey">
  & {
    /**
     * @generated from field: bytes address = 1;
     */
    address: Uint8Array

    /**
     * @generated from field: uint32 key_id = 2;
     */
    keyId: number

    /**
     * @generated from field: uint64 sequence_number = 3;
     */
    sequenceNumber: bigint
  }

/**
 * Describes the message flow.entities.Transaction.ProposalKey.
 * Use `create(Transaction_ProposalKeySchema)` to create a new message.
 */
export const Transaction_ProposalKeySchema: GenMessage<
  Transaction_ProposalKey
> = /*@__PURE__*/
  messageDesc(file_flow_entities_transaction, 0, 0)

/**
 * @generated from message flow.entities.Transaction.Signature
 */
export type Transaction_Signature =
  & Message<"flow.entities.Transaction.Signature">
  & {
    /**
     * @generated from field: bytes address = 1;
     */
    address: Uint8Array

    /**
     * @generated from field: uint32 key_id = 2;
     */
    keyId: number

    /**
     * @generated from field: bytes signature = 3;
     */
    signature: Uint8Array
  }

/**
 * Describes the message flow.entities.Transaction.Signature.
 * Use `create(Transaction_SignatureSchema)` to create a new message.
 */
export const Transaction_SignatureSchema: GenMessage<
  Transaction_Signature
> = /*@__PURE__*/
  messageDesc(file_flow_entities_transaction, 0, 1)

/**
 * @generated from enum flow.entities.TransactionStatus
 */
export enum TransactionStatus {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: PENDING = 1;
   */
  PENDING = 1,

  /**
   * @generated from enum value: FINALIZED = 2;
   */
  FINALIZED = 2,

  /**
   * @generated from enum value: EXECUTED = 3;
   */
  EXECUTED = 3,

  /**
   * @generated from enum value: SEALED = 4;
   */
  SEALED = 4,

  /**
   * @generated from enum value: EXPIRED = 5;
   */
  EXPIRED = 5,
}

/**
 * Describes the enum flow.entities.TransactionStatus.
 */
export const TransactionStatusSchema: GenEnum<TransactionStatus> = /*@__PURE__*/
  enumDesc(file_flow_entities_transaction, 0)
