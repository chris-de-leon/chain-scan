// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file flow/entities/block_header.proto (package flow.entities, syntax proto3)

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1"
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1"
import type { Timestamp } from "@bufbuild/protobuf/wkt"
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/entities/block_header.proto.
 */
export const file_flow_entities_block_header: GenFile =
  /*@__PURE__*/
  fileDesc(
    "CiBmbG93L2VudGl0aWVzL2Jsb2NrX2hlYWRlci5wcm90bxINZmxvdy5lbnRpdGllcyL2AgoLQmxvY2tIZWFkZXISCgoCaWQYASABKAwSEQoJcGFyZW50X2lkGAIgASgMEg4KBmhlaWdodBgDIAEoBBItCgl0aW1lc3RhbXAYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhQKDHBheWxvYWRfaGFzaBgFIAEoDBIMCgR2aWV3GAYgASgEEhgKEHBhcmVudF92b3Rlcl9pZHMYByADKAwSHQoVcGFyZW50X3ZvdGVyX3NpZ19kYXRhGAggASgMEhMKC3Byb3Bvc2VyX2lkGAkgASgMEhkKEXByb3Bvc2VyX3NpZ19kYXRhGAogASgMEhAKCGNoYWluX2lkGAsgASgJEhwKFHBhcmVudF92b3Rlcl9pbmRpY2VzGAwgASgMEjcKDGxhc3Rfdmlld190YxgNIAEoCzIhLmZsb3cuZW50aXRpZXMuVGltZW91dENlcnRpZmljYXRlEhMKC3BhcmVudF92aWV3GA4gASgEIpkBChJUaW1lb3V0Q2VydGlmaWNhdGUSDAoEdmlldxgBIAEoBBIVCg1oaWdoX3FjX3ZpZXdzGAIgAygEEjQKCmhpZ2hlc3RfcWMYAyABKAsyIC5mbG93LmVudGl0aWVzLlF1b3J1bUNlcnRpZmljYXRlEhYKDnNpZ25lcl9pbmRpY2VzGAQgASgMEhAKCHNpZ19kYXRhGAUgASgMIl0KEVF1b3J1bUNlcnRpZmljYXRlEgwKBHZpZXcYASABKAQSEAoIYmxvY2tfaWQYAiABKAwSFgoOc2lnbmVyX2luZGljZXMYAyABKAwSEAoIc2lnX2RhdGEYBCABKAxCUAocb3JnLm9uZmxvdy5wcm90b2J1Zi5lbnRpdGllc1owZ2l0aHViLmNvbS9vbmZsb3cvZmxvdy9wcm90b2J1Zi9nby9mbG93L2VudGl0aWVzYgZwcm90bzM",
    [file_google_protobuf_timestamp],
  )

/**
 * @generated from message flow.entities.BlockHeader
 */
export type BlockHeader = Message<"flow.entities.BlockHeader"> & {
  /**
   * @generated from field: bytes id = 1;
   */
  id: Uint8Array

  /**
   * @generated from field: bytes parent_id = 2;
   */
  parentId: Uint8Array

  /**
   * @generated from field: uint64 height = 3;
   */
  height: bigint

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp

  /**
   * @generated from field: bytes payload_hash = 5;
   */
  payloadHash: Uint8Array

  /**
   * @generated from field: uint64 view = 6;
   */
  view: bigint

  /**
   * deprecated!! value will be empty. replaced by parent_vote_indices
   *
   * @generated from field: repeated bytes parent_voter_ids = 7;
   */
  parentVoterIds: Uint8Array[]

  /**
   * @generated from field: bytes parent_voter_sig_data = 8;
   */
  parentVoterSigData: Uint8Array

  /**
   * @generated from field: bytes proposer_id = 9;
   */
  proposerId: Uint8Array

  /**
   * @generated from field: bytes proposer_sig_data = 10;
   */
  proposerSigData: Uint8Array

  /**
   * @generated from field: string chain_id = 11;
   */
  chainId: string

  /**
   * @generated from field: bytes parent_voter_indices = 12;
   */
  parentVoterIndices: Uint8Array

  /**
   * @generated from field: flow.entities.TimeoutCertificate last_view_tc = 13;
   */
  lastViewTc?: TimeoutCertificate

  /**
   * @generated from field: uint64 parent_view = 14;
   */
  parentView: bigint
}

/**
 * Describes the message flow.entities.BlockHeader.
 * Use `create(BlockHeaderSchema)` to create a new message.
 */
export const BlockHeaderSchema: GenMessage<BlockHeader> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_header, 0)

/**
 * @generated from message flow.entities.TimeoutCertificate
 */
export type TimeoutCertificate = Message<"flow.entities.TimeoutCertificate"> & {
  /**
   * @generated from field: uint64 view = 1;
   */
  view: bigint

  /**
   * @generated from field: repeated uint64 high_qc_views = 2;
   */
  highQcViews: bigint[]

  /**
   * @generated from field: flow.entities.QuorumCertificate highest_qc = 3;
   */
  highestQc?: QuorumCertificate

  /**
   * @generated from field: bytes signer_indices = 4;
   */
  signerIndices: Uint8Array

  /**
   * @generated from field: bytes sig_data = 5;
   */
  sigData: Uint8Array
}

/**
 * Describes the message flow.entities.TimeoutCertificate.
 * Use `create(TimeoutCertificateSchema)` to create a new message.
 */
export const TimeoutCertificateSchema: GenMessage<TimeoutCertificate> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_header, 1)

/**
 * @generated from message flow.entities.QuorumCertificate
 */
export type QuorumCertificate = Message<"flow.entities.QuorumCertificate"> & {
  /**
   * @generated from field: uint64 view = 1;
   */
  view: bigint

  /**
   * @generated from field: bytes block_id = 2;
   */
  blockId: Uint8Array

  /**
   * @generated from field: bytes signer_indices = 3;
   */
  signerIndices: Uint8Array

  /**
   * @generated from field: bytes sig_data = 4;
   */
  sigData: Uint8Array
}

/**
 * Describes the message flow.entities.QuorumCertificate.
 * Use `create(QuorumCertificateSchema)` to create a new message.
 */
export const QuorumCertificateSchema: GenMessage<QuorumCertificate> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_header, 2)
