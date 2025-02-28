// @generated by protoc-gen-es v2.2.3 with parameter "import_extension=ts,target=ts"
// @generated from file flow/entities/node_version_info.proto (package flow.entities, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1"
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/entities/node_version_info.proto.
 */
export const file_flow_entities_node_version_info: GenFile = /*@__PURE__*/
  fileDesc(
    "CiVmbG93L2VudGl0aWVzL25vZGVfdmVyc2lvbl9pbmZvLnByb3RvEg1mbG93LmVudGl0aWVzIjsKD0NvbXBhdGlibGVSYW5nZRIUCgxzdGFydF9oZWlnaHQYASABKAQSEgoKZW5kX2hlaWdodBgCIAEoBCLYAQoPTm9kZVZlcnNpb25JbmZvEg4KBnNlbXZlchgBIAEoCRIOCgZjb21taXQYAiABKAkSEAoIc3BvcmtfaWQYAyABKAwSGAoQcHJvdG9jb2xfdmVyc2lvbhgEIAEoBBIfChdzcG9ya19yb290X2Jsb2NrX2hlaWdodBgFIAEoBBIeChZub2RlX3Jvb3RfYmxvY2tfaGVpZ2h0GAYgASgEEjgKEGNvbXBhdGlibGVfcmFuZ2UYByABKAsyHi5mbG93LmVudGl0aWVzLkNvbXBhdGlibGVSYW5nZUJQChxvcmcub25mbG93LnByb3RvYnVmLmVudGl0aWVzWjBnaXRodWIuY29tL29uZmxvdy9mbG93L3Byb3RvYnVmL2dvL2Zsb3cvZW50aXRpZXNiBnByb3RvMw",
  )

/**
 * @generated from message flow.entities.CompatibleRange
 */
export type CompatibleRange = Message<"flow.entities.CompatibleRange"> & {
  /**
   * The first block that the version supports.
   *
   * @generated from field: uint64 start_height = 1;
   */
  startHeight: bigint

  /**
   * The last block that the version supports.
   *
   * @generated from field: uint64 end_height = 2;
   */
  endHeight: bigint
}

/**
 * Describes the message flow.entities.CompatibleRange.
 * Use `create(CompatibleRangeSchema)` to create a new message.
 */
export const CompatibleRangeSchema: GenMessage<CompatibleRange> = /*@__PURE__*/
  messageDesc(file_flow_entities_node_version_info, 0)

/**
 * @generated from message flow.entities.NodeVersionInfo
 */
export type NodeVersionInfo = Message<"flow.entities.NodeVersionInfo"> & {
  /**
   * The currently running node software version.
   *
   * @generated from field: string semver = 1;
   */
  semver: string

  /**
   * The git commit hash of the currently running node software.
   *
   * @generated from field: string commit = 2;
   */
  commit: string

  /**
   * The unique identifier for the node's network within the current spork.
   *
   * @generated from field: bytes spork_id = 3;
   */
  sporkId: Uint8Array

  /**
   * The protocol version of the currently running node software.
   *
   * @generated from field: uint64 protocol_version = 4;
   */
  protocolVersion: bigint

  /**
   * The spork root block height. This is the height of the first sealed block in the spork network.
   *
   * @generated from field: uint64 spork_root_block_height = 5;
   */
  sporkRootBlockHeight: bigint

  /**
   * The node's root block height. This is the first sealed block in the node's protocol database.
   * If the node started at the beginning of the spork, it is the same as the spork root block height.
   * If the node started after the beginning of the spork, it is the height of the first sealed block
   * indexed.
   *
   * @generated from field: uint64 node_root_block_height = 6;
   */
  nodeRootBlockHeight: bigint

  /**
   * The compatible version range.
   *
   * @generated from field: flow.entities.CompatibleRange compatible_range = 7;
   */
  compatibleRange?: CompatibleRange
}

/**
 * Describes the message flow.entities.NodeVersionInfo.
 * Use `create(NodeVersionInfoSchema)` to create a new message.
 */
export const NodeVersionInfoSchema: GenMessage<NodeVersionInfo> = /*@__PURE__*/
  messageDesc(file_flow_entities_node_version_info, 1)
