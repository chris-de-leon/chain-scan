import type { Session } from 'better-auth'
import { z } from 'zod'

const zSchema = z.object({
	limit: z.number().int().min(1),
	url: z.string().url(),
})

const handler = async (_: Session, input: z.infer<typeof zSchema>) => {
	const { Flow } = await import('@chain-scan/chains-flow')
	return await new Flow(input.url).getLatestBlocks(input.limit)
}

export const list = {
	schema: zSchema,
	handler,
}
