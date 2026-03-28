import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const WA_NUMBER = '919044405342'
const UPI_ID = '9044405342@upi' // Your Google Pay linked UPI ID

const plans = [
  {
    name: 'Day Pass',
    price: 800,
    duration: 'Single Session',
    features: ['Full Equipment Access', 'Floor Trainer Support', 'Locker Room'],
    color: 'border-gray-500',
  },
  {
    name: 'Monthly',
    price: 1000,
    duration: '30 Days',
    features: ['Full Equipment Access', 'Diet Consultation', 'Floor Trainer', 'No Join Fee'],
    color: 'border-crimson',
    popular: true,
  },
  {
    name: 'Yearly',
    price: 10000,
    duration: '365 Days',
    features: ['Best Value', 'Personalized Workout Plan', 'Diet Chart', 'All Gym Access'],
    color: 'border-yellow-500',
  }
]

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function MembershipPage() {
  const generateUPILink = (amount, planName) => {
    // Standard UPI Deep link format
    const baseUrl = "upi://pay";
    const params = new URLSearchParams({
      pa: UPI_ID,
      pn: "8 ABS Gym",
      am: amount.toFixed(2),
      cu: "INR",
      tn: `Payment for ${planName} - 8 ABS Gym`
    });
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <>
      <PageHero
        subtitle="Join the Elite"
        title="Membership"
        titleAccent="Plans"
        description="Choose your plan and pay instantly via Google Pay or any UPI app."
        bgImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
      />

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative card-dark p-8 rounded-sm border-t-4 ${plan.color} flex flex-col`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-crimson text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-white text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-display text-white">₹{plan.price}</span>
                  <span className="text-gray-500 text-sm">/ {plan.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="text-gray-400 text-sm flex items-center gap-3">
                      <svg className="w-4 h-4 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a 
                  href={generateUPILink(plan.price, plan.name)}
                  className="btn-primary w-full justify-center group"
                >
                  Pay with GPay
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 text-xs mt-12 italic">
            * After payment, please take a screenshot and share it with us on WhatsApp for account activation.
          </p>
        </div>
      </section>

      {/* WhatsApp Support Section */}
      <section className="py-16 bg-charcoal-mid border-y border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-white font-bold mb-4">Need a Custom Plan?</h3>
          <p className="text-gray-400 text-sm mb-8">If you prefer paying in cash or want to discuss corporate/student discounts, chat with us.</p>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            className="inline-flex items-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-green-600 transition-all"
          >
            <WhatsAppIcon />
            WhatsApp Support
          </a>
        </div>
      </section>
    </>
  )
}
