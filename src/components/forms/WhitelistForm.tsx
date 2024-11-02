import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useWhitelistSubmission } from '../../hooks/useWhitelistSubmission';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const WhitelistForm = () => {
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');
  const { submitWhitelist, isSubmitting } = useWhitelistSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const success = await submitWhitelist({ email, wallet });
      if (success) {
        setEmail('');
        setWallet('');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  const handleWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setWallet(value.startsWith('0x') ? value : `0x${value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="email"
        type="email"
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value.trim())}
        placeholder="Enter your email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Please enter a valid email address"
        disabled={isSubmitting}
      />

      <Input
        id="wallet"
        type="text"
        label="SUI Wallet Address"
        value={wallet}
        onChange={handleWalletChange}
        placeholder="Enter your SUI wallet address (0x...)"
        required
        pattern="^0x[a-fA-F0-9]{64}$"
        title="Please enter a valid SUI wallet address"
        disabled={isSubmitting}
      />

      <Button
        type="submit"
        disabled={isSubmitting || !email || !wallet}
        className="w-full"
      >
        <span>{isSubmitting ? 'Submitting...' : 'Join Whitelist'}</span>
        <ArrowRight className="h-5 w-5 ml-2" />
      </Button>
    </form>
  );
};