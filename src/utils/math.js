// @flow

export const uniqueId = (): string => Math.random().toString(36).substr(2, 16);
