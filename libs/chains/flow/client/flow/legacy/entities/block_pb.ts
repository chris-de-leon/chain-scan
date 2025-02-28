// @generated by protoc-gen-es v2.2.3 with parameter "import_extension=ts,target=ts"
// @generated from file flow/legacy/entities/block.proto (package entities, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1"
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1"
import type { Timestamp } from "@bufbuild/protobuf/wkt"
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt"
import type { CollectionGuarantee } from "./collection_pb.ts"
import { file_flow_legacy_entities_collection } from "./collection_pb.ts"
import type { BlockSeal } from "./block_seal_pb.ts"
import { file_flow_legacy_entities_block_seal } from "./block_seal_pb.ts"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/legacy/entities/block.proto.
 */
export const file_flow_legacy_entities_block: GenFile = /*@__PURE__*/
  fileDesc(
    "CiBmbG93L2xlZ2FjeS9lbnRpdGllcy9ibG9jay5wcm90bxIIZW50aXRpZXMi4QEKBUJsb2NrEgoKAmlkGAEgASgMEhEKCXBhcmVudF9pZBgCIAEoDBIOCgZoZWlnaHQYAyABKAQSLQoJdGltZXN0YW1wGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI8ChVjb2xsZWN0aW9uX2d1YXJhbnRlZXMYBSADKAsyHS5lbnRpdGllcy5Db2xsZWN0aW9uR3VhcmFudGVlEigKC2Jsb2NrX3NlYWxzGAYgAygLMhMuZW50aXRpZXMuQmxvY2tTZWFsEhIKCnNpZ25hdHVyZXMYByADKAxCXgojb3JnLm9uZmxvdy5wcm90b2J1Zi5sZWdhY3kuZW50aXRpZXNaN2dpdGh1Yi5jb20vb25mbG93L2Zsb3cvcHJvdG9idWYvZ28vZmxvdy9sZWdhY3kvZW50aXRpZXNiBnByb3RvMw",
    [
      file_google_protobuf_timestamp,
      file_flow_legacy_entities_collection,
      file_flow_legacy_entities_block_seal,
    ],
  )

/**
 * @generated from message entities.Block
 */
export type Block = Message<"entities.Block"> & {
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
   * @generated from field: repeated entities.CollectionGuarantee collection_guarantees = 5;
   */
  collectionGuarantees: CollectionGuarantee[]

  /**
   * @generated from field: repeated entities.BlockSeal block_seals = 6;
   */
  blockSeals: BlockSeal[]

  /**
   * @generated from field: repeated bytes signatures = 7;
   */
  signatures: Uint8Array[]
}

/**
 * Describes the message entities.Block.
 * Use `create(BlockSchema)` to create a new message.
 */
export const BlockSchema: GenMessage<Block> = /*@__PURE__*/
  messageDesc(file_flow_legacy_entities_block, 0)
