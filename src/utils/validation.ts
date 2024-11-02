export const validateWalletAddress = (address: string): boolean => {
  const walletRegex = /^0x[a-fA-F0-9]{64}$/;
  return walletRegex.test(address);
};