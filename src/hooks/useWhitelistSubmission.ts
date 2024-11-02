import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { validateWalletAddress } from '../utils/validation';

interface WhitelistData {
  email: string;
  wallet: string;
}

export const useWhitelistSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitWhitelist = async ({ email, wallet }: WhitelistData): Promise<boolean> => {
    if (!isSupabaseConfigured()) {
      toast.error('Service temporarily unavailable. Please try again later.');
      return false;
    }

    if (!validateWalletAddress(wallet)) {
      toast.error('Please enter a valid SUI wallet address');
      return false;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('whitelist_registrations')
        .insert([
          {
            email: email.toLowerCase(),
            wallet_address: wallet.toLowerCase(),
            registration_date: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        if (error.code === '23505') {
          toast.error('This email or wallet address has already been registered');
        } else if (error.code === 'PGRST116') {
          toast.error('The registration service is currently unavailable');
        } else {
          console.error('Supabase Error:', error);
          toast.error('Unable to process registration. Please try again later.');
        }
        return false;
      }

      if (!data) {
        toast.error('No response from server. Please try again.');
        return false;
      }

      toast.success('Successfully joined the whitelist!');
      return true;
    } catch (error: any) {
      console.error('Submission Error:', error);
      toast.error('Connection error. Please check your internet and try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitWhitelist, isSubmitting };
};