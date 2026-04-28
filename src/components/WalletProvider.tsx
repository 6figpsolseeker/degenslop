"use client";

import { useMemo, type ComponentType, type ReactNode } from "react";
import {
  ConnectionProvider as RawConnectionProvider,
  WalletProvider as RawWalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider as RawWalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// React 18.3 widened ReactNode to include Promise<ReactNode>, which trips the
// older FC<> typings shipped by @solana/wallet-adapter-*. Cast through any to
// re-establish compatibility — providers are pure passthrough wrappers.
const ConnectionProvider = RawConnectionProvider as unknown as ComponentType<any>;
const WalletProvider = RawWalletProvider as unknown as ComponentType<any>;
const WalletModalProvider = RawWalletModalProvider as unknown as ComponentType<any>;

export function WalletContextProvider({ children }: { children: ReactNode }) {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
