export const DEFAULT_CHAT_MESSAGE_MAX_LENGTH = 20000;

export function getChatMessageMaxLength(): number {
  const configuredLimit = Number(process.env.CHAT_MESSAGE_MAX_LENGTH);

  if (!Number.isFinite(configuredLimit) || configuredLimit <= 0) {
    return DEFAULT_CHAT_MESSAGE_MAX_LENGTH;
  }

  return Math.floor(configuredLimit);
}
