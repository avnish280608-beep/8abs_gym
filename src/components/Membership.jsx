// ─── Contact config ────────────────────────────────────────────────────────
const WA_NUMBER  = '919044405342'
const UPI_VPA    = '9044405342@upi'   // UPI VPA / Google Pay number of the gym
const PAYEE_NAME = '8 ABS Gym'

// ─── Helpers ────────────────────────────────────────────────────────────────
function whatsappLink(planName) {
  const msg = encodeURIComponent(
    `Hi! I'm interested in the ${planName} at 8 ABS Gym. Please share details.`
  )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

/**
 * Standard UPI deep-link → opens Google Pay (or any UPI app) with
 * the payee VPA, name, amount and note pre-filled.
 */
function googlePayLink(amount, note) {
  const params = new URLSearchParams({
    pa: UPI_VPA,
    pn: PAYEE_NAME,
    am: String(amount),
    cu: 'INR',
    tn: note,
  })
  return `upi://pay?${params.toString()}`
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/** Google Pay "G" mark – four-colour SVG */
function GooglePayIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34.5 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.5 0 10.4-2.1 14.2-5.5l-6.6-5.5C29.6 35 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.6 39.6 16.3 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.6 5.5C37.4 38 44 33 44 24c0-1.2-.1-2.4-.4-3.5z"/>
    </svg>
  )
}

// ─── Plan data ────────────────────────────────────────────────────────────────
export const plansData = [
  {
    name: 'Daily Pass',
    price: '₹100',
    amount: 100,
    period: 'per visit',
    highlight: false,
    features: [
      'Full gym access',
      'Cardio & weights area',
      'Locker room access',
      'Trainer on floor',
    ],
    whatsappCta: 'Chat for Day Pass',
    payCta: 'Pay ₹100 via GPay',
    payNote: '8 ABS Gym – Daily Pass',
  },
  {
    name: '1-Month Plan',
    price: '₹1,200',
    amount: 1200,
    period: '30 days access',
    highlight: true,
    features: [
      'Unlimited gym access',
      'All equipment included',
      'Diet consultation',
      'Progress tracking',
      'Group classes access',
    ],
    whatsappCta: 'Chat for 1-Month Plan',
    payCta: 'Pay ₹1,200 via GPay',
    payNote: '8 ABS Gym – 1 Month Membership',
  },
  {
    name: 'Annual Plan',
    price: '₹10,000',
    amount: 10000,
    period: '365 days access',
    highlight: false,
    features: [
      'Unlimited gym access',
      'Personal training sessions',
      'Full diet & workout plan',
      'Physiotherapy support',
      'Priority booking',
      'All group classes',
    ],
    whatsappCta: 'Chat for Annual Plan',
    payCta: 'Pay ₹10,000 via GPay',
    payNote: '8 ABS Gym – Annual Membership',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function Membership() {
  return (
    <section id="membership" className="py-28 bg-charcoal-mid relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Membership Options</p>
          <h2 className="section-title mb-4">
            Flexible <span className="text-crimson">Plans</span> for
            <br />
            Every Goal.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Choose the membership that fits your lifestyle. No hidden fees, no long-term traps —
            just commitment to your results.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plansData.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-crimson border-2 border-crimson scale-105 shadow-2xl shadow-crimson/30'
                  : 'card-dark border border-white/10 hover:border-crimson/40'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-white text-crimson text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  Popular
                </div>
              )}

              {/* Name + price */}
              <h3 className="font-display text-3xl tracking-wider mb-1 text-white">
                {plan.name}
              </h3>
              <div className={`text-2xl font-black mb-1 ${plan.highlight ? 'text-white' : 'text-orange-electric'}`}>
                {plan.price}
              </div>
              <div className={`text-xs uppercase tracking-widest mb-7 ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                {plan.period}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-crimson'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-300'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* ── Google Pay button ── */}
              <a
                href={googlePayLink(plan.amount, plan.payNote)}
                className={`w-full flex items-center justify-center gap-2.5 font-bold py-3.5 uppercase tracking-widest text-sm rounded-sm transition-all duration-200 active:scale-95 mb-3 ${
                  plan.highlight
                    ? 'bg-white text-blue-700 hover:bg-blue-50'
                    : 'bg-blue-600/10 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                }`}
              >
                <GooglePayIcon className="w-5 h-5" />
                {plan.payCta}
              </a>

              {/* ── WhatsApp button ── */}
              <a
                href={whatsappLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2.5 font-bold py-3 uppercase tracking-widest text-sm rounded-sm transition-all duration-200 active:scale-95 ${
                  plan.highlight
                    ? 'bg-white/15 text-white hover:bg-white/25'
                    : 'border border-green-500/40 text-green-400 hover:bg-green-500/10'
                }`}
              >
                <WhatsAppIcon />
                {plan.whatsappCta}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-gray-500 text-sm">
            Google Pay button opens your UPI app with the amount pre-filled to{' '}
            <span className="text-white font-semibold">{UPI_VPA}</span>.
          </p>
          <p className="text-gray-500 text-sm">
            Prefer to call?{' '}
            <a href="tel:09044405342" className="text-crimson hover:underline font-semibold">
              090444 05342
            </a>
            {' '}— or chat on{' '}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline font-semibold"
            >
              WhatsApp
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
