import { Dimension, Player as McPlayer, Vector3, WorldAfterEvents, WorldBeforeEvents } from "@minecraft/server"

export async function require<T extends keyof Packages>(package: T): Promise<Packages[T]>
export const module: {
	(exports: Record<string, any>): void
	exports: Record<string, any>
}
export const server: import("@minecraft/server-gametest").Test

type MainPackages = {
	"@core": Core
	"@colors": void
	"@slash": Slash
	"@extras": Extras
}

type Packages = MainPackages & {
	[K in `@core::${keyof Core}` | `@slash::${keyof Slash}` | `@extras::${keyof Extras}`]: K extends `@core::${infer P}` ? Core[P] : K extends `@slash::${infer P}` ? Slash[P] : K extends `@extras::${infer P}` ? Extras[P] : never
}

type Core = {
	Event: Event
	ChunkData(location: { x: number, z: number }): {
		minX: number
		minZ: number
		maxX: number
		maxZ: number
		slime: boolean
	}
	Dimension: {
		overworld: Dimension
		nether: Dimension
		the_end: Dimension
	}
	World: {
		command(cmd: string): Promise<void>
		print(msg: string): void
		ephemeral(msg: string, sender: McPlayer): number
	}
	Player: typeof Player
	NBT: {
		Create(options: { name: string, type: "number" | "boolean" | "string", size?: number }): void
		Reader(event: Parameters<Parameters<WorldAfterEvents["worldInitialize"]["subscribe"]>[0]>[0]): void
		getData(name: string): string | number | boolean | undefined
		setData(name: string, value: string | number | boolean): void
	}
}

type Event = {
	follow<T extends keyof EventTypes>(event: T, call: EventTypes[T]): void
}

type AfterEventTypes = {
	[K in (`after/${keyof WorldAfterEvents}`)]: K extends `after/${infer P}` ? Parameters<WorldAfterEvents[P]["subscribe"]>[0] : never
}

type BeforeEventTypes = {
	[K in (`before/${keyof WorldBeforeEvents}`)]: K extends `before/${infer P}` ? Parameters<WorldBeforeEvents[P]["subscribe"]>[0] : never
}

type OtherEvents = {
	"spawn": Parameters<WorldAfterEvents["entitySpawn"]["subscribe"]>[0]
	"die": Parameters<WorldAfterEvents["entityDie"]["subscribe"]>[0]
	"break": Parameters<WorldAfterEvents["blockBreak"]["subscribe"]>[0]
	"place": Parameters<WorldAfterEvents["blockPlace"]["subscribe"]>[0]
}

type OtherEventTypes = {
	[K in `${keyof OtherEvents}::${string}`]: K extends `${infer P}::${string}` ? OtherEvents[P] : never
}

type EventTypes = AfterEventTypes & BeforeEventTypes & OtherEventTypes

class Player {
	username: string
	player: import("@minecraft/server-gametest").SimulatedPlayer
	constructor(name: string, coords: Vector3)
	disconnect(): boolean
	kill(): boolean
	respawn(): boolean
	jump(): boolean
	attack(): boolean
	use(slot: number = this.player.selectedSlot): boolean
	interact(): boolean
	swim(): boolean
	glide(): boolean
	fly(): boolean
	shift(): boolean
	rotate(degrees: number = 20): void
	wait(gt = 20): Promise<void>
	select(slot: number = 0): number
	async trident(): void
	drop(): void
	stop(): void
	async _group(txt: string): void
	script(script: string, log: boolean = false): void
}

type Slash = {
	Slash: {
		Register(options: { name: string, run(player: McPlayer, args: string[]) }): void
	}
}

type Extras = {
	sleep: typeof sleep,
	setTimeout: typeof setTimeout,
	setInterval: typeof setInterval,
	clearTimeout: typeof clearTimeout,
	clearInterval: typeof clearInterval,
}

async function sleep(ms: number): Promise<void>
function setTimeout(callback: () => void, ms: number): void
function setInterval(callback: () => void, ms: number): void
function clearTimeout(timeout: () => void): void
function clearInterval(interval: () => void): void