export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Auto-fill forms across<br />
          <span className="text-[#58a6ff]">any website</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FormFiller learns your form patterns and instantly fills personal and business info everywhere. Built for developers, QA testers, and sales teams doing demos.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get FormFiller — $12/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. Works on Chrome &amp; Firefox.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: '⚡', title: 'Instant Fill', desc: 'One click fills every field on the page' },
          { icon: '🧠', title: 'Pattern Learning', desc: 'Remembers field mappings per site' },
          { icon: '🔒', title: 'Local Storage', desc: 'Your data never leaves your device' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6">Everything included</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Chrome & Firefox extension',
              'Unlimited profiles & fields',
              'Per-site pattern memory',
              'Background sync via service worker',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which browsers are supported?',
              a: 'FormFiller works on Chrome (v88+) and Firefox (v90+). Edge and Brave are also supported since they use the Chromium engine.'
            },
            {
              q: 'Is my data safe?',
              a: 'Yes. All profiles and form patterns are stored locally in your browser using the extension storage API. Nothing is sent to external servers.'
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Absolutely. Cancel anytime from your Lemon Squeezy customer portal with one click. No questions asked.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} FormFiller. All rights reserved.
      </footer>
    </main>
  )
}
