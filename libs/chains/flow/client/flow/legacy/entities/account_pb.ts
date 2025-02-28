// @generated by protoc-gen-es v2.2.3 with parameter "import_extension=ts,target=ts"
// @generated from file flow/legacy/entities/account.proto (package entities, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1"
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/legacy/entities/account.proto.
 */
export const file_flow_legacy_entities_account: GenFile = /*@__PURE__*/
  fileDesc(
    "CiJmbG93L2xlZ2FjeS9lbnRpdGllcy9hY2NvdW50LnByb3RvEghlbnRpdGllcyJdCgdBY2NvdW50Eg8KB2FkZHJlc3MYASABKAwSDwoHYmFsYW5jZRgCIAEoBBIMCgRjb2RlGAMgASgMEiIKBGtleXMYBCADKAsyFC5lbnRpdGllcy5BY2NvdW50S2V5In4KCkFjY291bnRLZXkSDQoFaW5kZXgYASABKA0SEgoKcHVibGljX2tleRgCIAEoDBIRCglzaWduX2FsZ28YAyABKA0SEQoJaGFzaF9hbGdvGAQgASgNEg4KBndlaWdodBgFIAEoDRIXCg9zZXF1ZW5jZV9udW1iZXIYBiABKA1CXgojb3JnLm9uZmxvdy5wcm90b2J1Zi5sZWdhY3kuZW50aXRpZXNaN2dpdGh1Yi5jb20vb25mbG93L2Zsb3cvcHJvdG9idWYvZ28vZmxvdy9sZWdhY3kvZW50aXRpZXNiBnByb3RvMw",
  )

/**
 * @generated from message entities.Account
 */
export type Account = Message<"entities.Account"> & {
  /**
   * @generated from field: bytes address = 1;
   */
  address: Uint8Array

  /**
   * @generated from field: uint64 balance = 2;
   */
  balance: bigint

  /**
   * @generated from field: bytes code = 3;
   */
  code: Uint8Array

  /**
   * @generated from field: repeated entities.AccountKey keys = 4;
   */
  keys: AccountKey[]
}

/**
 * Describes the message entities.Account.
 * Use `create(AccountSchema)` to create a new message.
 */
export const AccountSchema: GenMessage<Account> = /*@__PURE__*/
  messageDesc(file_flow_legacy_entities_account, 0)

/**
 * @generated from message entities.AccountKey
 */
export type AccountKey = Message<"entities.AccountKey"> & {
  /**
   * @generated from field: uint32 index = 1;
   */
  index: number

  /**
   * @generated from field: bytes public_key = 2;
   */
  publicKey: Uint8Array

  /**
   * @generated from field: uint32 sign_algo = 3;
   */
  signAlgo: number

  /**
   * @generated from field: uint32 hash_algo = 4;
   */
  hashAlgo: number

  /**
   * @generated from field: uint32 weight = 5;
   */
  weight: number

  /**
   * @generated from field: uint32 sequence_number = 6;
   */
  sequenceNumber: number
}

/**
 * Describes the message entities.AccountKey.
 * Use `create(AccountKeySchema)` to create a new message.
 */
export const AccountKeySchema: GenMessage<AccountKey> = /*@__PURE__*/
  messageDesc(file_flow_legacy_entities_account, 1)
