// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file flow/execution/execution.proto (package flow.execution, syntax proto3)

import type {
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv1"
import {
  fileDesc,
  messageDesc,
  serviceDesc,
} from "@bufbuild/protobuf/codegenv1"
import type { Account } from "../entities/account_pb"
import { file_flow_entities_account } from "../entities/account_pb"
import type { BlockHeader } from "../entities/block_header_pb"
import { file_flow_entities_block_header } from "../entities/block_header_pb"
import type { Event, EventEncodingVersion } from "../entities/event_pb"
import { file_flow_entities_event } from "../entities/event_pb"
import { file_flow_entities_transaction } from "../entities/transaction_pb"
import type { Message } from "@bufbuild/protobuf"

/**
 * Describes the file flow/execution/execution.proto.
 */
export const file_flow_execution_execution: GenFile =
  /*@__PURE__*/
  fileDesc(
    "Ch5mbG93L2V4ZWN1dGlvbi9leGVjdXRpb24ucHJvdG8SDmZsb3cuZXhlY3V0aW9uIg0KC1BpbmdSZXF1ZXN0Ig4KDFBpbmdSZXNwb25zZSI/ChpHZXRBY2NvdW50QXRCbG9ja0lEUmVxdWVzdBIQCghibG9ja19pZBgBIAEoDBIPCgdhZGRyZXNzGAIgASgMIkYKG0dldEFjY291bnRBdEJsb2NrSURSZXNwb25zZRInCgdhY2NvdW50GAEgASgLMhYuZmxvdy5lbnRpdGllcy5BY2NvdW50IlQKHUV4ZWN1dGVTY3JpcHRBdEJsb2NrSURSZXF1ZXN0EhAKCGJsb2NrX2lkGAEgASgMEg4KBnNjcmlwdBgCIAEoDBIRCglhcmd1bWVudHMYAyADKAwiSgoeRXhlY3V0ZVNjcmlwdEF0QmxvY2tJRFJlc3BvbnNlEg0KBXZhbHVlGAEgASgMEhkKEWNvbXB1dGF0aW9uX3VzYWdlGAIgASgEIoECChxHZXRFdmVudHNGb3JCbG9ja0lEc1Jlc3BvbnNlEkQKB3Jlc3VsdHMYASADKAsyMy5mbG93LmV4ZWN1dGlvbi5HZXRFdmVudHNGb3JCbG9ja0lEc1Jlc3BvbnNlLlJlc3VsdBJDChZldmVudF9lbmNvZGluZ192ZXJzaW9uGAIgASgOMiMuZmxvdy5lbnRpdGllcy5FdmVudEVuY29kaW5nVmVyc2lvbhpWCgZSZXN1bHQSEAoIYmxvY2tfaWQYASABKAwSFAoMYmxvY2tfaGVpZ2h0GAIgASgEEiQKBmV2ZW50cxgDIAMoCzIULmZsb3cuZW50aXRpZXMuRXZlbnQiPgobR2V0RXZlbnRzRm9yQmxvY2tJRHNSZXF1ZXN0EgwKBHR5cGUYASABKAkSEQoJYmxvY2tfaWRzGAIgAygMIkcKG0dldFRyYW5zYWN0aW9uUmVzdWx0UmVxdWVzdBIQCghibG9ja19pZBgBIAEoDBIWCg50cmFuc2FjdGlvbl9pZBgCIAEoDCI/ChxHZXRUcmFuc2FjdGlvbkJ5SW5kZXhSZXF1ZXN0EhAKCGJsb2NrX2lkGAEgASgMEg0KBWluZGV4GAIgASgNItABChxHZXRUcmFuc2FjdGlvblJlc3VsdFJlc3BvbnNlEhMKC3N0YXR1c19jb2RlGAEgASgNEhUKDWVycm9yX21lc3NhZ2UYAiABKAkSJAoGZXZlbnRzGAMgAygLMhQuZmxvdy5lbnRpdGllcy5FdmVudBJDChZldmVudF9lbmNvZGluZ192ZXJzaW9uGAQgASgOMiMuZmxvdy5lbnRpdGllcy5FdmVudEVuY29kaW5nVmVyc2lvbhIZChFjb21wdXRhdGlvbl91c2FnZRgFIAEoBCIzCh9HZXRUcmFuc2FjdGlvbnNCeUJsb2NrSURSZXF1ZXN0EhAKCGJsb2NrX2lkGAEgASgMIq8BCh1HZXRUcmFuc2FjdGlvblJlc3VsdHNSZXNwb25zZRJJChN0cmFuc2FjdGlvbl9yZXN1bHRzGAEgAygLMiwuZmxvdy5leGVjdXRpb24uR2V0VHJhbnNhY3Rpb25SZXN1bHRSZXNwb25zZRJDChZldmVudF9lbmNvZGluZ192ZXJzaW9uGAIgASgOMiMuZmxvdy5lbnRpdGllcy5FdmVudEVuY29kaW5nVmVyc2lvbiJNCiFHZXRUcmFuc2FjdGlvbkVycm9yTWVzc2FnZVJlcXVlc3QSEAoIYmxvY2tfaWQYASABKAwSFgoOdHJhbnNhY3Rpb25faWQYAiABKAwiSwooR2V0VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VCeUluZGV4UmVxdWVzdBIQCghibG9ja19pZBgBIAEoDBINCgVpbmRleBgCIAEoDSJTCiJHZXRUcmFuc2FjdGlvbkVycm9yTWVzc2FnZVJlc3BvbnNlEhYKDnRyYW5zYWN0aW9uX2lkGAEgASgMEhUKDWVycm9yX21lc3NhZ2UYAiABKAkiPworR2V0VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VzQnlCbG9ja0lEUmVxdWVzdBIQCghibG9ja19pZBgBIAEoDCK6AQojR2V0VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VzUmVzcG9uc2USSwoHcmVzdWx0cxgBIAMoCzI6LmZsb3cuZXhlY3V0aW9uLkdldFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlc1Jlc3BvbnNlLlJlc3VsdBpGCgZSZXN1bHQSFgoOdHJhbnNhY3Rpb25faWQYASABKAwSDQoFaW5kZXgYAiABKA0SFQoNZXJyb3JfbWVzc2FnZRgDIAEoCSJjChtHZXRSZWdpc3RlckF0QmxvY2tJRFJlcXVlc3QSEAoIYmxvY2tfaWQYASABKAwSFgoOcmVnaXN0ZXJfb3duZXIYAiABKAwSFAoMcmVnaXN0ZXJfa2V5GAQgASgMSgQIAxAEIi0KHEdldFJlZ2lzdGVyQXRCbG9ja0lEUmVzcG9uc2USDQoFdmFsdWUYASABKAwiMAobR2V0TGF0ZXN0QmxvY2tIZWFkZXJSZXF1ZXN0EhEKCWlzX3NlYWxlZBgBIAEoCCInChlHZXRCbG9ja0hlYWRlckJ5SURSZXF1ZXN0EgoKAmlkGAEgASgMIkAKE0Jsb2NrSGVhZGVyUmVzcG9uc2USKQoFYmxvY2sYASABKAsyGi5mbG93LmVudGl0aWVzLkJsb2NrSGVhZGVyIkIKKkdldFRyYW5zYWN0aW9uRXhlY3V0aW9uTWV0cmljc0FmdGVyUmVxdWVzdBIUCgxibG9ja19oZWlnaHQYASABKAQi7QMKK0dldFRyYW5zYWN0aW9uRXhlY3V0aW9uTWV0cmljc0FmdGVyUmVzcG9uc2USUwoHcmVzdWx0cxgBIAMoCzJCLmZsb3cuZXhlY3V0aW9uLkdldFRyYW5zYWN0aW9uRXhlY3V0aW9uTWV0cmljc0FmdGVyUmVzcG9uc2UuUmVzdWx0GjUKFUV4ZWN1dGlvbkVmZm9ydFdlaWdodBIMCgRraW5kGAEgASgEEg4KBndlaWdodBgCIAEoBBqyAQoLVHJhbnNhY3Rpb24SFgoOdHJhbnNhY3Rpb25faWQYASABKAwSFgoOZXhlY3V0aW9uX3RpbWUYAiABKAQScwoYZXhlY3V0aW9uX2VmZm9ydF93ZWlnaHRzGAMgAygLMlEuZmxvdy5leGVjdXRpb24uR2V0VHJhbnNhY3Rpb25FeGVjdXRpb25NZXRyaWNzQWZ0ZXJSZXNwb25zZS5FeGVjdXRpb25FZmZvcnRXZWlnaHQafQoGUmVzdWx0EhQKDGJsb2NrX2hlaWdodBgBIAEoBBJdCgx0cmFuc2FjdGlvbnMYAiADKAsyRy5mbG93LmV4ZWN1dGlvbi5HZXRUcmFuc2FjdGlvbkV4ZWN1dGlvbk1ldHJpY3NBZnRlclJlc3BvbnNlLlRyYW5zYWN0aW9uMrcNCgxFeGVjdXRpb25BUEkSQQoEUGluZxIbLmZsb3cuZXhlY3V0aW9uLlBpbmdSZXF1ZXN0GhwuZmxvdy5leGVjdXRpb24uUGluZ1Jlc3BvbnNlEm4KE0dldEFjY291bnRBdEJsb2NrSUQSKi5mbG93LmV4ZWN1dGlvbi5HZXRBY2NvdW50QXRCbG9ja0lEUmVxdWVzdBorLmZsb3cuZXhlY3V0aW9uLkdldEFjY291bnRBdEJsb2NrSURSZXNwb25zZRJ3ChZFeGVjdXRlU2NyaXB0QXRCbG9ja0lEEi0uZmxvdy5leGVjdXRpb24uRXhlY3V0ZVNjcmlwdEF0QmxvY2tJRFJlcXVlc3QaLi5mbG93LmV4ZWN1dGlvbi5FeGVjdXRlU2NyaXB0QXRCbG9ja0lEUmVzcG9uc2UScQoUR2V0RXZlbnRzRm9yQmxvY2tJRHMSKy5mbG93LmV4ZWN1dGlvbi5HZXRFdmVudHNGb3JCbG9ja0lEc1JlcXVlc3QaLC5mbG93LmV4ZWN1dGlvbi5HZXRFdmVudHNGb3JCbG9ja0lEc1Jlc3BvbnNlEnEKFEdldFRyYW5zYWN0aW9uUmVzdWx0EisuZmxvdy5leGVjdXRpb24uR2V0VHJhbnNhY3Rpb25SZXN1bHRSZXF1ZXN0GiwuZmxvdy5leGVjdXRpb24uR2V0VHJhbnNhY3Rpb25SZXN1bHRSZXNwb25zZRJ5ChtHZXRUcmFuc2FjdGlvblJlc3VsdEJ5SW5kZXgSLC5mbG93LmV4ZWN1dGlvbi5HZXRUcmFuc2FjdGlvbkJ5SW5kZXhSZXF1ZXN0GiwuZmxvdy5leGVjdXRpb24uR2V0VHJhbnNhY3Rpb25SZXN1bHRSZXNwb25zZRKAAQoeR2V0VHJhbnNhY3Rpb25SZXN1bHRzQnlCbG9ja0lEEi8uZmxvdy5leGVjdXRpb24uR2V0VHJhbnNhY3Rpb25zQnlCbG9ja0lEUmVxdWVzdBotLmZsb3cuZXhlY3V0aW9uLkdldFRyYW5zYWN0aW9uUmVzdWx0c1Jlc3BvbnNlEoMBChpHZXRUcmFuc2FjdGlvbkVycm9yTWVzc2FnZRIxLmZsb3cuZXhlY3V0aW9uLkdldFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlUmVxdWVzdBoyLmZsb3cuZXhlY3V0aW9uLkdldFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlUmVzcG9uc2USkQEKIUdldFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlQnlJbmRleBI4LmZsb3cuZXhlY3V0aW9uLkdldFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlQnlJbmRleFJlcXVlc3QaMi5mbG93LmV4ZWN1dGlvbi5HZXRUcmFuc2FjdGlvbkVycm9yTWVzc2FnZVJlc3BvbnNlEpgBCiRHZXRUcmFuc2FjdGlvbkVycm9yTWVzc2FnZXNCeUJsb2NrSUQSOy5mbG93LmV4ZWN1dGlvbi5HZXRUcmFuc2FjdGlvbkVycm9yTWVzc2FnZXNCeUJsb2NrSURSZXF1ZXN0GjMuZmxvdy5leGVjdXRpb24uR2V0VHJhbnNhY3Rpb25FcnJvck1lc3NhZ2VzUmVzcG9uc2UScQoUR2V0UmVnaXN0ZXJBdEJsb2NrSUQSKy5mbG93LmV4ZWN1dGlvbi5HZXRSZWdpc3RlckF0QmxvY2tJRFJlcXVlc3QaLC5mbG93LmV4ZWN1dGlvbi5HZXRSZWdpc3RlckF0QmxvY2tJRFJlc3BvbnNlEmgKFEdldExhdGVzdEJsb2NrSGVhZGVyEisuZmxvdy5leGVjdXRpb24uR2V0TGF0ZXN0QmxvY2tIZWFkZXJSZXF1ZXN0GiMuZmxvdy5leGVjdXRpb24uQmxvY2tIZWFkZXJSZXNwb25zZRJkChJHZXRCbG9ja0hlYWRlckJ5SUQSKS5mbG93LmV4ZWN1dGlvbi5HZXRCbG9ja0hlYWRlckJ5SURSZXF1ZXN0GiMuZmxvdy5leGVjdXRpb24uQmxvY2tIZWFkZXJSZXNwb25zZRKeAQojR2V0VHJhbnNhY3Rpb25FeGVjdXRpb25NZXRyaWNzQWZ0ZXISOi5mbG93LmV4ZWN1dGlvbi5HZXRUcmFuc2FjdGlvbkV4ZWN1dGlvbk1ldHJpY3NBZnRlclJlcXVlc3QaOy5mbG93LmV4ZWN1dGlvbi5HZXRUcmFuc2FjdGlvbkV4ZWN1dGlvbk1ldHJpY3NBZnRlclJlc3BvbnNlQlIKHW9yZy5vbmZsb3cucHJvdG9idWYuZXhlY3V0aW9uWjFnaXRodWIuY29tL29uZmxvdy9mbG93L3Byb3RvYnVmL2dvL2Zsb3cvZXhlY3V0aW9uYgZwcm90bzM",
    [
      file_flow_entities_account,
      file_flow_entities_block_header,
      file_flow_entities_event,
      file_flow_entities_transaction,
    ],
  )

/**
 * @generated from message flow.execution.PingRequest
 */
export type PingRequest = Message<"flow.execution.PingRequest"> & {}

/**
 * Describes the message flow.execution.PingRequest.
 * Use `create(PingRequestSchema)` to create a new message.
 */
export const PingRequestSchema: GenMessage<PingRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 0)

/**
 * @generated from message flow.execution.PingResponse
 */
export type PingResponse = Message<"flow.execution.PingResponse"> & {}

/**
 * Describes the message flow.execution.PingResponse.
 * Use `create(PingResponseSchema)` to create a new message.
 */
export const PingResponseSchema: GenMessage<PingResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 1)

/**
 * @generated from message flow.execution.GetAccountAtBlockIDRequest
 */
export type GetAccountAtBlockIDRequest =
  Message<"flow.execution.GetAccountAtBlockIDRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: bytes address = 2;
     */
    address: Uint8Array
  }

/**
 * Describes the message flow.execution.GetAccountAtBlockIDRequest.
 * Use `create(GetAccountAtBlockIDRequestSchema)` to create a new message.
 */
export const GetAccountAtBlockIDRequestSchema: GenMessage<GetAccountAtBlockIDRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 2)

/**
 * @generated from message flow.execution.GetAccountAtBlockIDResponse
 */
export type GetAccountAtBlockIDResponse =
  Message<"flow.execution.GetAccountAtBlockIDResponse"> & {
    /**
     * @generated from field: flow.entities.Account account = 1;
     */
    account?: Account
  }

/**
 * Describes the message flow.execution.GetAccountAtBlockIDResponse.
 * Use `create(GetAccountAtBlockIDResponseSchema)` to create a new message.
 */
export const GetAccountAtBlockIDResponseSchema: GenMessage<GetAccountAtBlockIDResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 3)

/**
 * @generated from message flow.execution.ExecuteScriptAtBlockIDRequest
 */
export type ExecuteScriptAtBlockIDRequest =
  Message<"flow.execution.ExecuteScriptAtBlockIDRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: bytes script = 2;
     */
    script: Uint8Array

    /**
     * @generated from field: repeated bytes arguments = 3;
     */
    arguments: Uint8Array[]
  }

/**
 * Describes the message flow.execution.ExecuteScriptAtBlockIDRequest.
 * Use `create(ExecuteScriptAtBlockIDRequestSchema)` to create a new message.
 */
export const ExecuteScriptAtBlockIDRequestSchema: GenMessage<ExecuteScriptAtBlockIDRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 4)

/**
 * @generated from message flow.execution.ExecuteScriptAtBlockIDResponse
 */
export type ExecuteScriptAtBlockIDResponse =
  Message<"flow.execution.ExecuteScriptAtBlockIDResponse"> & {
    /**
     * @generated from field: bytes value = 1;
     */
    value: Uint8Array

    /**
     * @generated from field: uint64 computation_usage = 2;
     */
    computationUsage: bigint
  }

/**
 * Describes the message flow.execution.ExecuteScriptAtBlockIDResponse.
 * Use `create(ExecuteScriptAtBlockIDResponseSchema)` to create a new message.
 */
export const ExecuteScriptAtBlockIDResponseSchema: GenMessage<ExecuteScriptAtBlockIDResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 5)

/**
 * @generated from message flow.execution.GetEventsForBlockIDsResponse
 */
export type GetEventsForBlockIDsResponse =
  Message<"flow.execution.GetEventsForBlockIDsResponse"> & {
    /**
     * @generated from field: repeated flow.execution.GetEventsForBlockIDsResponse.Result results = 1;
     */
    results: GetEventsForBlockIDsResponse_Result[]

    /**
     * @generated from field: flow.entities.EventEncodingVersion event_encoding_version = 2;
     */
    eventEncodingVersion: EventEncodingVersion
  }

/**
 * Describes the message flow.execution.GetEventsForBlockIDsResponse.
 * Use `create(GetEventsForBlockIDsResponseSchema)` to create a new message.
 */
export const GetEventsForBlockIDsResponseSchema: GenMessage<GetEventsForBlockIDsResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 6)

/**
 * @generated from message flow.execution.GetEventsForBlockIDsResponse.Result
 */
export type GetEventsForBlockIDsResponse_Result =
  Message<"flow.execution.GetEventsForBlockIDsResponse.Result"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: uint64 block_height = 2;
     */
    blockHeight: bigint

    /**
     * @generated from field: repeated flow.entities.Event events = 3;
     */
    events: Event[]
  }

/**
 * Describes the message flow.execution.GetEventsForBlockIDsResponse.Result.
 * Use `create(GetEventsForBlockIDsResponse_ResultSchema)` to create a new message.
 */
export const GetEventsForBlockIDsResponse_ResultSchema: GenMessage<GetEventsForBlockIDsResponse_Result> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 6, 0)

/**
 * @generated from message flow.execution.GetEventsForBlockIDsRequest
 */
export type GetEventsForBlockIDsRequest =
  Message<"flow.execution.GetEventsForBlockIDsRequest"> & {
    /**
     * @generated from field: string type = 1;
     */
    type: string

    /**
     * @generated from field: repeated bytes block_ids = 2;
     */
    blockIds: Uint8Array[]
  }

/**
 * Describes the message flow.execution.GetEventsForBlockIDsRequest.
 * Use `create(GetEventsForBlockIDsRequestSchema)` to create a new message.
 */
export const GetEventsForBlockIDsRequestSchema: GenMessage<GetEventsForBlockIDsRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 7)

/**
 * @generated from message flow.execution.GetTransactionResultRequest
 */
export type GetTransactionResultRequest =
  Message<"flow.execution.GetTransactionResultRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: bytes transaction_id = 2;
     */
    transactionId: Uint8Array
  }

/**
 * Describes the message flow.execution.GetTransactionResultRequest.
 * Use `create(GetTransactionResultRequestSchema)` to create a new message.
 */
export const GetTransactionResultRequestSchema: GenMessage<GetTransactionResultRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 8)

/**
 * @generated from message flow.execution.GetTransactionByIndexRequest
 */
export type GetTransactionByIndexRequest =
  Message<"flow.execution.GetTransactionByIndexRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: uint32 index = 2;
     */
    index: number
  }

/**
 * Describes the message flow.execution.GetTransactionByIndexRequest.
 * Use `create(GetTransactionByIndexRequestSchema)` to create a new message.
 */
export const GetTransactionByIndexRequestSchema: GenMessage<GetTransactionByIndexRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 9)

/**
 * @generated from message flow.execution.GetTransactionResultResponse
 */
export type GetTransactionResultResponse =
  Message<"flow.execution.GetTransactionResultResponse"> & {
    /**
     * @generated from field: uint32 status_code = 1;
     */
    statusCode: number

    /**
     * @generated from field: string error_message = 2;
     */
    errorMessage: string

    /**
     * @generated from field: repeated flow.entities.Event events = 3;
     */
    events: Event[]

    /**
     * @generated from field: flow.entities.EventEncodingVersion event_encoding_version = 4;
     */
    eventEncodingVersion: EventEncodingVersion

    /**
     * @generated from field: uint64 computation_usage = 5;
     */
    computationUsage: bigint
  }

/**
 * Describes the message flow.execution.GetTransactionResultResponse.
 * Use `create(GetTransactionResultResponseSchema)` to create a new message.
 */
export const GetTransactionResultResponseSchema: GenMessage<GetTransactionResultResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 10)

/**
 * @generated from message flow.execution.GetTransactionsByBlockIDRequest
 */
export type GetTransactionsByBlockIDRequest =
  Message<"flow.execution.GetTransactionsByBlockIDRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array
  }

/**
 * Describes the message flow.execution.GetTransactionsByBlockIDRequest.
 * Use `create(GetTransactionsByBlockIDRequestSchema)` to create a new message.
 */
export const GetTransactionsByBlockIDRequestSchema: GenMessage<GetTransactionsByBlockIDRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 11)

/**
 * @generated from message flow.execution.GetTransactionResultsResponse
 */
export type GetTransactionResultsResponse =
  Message<"flow.execution.GetTransactionResultsResponse"> & {
    /**
     * @generated from field: repeated flow.execution.GetTransactionResultResponse transaction_results = 1;
     */
    transactionResults: GetTransactionResultResponse[]

    /**
     * @generated from field: flow.entities.EventEncodingVersion event_encoding_version = 2;
     */
    eventEncodingVersion: EventEncodingVersion
  }

/**
 * Describes the message flow.execution.GetTransactionResultsResponse.
 * Use `create(GetTransactionResultsResponseSchema)` to create a new message.
 */
export const GetTransactionResultsResponseSchema: GenMessage<GetTransactionResultsResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 12)

/**
 * @generated from message flow.execution.GetTransactionErrorMessageRequest
 */
export type GetTransactionErrorMessageRequest =
  Message<"flow.execution.GetTransactionErrorMessageRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: bytes transaction_id = 2;
     */
    transactionId: Uint8Array
  }

/**
 * Describes the message flow.execution.GetTransactionErrorMessageRequest.
 * Use `create(GetTransactionErrorMessageRequestSchema)` to create a new message.
 */
export const GetTransactionErrorMessageRequestSchema: GenMessage<GetTransactionErrorMessageRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 13)

/**
 * @generated from message flow.execution.GetTransactionErrorMessageByIndexRequest
 */
export type GetTransactionErrorMessageByIndexRequest =
  Message<"flow.execution.GetTransactionErrorMessageByIndexRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: uint32 index = 2;
     */
    index: number
  }

/**
 * Describes the message flow.execution.GetTransactionErrorMessageByIndexRequest.
 * Use `create(GetTransactionErrorMessageByIndexRequestSchema)` to create a new message.
 */
export const GetTransactionErrorMessageByIndexRequestSchema: GenMessage<GetTransactionErrorMessageByIndexRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 14)

/**
 * @generated from message flow.execution.GetTransactionErrorMessageResponse
 */
export type GetTransactionErrorMessageResponse =
  Message<"flow.execution.GetTransactionErrorMessageResponse"> & {
    /**
     * @generated from field: bytes transaction_id = 1;
     */
    transactionId: Uint8Array

    /**
     * @generated from field: string error_message = 2;
     */
    errorMessage: string
  }

/**
 * Describes the message flow.execution.GetTransactionErrorMessageResponse.
 * Use `create(GetTransactionErrorMessageResponseSchema)` to create a new message.
 */
export const GetTransactionErrorMessageResponseSchema: GenMessage<GetTransactionErrorMessageResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 15)

/**
 * @generated from message flow.execution.GetTransactionErrorMessagesByBlockIDRequest
 */
export type GetTransactionErrorMessagesByBlockIDRequest =
  Message<"flow.execution.GetTransactionErrorMessagesByBlockIDRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array
  }

/**
 * Describes the message flow.execution.GetTransactionErrorMessagesByBlockIDRequest.
 * Use `create(GetTransactionErrorMessagesByBlockIDRequestSchema)` to create a new message.
 */
export const GetTransactionErrorMessagesByBlockIDRequestSchema: GenMessage<GetTransactionErrorMessagesByBlockIDRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 16)

/**
 * @generated from message flow.execution.GetTransactionErrorMessagesResponse
 */
export type GetTransactionErrorMessagesResponse =
  Message<"flow.execution.GetTransactionErrorMessagesResponse"> & {
    /**
     * @generated from field: repeated flow.execution.GetTransactionErrorMessagesResponse.Result results = 1;
     */
    results: GetTransactionErrorMessagesResponse_Result[]
  }

/**
 * Describes the message flow.execution.GetTransactionErrorMessagesResponse.
 * Use `create(GetTransactionErrorMessagesResponseSchema)` to create a new message.
 */
export const GetTransactionErrorMessagesResponseSchema: GenMessage<GetTransactionErrorMessagesResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 17)

/**
 * @generated from message flow.execution.GetTransactionErrorMessagesResponse.Result
 */
export type GetTransactionErrorMessagesResponse_Result =
  Message<"flow.execution.GetTransactionErrorMessagesResponse.Result"> & {
    /**
     * @generated from field: bytes transaction_id = 1;
     */
    transactionId: Uint8Array

    /**
     * @generated from field: uint32 index = 2;
     */
    index: number

    /**
     * @generated from field: string error_message = 3;
     */
    errorMessage: string
  }

/**
 * Describes the message flow.execution.GetTransactionErrorMessagesResponse.Result.
 * Use `create(GetTransactionErrorMessagesResponse_ResultSchema)` to create a new message.
 */
export const GetTransactionErrorMessagesResponse_ResultSchema: GenMessage<GetTransactionErrorMessagesResponse_Result> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 17, 0)

/**
 * @generated from message flow.execution.GetRegisterAtBlockIDRequest
 */
export type GetRegisterAtBlockIDRequest =
  Message<"flow.execution.GetRegisterAtBlockIDRequest"> & {
    /**
     * @generated from field: bytes block_id = 1;
     */
    blockId: Uint8Array

    /**
     * @generated from field: bytes register_owner = 2;
     */
    registerOwner: Uint8Array

    /**
     * bytes register_controller = 3; @deprecated
     *
     * @generated from field: bytes register_key = 4;
     */
    registerKey: Uint8Array
  }

/**
 * Describes the message flow.execution.GetRegisterAtBlockIDRequest.
 * Use `create(GetRegisterAtBlockIDRequestSchema)` to create a new message.
 */
export const GetRegisterAtBlockIDRequestSchema: GenMessage<GetRegisterAtBlockIDRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 18)

/**
 * @generated from message flow.execution.GetRegisterAtBlockIDResponse
 */
export type GetRegisterAtBlockIDResponse =
  Message<"flow.execution.GetRegisterAtBlockIDResponse"> & {
    /**
     * @generated from field: bytes value = 1;
     */
    value: Uint8Array
  }

/**
 * Describes the message flow.execution.GetRegisterAtBlockIDResponse.
 * Use `create(GetRegisterAtBlockIDResponseSchema)` to create a new message.
 */
export const GetRegisterAtBlockIDResponseSchema: GenMessage<GetRegisterAtBlockIDResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 19)

/**
 * @generated from message flow.execution.GetLatestBlockHeaderRequest
 */
export type GetLatestBlockHeaderRequest =
  Message<"flow.execution.GetLatestBlockHeaderRequest"> & {
    /**
     * @generated from field: bool is_sealed = 1;
     */
    isSealed: boolean
  }

/**
 * Describes the message flow.execution.GetLatestBlockHeaderRequest.
 * Use `create(GetLatestBlockHeaderRequestSchema)` to create a new message.
 */
export const GetLatestBlockHeaderRequestSchema: GenMessage<GetLatestBlockHeaderRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 20)

/**
 * @generated from message flow.execution.GetBlockHeaderByIDRequest
 */
export type GetBlockHeaderByIDRequest =
  Message<"flow.execution.GetBlockHeaderByIDRequest"> & {
    /**
     * @generated from field: bytes id = 1;
     */
    id: Uint8Array
  }

/**
 * Describes the message flow.execution.GetBlockHeaderByIDRequest.
 * Use `create(GetBlockHeaderByIDRequestSchema)` to create a new message.
 */
export const GetBlockHeaderByIDRequestSchema: GenMessage<GetBlockHeaderByIDRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 21)

/**
 * @generated from message flow.execution.BlockHeaderResponse
 */
export type BlockHeaderResponse =
  Message<"flow.execution.BlockHeaderResponse"> & {
    /**
     * @generated from field: flow.entities.BlockHeader block = 1;
     */
    block?: BlockHeader
  }

/**
 * Describes the message flow.execution.BlockHeaderResponse.
 * Use `create(BlockHeaderResponseSchema)` to create a new message.
 */
export const BlockHeaderResponseSchema: GenMessage<BlockHeaderResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 22)

/**
 * The request for GetTransactionExecutionMetricsAfter
 *
 * @generated from message flow.execution.GetTransactionExecutionMetricsAfterRequest
 */
export type GetTransactionExecutionMetricsAfterRequest =
  Message<"flow.execution.GetTransactionExecutionMetricsAfterRequest"> & {
    /**
     * Block height after which to get transaction execution metrics.
     * this block height will not be included in the response.
     *
     * @generated from field: uint64 block_height = 1;
     */
    blockHeight: bigint
  }

/**
 * Describes the message flow.execution.GetTransactionExecutionMetricsAfterRequest.
 * Use `create(GetTransactionExecutionMetricsAfterRequestSchema)` to create a new message.
 */
export const GetTransactionExecutionMetricsAfterRequestSchema: GenMessage<GetTransactionExecutionMetricsAfterRequest> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 23)

/**
 * The response for GetTransactionExecutionMetricsAfter
 * The response contains the execution metrics for transactions in each block
 * after the requested block height (block_height + 1). The execution node only keeps a limited
 * number of blocks in memory, so the response may not contain metrics for all
 * blocks. Only finalized and executed blocks will be in the response.
 * The blocks are sorted by block height in descending order.
 *
 * @generated from message flow.execution.GetTransactionExecutionMetricsAfterResponse
 */
export type GetTransactionExecutionMetricsAfterResponse =
  Message<"flow.execution.GetTransactionExecutionMetricsAfterResponse"> & {
    /**
     * a list of results for each block sorted by block height in
     * descending order
     *
     * @generated from field: repeated flow.execution.GetTransactionExecutionMetricsAfterResponse.Result results = 1;
     */
    results: GetTransactionExecutionMetricsAfterResponse_Result[]
  }

/**
 * Describes the message flow.execution.GetTransactionExecutionMetricsAfterResponse.
 * Use `create(GetTransactionExecutionMetricsAfterResponseSchema)` to create a new message.
 */
export const GetTransactionExecutionMetricsAfterResponseSchema: GenMessage<GetTransactionExecutionMetricsAfterResponse> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 24)

/**
 * the execution effort weight of a computation kind
 *
 * @generated from message flow.execution.GetTransactionExecutionMetricsAfterResponse.ExecutionEffortWeight
 */
export type GetTransactionExecutionMetricsAfterResponse_ExecutionEffortWeight =
  Message<"flow.execution.GetTransactionExecutionMetricsAfterResponse.ExecutionEffortWeight"> & {
    /**
     * computation kind id
     *
     * @generated from field: uint64 kind = 1;
     */
    kind: bigint

    /**
     * the weight of the computation kind
     *
     * @generated from field: uint64 weight = 2;
     */
    weight: bigint
  }

/**
 * Describes the message flow.execution.GetTransactionExecutionMetricsAfterResponse.ExecutionEffortWeight.
 * Use `create(GetTransactionExecutionMetricsAfterResponse_ExecutionEffortWeightSchema)` to create a new message.
 */
export const GetTransactionExecutionMetricsAfterResponse_ExecutionEffortWeightSchema: GenMessage<GetTransactionExecutionMetricsAfterResponse_ExecutionEffortWeight> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 24, 0)

/**
 * the data for one transaction
 *
 * @generated from message flow.execution.GetTransactionExecutionMetricsAfterResponse.Transaction
 */
export type GetTransactionExecutionMetricsAfterResponse_Transaction =
  Message<"flow.execution.GetTransactionExecutionMetricsAfterResponse.Transaction"> & {
    /**
     * the transaction id
     *
     * @generated from field: bytes transaction_id = 1;
     */
    transactionId: Uint8Array

    /**
     * the execution time of the transaction in nanoseconds
     *
     * @generated from field: uint64 execution_time = 2;
     */
    executionTime: bigint

    /**
     * the execution effort weights of the transaction
     *
     * @generated from field: repeated flow.execution.GetTransactionExecutionMetricsAfterResponse.ExecutionEffortWeight execution_effort_weights = 3;
     */
    executionEffortWeights: GetTransactionExecutionMetricsAfterResponse_ExecutionEffortWeight[]
  }

/**
 * Describes the message flow.execution.GetTransactionExecutionMetricsAfterResponse.Transaction.
 * Use `create(GetTransactionExecutionMetricsAfterResponse_TransactionSchema)` to create a new message.
 */
export const GetTransactionExecutionMetricsAfterResponse_TransactionSchema: GenMessage<GetTransactionExecutionMetricsAfterResponse_Transaction> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 24, 1)

/**
 * the data for one block
 *
 * @generated from message flow.execution.GetTransactionExecutionMetricsAfterResponse.Result
 */
export type GetTransactionExecutionMetricsAfterResponse_Result =
  Message<"flow.execution.GetTransactionExecutionMetricsAfterResponse.Result"> & {
    /**
     * the block height of the block
     *
     * @generated from field: uint64 block_height = 1;
     */
    blockHeight: bigint

    /**
     * the list of transactions in the block
     *
     * @generated from field: repeated flow.execution.GetTransactionExecutionMetricsAfterResponse.Transaction transactions = 2;
     */
    transactions: GetTransactionExecutionMetricsAfterResponse_Transaction[]
  }

/**
 * Describes the message flow.execution.GetTransactionExecutionMetricsAfterResponse.Result.
 * Use `create(GetTransactionExecutionMetricsAfterResponse_ResultSchema)` to create a new message.
 */
export const GetTransactionExecutionMetricsAfterResponse_ResultSchema: GenMessage<GetTransactionExecutionMetricsAfterResponse_Result> =
  /*@__PURE__*/
  messageDesc(file_flow_execution_execution, 24, 2)

/**
 * ExecutionAPI is the API provided by the execution nodes.
 *
 * @generated from service flow.execution.ExecutionAPI
 */
export const ExecutionAPI: GenService<{
  /**
   * Ping is used to check if the access node is alive and healthy.
   *
   * @generated from rpc flow.execution.ExecutionAPI.Ping
   */
  ping: {
    methodKind: "unary"
    input: typeof PingRequestSchema
    output: typeof PingResponseSchema
  }
  /**
   * GetAccountAtBlockID gets an account by address at the given block ID
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetAccountAtBlockID
   */
  getAccountAtBlockID: {
    methodKind: "unary"
    input: typeof GetAccountAtBlockIDRequestSchema
    output: typeof GetAccountAtBlockIDResponseSchema
  }
  /**
   * ExecuteScriptAtBlockID executes a ready-only Cadence script against the
   * execution state at the block with the given ID.
   *
   * @generated from rpc flow.execution.ExecutionAPI.ExecuteScriptAtBlockID
   */
  executeScriptAtBlockID: {
    methodKind: "unary"
    input: typeof ExecuteScriptAtBlockIDRequestSchema
    output: typeof ExecuteScriptAtBlockIDResponseSchema
  }
  /**
   * GetEventsForBlockIDs retrieves events for all the specified block IDs that
   * have the given type
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetEventsForBlockIDs
   */
  getEventsForBlockIDs: {
    methodKind: "unary"
    input: typeof GetEventsForBlockIDsRequestSchema
    output: typeof GetEventsForBlockIDsResponseSchema
  }
  /**
   * GetTransactionResult gets the result of a transaction.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetTransactionResult
   */
  getTransactionResult: {
    methodKind: "unary"
    input: typeof GetTransactionResultRequestSchema
    output: typeof GetTransactionResultResponseSchema
  }
  /**
   * GetTransactionResultByIndex gets the result of a transaction at the index.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetTransactionResultByIndex
   */
  getTransactionResultByIndex: {
    methodKind: "unary"
    input: typeof GetTransactionByIndexRequestSchema
    output: typeof GetTransactionResultResponseSchema
  }
  /**
   * GetTransactionResultByIndex gets the results of all transactions in the
   * block ordered by transaction index.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetTransactionResultsByBlockID
   */
  getTransactionResultsByBlockID: {
    methodKind: "unary"
    input: typeof GetTransactionsByBlockIDRequestSchema
    output: typeof GetTransactionResultsResponseSchema
  }
  /**
   * GetTransactionErrorMessage gets the error messages of a failed transaction
   * by id.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetTransactionErrorMessage
   */
  getTransactionErrorMessage: {
    methodKind: "unary"
    input: typeof GetTransactionErrorMessageRequestSchema
    output: typeof GetTransactionErrorMessageResponseSchema
  }
  /**
   * GetTransactionErrorMessageByIndex gets the error messages of a failed
   * transaction at the index.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetTransactionErrorMessageByIndex
   */
  getTransactionErrorMessageByIndex: {
    methodKind: "unary"
    input: typeof GetTransactionErrorMessageByIndexRequestSchema
    output: typeof GetTransactionErrorMessageResponseSchema
  }
  /**
   * GetTransactionErrorMessagesByBlockID gets the error messages of all failed
   * transactions in the block ordered by transaction index.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetTransactionErrorMessagesByBlockID
   */
  getTransactionErrorMessagesByBlockID: {
    methodKind: "unary"
    input: typeof GetTransactionErrorMessagesByBlockIDRequestSchema
    output: typeof GetTransactionErrorMessagesResponseSchema
  }
  /**
   * GetRegisterAtBlockID collects a register at the block with the given ID (if
   * available).
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetRegisterAtBlockID
   */
  getRegisterAtBlockID: {
    methodKind: "unary"
    input: typeof GetRegisterAtBlockIDRequestSchema
    output: typeof GetRegisterAtBlockIDResponseSchema
  }
  /**
   * GetLatestBlockHeader gets the latest sealed or unsealed block header.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetLatestBlockHeader
   */
  getLatestBlockHeader: {
    methodKind: "unary"
    input: typeof GetLatestBlockHeaderRequestSchema
    output: typeof BlockHeaderResponseSchema
  }
  /**
   * GetBlockHeaderByID gets a block header by ID.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetBlockHeaderByID
   */
  getBlockHeaderByID: {
    methodKind: "unary"
    input: typeof GetBlockHeaderByIDRequestSchema
    output: typeof BlockHeaderResponseSchema
  }
  /**
   * GetTransactionExecutionMetricsAfter gets the transaction execution metrics
   * for blocks after the given block height. The blocks will be sorted by
   * descending block height.
   * If no data is available for the given block height, the response will be
   * empty. The execution node will only store metrics for a limited number of
   * blocks,  so the request may return an empty response if the requested
   * block height is too far in the past.
   *
   * Errors:
   *  - No errors are expected.
   *
   * @generated from rpc flow.execution.ExecutionAPI.GetTransactionExecutionMetricsAfter
   */
  getTransactionExecutionMetricsAfter: {
    methodKind: "unary"
    input: typeof GetTransactionExecutionMetricsAfterRequestSchema
    output: typeof GetTransactionExecutionMetricsAfterResponseSchema
  }
}> = /*@__PURE__*/ serviceDesc(file_flow_execution_execution, 0)
