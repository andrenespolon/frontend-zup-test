/**
 * Generate uuid
 */
export function uuid(): string {
	return new Date().getTime().toString(16);
}
