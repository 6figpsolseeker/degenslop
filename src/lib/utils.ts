export function shortenCA(ca: string, head = 6, tail = 6): string {
  if (ca.length <= head + tail + 1) return ca;
  return `${ca.slice(0, head)}…${ca.slice(-tail)}`;
}

export function solscanUrl(ca: string): string {
  return `https://solscan.io/token/${ca}`;
}

export function birdeyeUrl(ca: string): string {
  return `https://birdeye.so/token/${ca}?chain=solana`;
}

export function dexscreenerUrl(ca: string): string {
  return `https://dexscreener.com/solana/${ca}`;
}

export function pumpFunUrl(ca: string): string {
  return `https://pump.fun/coin/${ca}`;
}
