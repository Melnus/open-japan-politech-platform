/**
 * 数値フォーマットユーティリティ
 */

const formatter = new Intl.NumberFormat("ja-JP");

export function formatNumber(value: string | number): string {
  return formatter.format(Number(value));
}

export function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function formatSeats(value: number): string {
  return `${formatter.format(value)}議席`;
}

export function bigIntToNumber(value: string | number | bigint): number {
  return Number(value);
}
