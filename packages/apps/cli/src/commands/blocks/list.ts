import { ChainClient } from "../../lib/client"
import { Command, Flags } from "@oclif/core"
import { formatJSON } from "../../lib/utils"
import { ChainType } from "../../lib/enums"
import { z } from "zod"

export default class BlocksList extends Command {
  static description = "Reads one or more blocks from the specified chain"

  static override flags = {
    chain: Flags.string({ options: Object.values(ChainType), required: true }),
    limit: Flags.integer({ default: 1, max: 25, min: 1, required: false }),
    url: Flags.url({ required: true }),
  }

  static override examples = [
    '<%= config.bin %> <%= command.id %> --chain="eth" --url="https://rpc.api.moononbeam.network"',
    '<%= config.bin %> <%= command.id %> --chain="solana" --url="https://api.devnet.solana.com"',
    '<%= config.bin %> <%= command.id %> --chain="tron" --url="https://api.tronongrid.io"',
    '<%= config.bin %> <%= command.id %> --chain="starknet" --url="https://starknetet-mainnet.public.blastapi.io/rpc/v0_7"',
    '<%= config.bin %> <%= command.id %> --chain="flow" --url="https://testnet.onflow.org"',
  ]

  public async run(): Promise<void> {
    const { flags } = await this.parse(BlocksList)

    const chainType = z.nativeEnum(ChainType).parse(flags.chain)
    const chainUrl = { url: flags.url.href }

    await ChainClient.build(chainType, chainUrl)
      .getLatestBlocks(flags.limit)
      .then((res) => this.log(formatJSON(res)))
  }
}
