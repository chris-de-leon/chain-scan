// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file flow/entities/block_execution_data.proto (package flow.entities, syntax proto3)

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1"
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1"
import type { Event } from "./event_pb"
import { file_flow_entities_event } from "./event_pb"
import type { Transaction } from "./transaction_pb"
import { file_flow_entities_transaction } from "./transaction_pb"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/entities/block_execution_data.proto.
 */
export const file_flow_entities_block_execution_data: GenFile =
  /*@__PURE__*/
  fileDesc(
    "CihmbG93L2VudGl0aWVzL2Jsb2NrX2V4ZWN1dGlvbl9kYXRhLnByb3RvEg1mbG93LmVudGl0aWVzImcKEkJsb2NrRXhlY3V0aW9uRGF0YRIQCghibG9ja19pZBgBIAEoDBI/ChRjaHVua19leGVjdXRpb25fZGF0YRgCIAMoCzIhLmZsb3cuZW50aXRpZXMuQ2h1bmtFeGVjdXRpb25EYXRhIvEBChJDaHVua0V4ZWN1dGlvbkRhdGESOgoKY29sbGVjdGlvbhgBIAEoCzImLmZsb3cuZW50aXRpZXMuRXhlY3V0aW9uRGF0YUNvbGxlY3Rpb24SJAoGZXZlbnRzGAIgAygLMhQuZmxvdy5lbnRpdGllcy5FdmVudBItCgp0cmllVXBkYXRlGAMgASgLMhkuZmxvdy5lbnRpdGllcy5UcmllVXBkYXRlEkoKE3RyYW5zYWN0aW9uX3Jlc3VsdHMYBCADKAsyLS5mbG93LmVudGl0aWVzLkV4ZWN1dGlvbkRhdGFUcmFuc2FjdGlvblJlc3VsdCJLChdFeGVjdXRpb25EYXRhQ29sbGVjdGlvbhIwCgx0cmFuc2FjdGlvbnMYASADKAsyGi5mbG93LmVudGl0aWVzLlRyYW5zYWN0aW9uIlgKClRyaWVVcGRhdGUSEQoJcm9vdF9oYXNoGAEgASgMEg0KBXBhdGhzGAIgAygMEigKCHBheWxvYWRzGAMgAygLMhYuZmxvdy5lbnRpdGllcy5QYXlsb2FkIkEKB1BheWxvYWQSJwoHa2V5UGFydBgBIAMoCzIWLmZsb3cuZW50aXRpZXMuS2V5UGFydBINCgV2YWx1ZRgCIAEoDCImCgdLZXlQYXJ0EgwKBHR5cGUYASABKA0SDQoFdmFsdWUYAiABKAwiYgoeRXhlY3V0aW9uRGF0YVRyYW5zYWN0aW9uUmVzdWx0EhYKDnRyYW5zYWN0aW9uX2lkGAEgASgMEg4KBmZhaWxlZBgCIAEoCBIYChBjb21wdXRhdGlvbl91c2VkGAMgASgEQlAKHG9yZy5vbmZsb3cucHJvdG9idWYuZW50aXRpZXNaMGdpdGh1Yi5jb20vb25mbG93L2Zsb3cvcHJvdG9idWYvZ28vZmxvdy9lbnRpdGllc2IGcHJvdG8z",
    [file_flow_entities_event, file_flow_entities_transaction],
  )

/**
 * BlockExecutionData represents the collection of data produced while execiting the block.
 *
 * @generated from message flow.entities.BlockExecutionData
 */
export type BlockExecutionData = Message<"flow.entities.BlockExecutionData"> & {
  /**
   * Block ID of the block that was executed.
   *
   * @generated from field: bytes block_id = 1;
   */
  blockId: Uint8Array

  /**
   * Ordered list of ChunkExecutionData produced while executing the block.
   *
   * Note: there will be one ChunkExecutionData per collection in the block, plus one for the
   * service chunk. The service chunk is executed last and is always the last chunk in the list.
   *
   * @generated from field: repeated flow.entities.ChunkExecutionData chunk_execution_data = 2;
   */
  chunkExecutionData: ChunkExecutionData[]
}

/**
 * Describes the message flow.entities.BlockExecutionData.
 * Use `create(BlockExecutionDataSchema)` to create a new message.
 */
export const BlockExecutionDataSchema: GenMessage<BlockExecutionData> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_execution_data, 0)

/**
 * ChunkExecutionData represents the collection of data produced while executing a chunk.
 *
 * @generated from message flow.entities.ChunkExecutionData
 */
export type ChunkExecutionData = Message<"flow.entities.ChunkExecutionData"> & {
  /**
   * Ordered list of transactions included in the collection that was executed in the chunk.
   *
   * @generated from field: flow.entities.ExecutionDataCollection collection = 1;
   */
  collection?: ExecutionDataCollection

  /**
   * Events emitted by transactions in the collection.
   *
   * Note: events listed in the last ChunkExecutionData in the BlockExecutionData were emitted by
   * the service transaction. Some, but not all, of these events are service events.
   *
   * @generated from field: repeated flow.entities.Event events = 2;
   */
  events: Event[]

  /**
   * TrieUpdate produced by executing the collection.
   *
   * TrieUpdates contain a list of registers that were modified during chunk execution. The value
   * included is the new value of the register.
   *
   * @generated from field: flow.entities.TrieUpdate trieUpdate = 3;
   */
  trieUpdate?: TrieUpdate

  /**
   * Transaction results produced by executing the collection.
   *
   * Note: these are not the same type of results returned by other RPCs. These results are sepcific
   * to execution data. The most notable difference is they only include a boolean value to indicate
   * whether or not an error was encountered during execution, not the error itself.
   *
   * @generated from field: repeated flow.entities.ExecutionDataTransactionResult transaction_results = 4;
   */
  transactionResults: ExecutionDataTransactionResult[]
}

/**
 * Describes the message flow.entities.ChunkExecutionData.
 * Use `create(ChunkExecutionDataSchema)` to create a new message.
 */
export const ChunkExecutionDataSchema: GenMessage<ChunkExecutionData> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_execution_data, 1)

/**
 * ExecutionDataCollection represents the collection of transactions that were executed within a chunk.
 *
 * Note: this is not the same type as the entities.Collection.
 *
 * @generated from message flow.entities.ExecutionDataCollection
 */
export type ExecutionDataCollection =
  Message<"flow.entities.ExecutionDataCollection"> & {
    /**
     * List of transactions included in the collection.
     *
     * @generated from field: repeated flow.entities.Transaction transactions = 1;
     */
    transactions: Transaction[]
  }

/**
 * Describes the message flow.entities.ExecutionDataCollection.
 * Use `create(ExecutionDataCollectionSchema)` to create a new message.
 */
export const ExecutionDataCollectionSchema: GenMessage<ExecutionDataCollection> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_execution_data, 2)

/**
 * TrieUpdate produced by executing the collection.
 *
 * TrieUpdates contain a list of registers that were modified during chunk execution. The value
 * included is the new value of the register.
 *
 * @generated from message flow.entities.TrieUpdate
 */
export type TrieUpdate = Message<"flow.entities.TrieUpdate"> & {
  /**
   * RootHash is the root hash of the trie before the update is applied.
   *
   * @generated from field: bytes root_hash = 1;
   */
  rootHash: Uint8Array

  /**
   * List of register paths updated.
   *
   * Note: paths and payloads map 1:1 with eachother. i.e. for each element in path, the value in
   * payloads at the same index is the value of the register at that path.
   *
   * @generated from field: repeated bytes paths = 2;
   */
  paths: Uint8Array[]

  /**
   * List of register values updated.
   *
   * Note: paths and payloads map 1:1 with eachother. i.e. for each element in path, the value in
   * payloads at the same index is the value of the register at that path.
   *
   * @generated from field: repeated flow.entities.Payload payloads = 3;
   */
  payloads: Payload[]
}

/**
 * Describes the message flow.entities.TrieUpdate.
 * Use `create(TrieUpdateSchema)` to create a new message.
 */
export const TrieUpdateSchema: GenMessage<TrieUpdate> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_execution_data, 3)

/**
 * Payload represents the key-value pair of a register.
 *
 * @generated from message flow.entities.Payload
 */
export type Payload = Message<"flow.entities.Payload"> & {
  /**
   * List of key parts that make up the register key.
   * Can be converted into register id.
   *
   * @generated from field: repeated flow.entities.KeyPart keyPart = 1;
   */
  keyPart: KeyPart[]

  /**
   * Value of the register.
   *
   * @generated from field: bytes value = 2;
   */
  value: Uint8Array
}

/**
 * Describes the message flow.entities.Payload.
 * Use `create(PayloadSchema)` to create a new message.
 */
export const PayloadSchema: GenMessage<Payload> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_execution_data, 4)

/**
 * KeyPart represents a part of a register key.
 *
 * @generated from message flow.entities.KeyPart
 */
export type KeyPart = Message<"flow.entities.KeyPart"> & {
  /**
   * Type of the key part.
   *
   * @generated from field: uint32 type = 1;
   */
  type: number

  /**
   * Value of the key part.
   *
   * @generated from field: bytes value = 2;
   */
  value: Uint8Array
}

/**
 * Describes the message flow.entities.KeyPart.
 * Use `create(KeyPartSchema)` to create a new message.
 */
export const KeyPartSchema: GenMessage<KeyPart> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_execution_data, 5)

/**
 * ExecutionDataTransactionResult represents the result of executing a transaction.
 *
 * @generated from message flow.entities.ExecutionDataTransactionResult
 */
export type ExecutionDataTransactionResult =
  Message<"flow.entities.ExecutionDataTransactionResult"> & {
    /**
     * Transaction ID of the transaction that was executed.
     *
     * @generated from field: bytes transaction_id = 1;
     */
    transactionId: Uint8Array

    /**
     * Boolean indicating whether or not the transaction's execution failed with an error.
     *
     * @generated from field: bool failed = 2;
     */
    failed: boolean

    /**
     * Amount of computation used during execution.
     *
     * @generated from field: uint64 computation_used = 3;
     */
    computationUsed: bigint
  }

/**
 * Describes the message flow.entities.ExecutionDataTransactionResult.
 * Use `create(ExecutionDataTransactionResultSchema)` to create a new message.
 */
export const ExecutionDataTransactionResultSchema: GenMessage<ExecutionDataTransactionResult> =
  /*@__PURE__*/
  messageDesc(file_flow_entities_block_execution_data, 6)
