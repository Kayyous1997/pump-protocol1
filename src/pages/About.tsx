import React from 'react';
import { Rocket, Coins, Shield, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">About Pump Protocol</h1>

        <div className="space-y-16">
          {/* Protocol Description */}
          <section className="bg-black/30 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Protocol Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              Pump Protocol is a revolutionary DeFi platform built on the SUI Blockchain, 
              designed to optimize liquidity provision and yield generation. Our protocol 
              implements advanced algorithms to maximize returns while minimizing impermanent 
              loss, making DeFi more accessible and profitable for everyone.
            </p>
          </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Roadmap</h2>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: 'Q4 2024',
                title: 'Launch Phase',
                items: [
                  'Whitelist registration',
                  'Pass launch',
                  'Token generation event',
                  'Platform beta testing',
                  'Security audits'
                ]
              },
              {
                phase: 'Q1 2025',
                title: 'Growth Phase',
                items: [
                  'Platform beta testing',
                  'Security audits',
                  'Mainnet launch',
                  'Liquidity mining program',
                  'Community expansion'
                ]
              },
              {
                phase: 'Q2 2025',
                title: 'Expansion Phase',
                items: [
                  'Advanced features rollout',
                  'Cross-chain integration',
                  'Governance implementation',
                  'Ecosystem grants'
                ]
              },
              {
                phase: 'Q3 2025',
                title: 'Maturity Phase',
                items: [
                  'Protocol optimization',
                  'New product lines',
                  'Global expansion',
                  'Enterprise partnerships'
                ]
              }
            ].map((phase) => (
              <div key={phase.phase} className="bg-black/30 rounded-xl p-8 border border-gray-800">
                <div className="text-xl font-bold mb-2 text-white/90">{phase.phase}</div>
                <h3 className="text-lg font-semibold mb-4 text-white">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/30 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Community Rewards</span>
                  <span>40%</span>
                </li>
                <li className="flex justify-between">
                  <span>Team & Advisors</span>
                  <span>20%</span>
                </li>
                <li className="flex justify-between">
                  <span>Liquidity Provision</span>
                  <span>20%</span>
                </li>
                <li className="flex justify-between">
                  <span>Treasury</span>
                  <span>15%</span>
                </li>
                <li className="flex justify-between">
                  <span>Early Investors</span>
                  <span>5%</span>
                </li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Token Utilities</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Shield className="mr-3 h-5 w-5" />
                  <span>Governance voting rights</span>
                </li>
                <li className="flex items-center">
                  <Coins className="mr-3 h-5 w-5" />
                  <span>Platform fee discounts</span>
                </li>
                <li className="flex items-center">
                  <Rocket className="mr-3 h-5 w-5" />
                  <span>Yield farming boosters</span>
                </li>
                <li className="flex items-center">
                  <Target className="mr-3 h-5 w-5" />
                  <span>Access to premium features</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

               {/* Protocol Pass Utilities */}
               <section className="bg-black/30 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Protocol Pass Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'VIP Access',
                  benefits: [
                    'Priority trading features',
                    'Exclusive market insights',
                    'Early access to new products'
                  ]
                },
                {
                  title: 'Enhanced Rewards',
                  benefits: [
                    'Boosted yield rates',
                    'Special staking multipliers',
                    'Bonus token rewards'
                  ]
                },
                {
                  title: 'Community Perks',
                  benefits: [
                    'Private community channels',
                    'Direct team communication',
                    'Exclusive events access'
                  ]
                }
              ].map((tier) => (
                <div key={tier.title} className="p-6 bg-black/20 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4">{tier.title}</h3>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="text-gray-400">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
      </div>
    </div>
  );
}

export default About;