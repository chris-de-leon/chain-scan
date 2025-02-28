// @generated by protoc-gen-es v2.2.3 with parameter "import_extension=ts,target=ts"
// @generated from file flow/legacy/entities/collection.proto (package entities, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1"
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/legacy/entities/collection.proto.
 */
export const file_flow_legacy_entities_collection: GenFile = /*@__PURE__*/
  fileDesc(
    "CiVmbG93L2xlZ2FjeS9lbnRpdGllcy9jb2xsZWN0aW9uLnByb3RvEghlbnRpdGllcyIxCgpDb2xsZWN0aW9uEgoKAmlkGAEgASgMEhcKD3RyYW5zYWN0aW9uX2lkcxgCIAMoDCJAChNDb2xsZWN0aW9uR3VhcmFudGVlEhUKDWNvbGxlY3Rpb25faWQYASABKAwSEgoKc2lnbmF0dXJlcxgCIAMoDEJeCiNvcmcub25mbG93LnByb3RvYnVmLmxlZ2FjeS5lbnRpdGllc1o3Z2l0aHViLmNvbS9vbmZsb3cvZmxvdy9wcm90b2J1Zi9nby9mbG93L2xlZ2FjeS9lbnRpdGllc2IGcHJvdG8z",
  )

/**
 * @generated from message entities.Collection
 */
export type Collection = Message<"entities.Collection"> & {
  /**
   * @generated from field: bytes id = 1;
   */
  id: Uint8Array

  /**
   * @generated from field: repeated bytes transaction_ids = 2;
   */
  transactionIds: Uint8Array[]
}

/**
 * Describes the message entities.Collection.
 * Use `create(CollectionSchema)` to create a new message.
 */
export const CollectionSchema: GenMessage<Collection> = /*@__PURE__*/
  messageDesc(file_flow_legacy_entities_collection, 0)

/**
 * @generated from message entities.CollectionGuarantee
 */
export type CollectionGuarantee = Message<"entities.CollectionGuarantee"> & {
  /**
   * @generated from field: bytes collection_id = 1;
   */
  collectionId: Uint8Array

  /**
   * @generated from field: repeated bytes signatures = 2;
   */
  signatures: Uint8Array[]
}

/**
 * Describes the message entities.CollectionGuarantee.
 * Use `create(CollectionGuaranteeSchema)` to create a new message.
 */
export const CollectionGuaranteeSchema: GenMessage<
  CollectionGuarantee
> = /*@__PURE__*/
  messageDesc(file_flow_legacy_entities_collection, 1)
