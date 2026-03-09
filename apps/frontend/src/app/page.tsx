import PageCatalog from '@/components/catalog/PageCatalog';
import { SearchHeader } from '@/components/find/SearchHeader';
import {
  Clock,
  Gift,
  MapPin,
  Percent,
  Shield,
  Star,
  Truck,
  Zap,
  Package
} from 'lucide-react';
import { Suspense } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const FEATURES = [
  {
    icon: MapPin,
    title: 'Nearest Store',
    desc: 'We auto-detect your location and connect you to the closest branch for fresh delivery.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Order before 12pm and get same-day delivery right to your doorstep.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    desc: 'Every product is quality-checked before it leaves our store.',
  },
  {
    icon: Clock,
    title: 'Track in Real-Time',
    desc: 'Follow your order from packing to doorstep with live status updates.',
  },
];

const PROMOS = [
  {
    icon: Gift,
    title: 'Buy 1 Get 1 Free',
    desc: 'Selected products every weekend — no voucher needed.',
    color: 'from-sky-100 to-cyan-50',
    accent: 'text-sky-600',
  },
  {
    icon: Percent,
    title: 'Min. Spend Vouchers',
    desc: 'Spend over Rp200K and earn a discount voucher for your next order.',
    color: 'from-cyan-100 to-sky-50',
    accent: 'text-cyan-600',
  },
  {
    icon: Zap,
    title: 'Referral Bonus',
    desc: 'Share your referral code. Both you and your friend get exclusive discounts.',
    color: 'from-sky-50 to-cyan-100',
    accent: 'text-sky-500',
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Suspense fallback={null}>
        <SearchHeader />
      </Suspense>

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-400">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-cyan-300/20 blur-xl" />
          <div className="absolute top-1/2 left-8 h-32 w-32 rounded-full bg-white/5 blur-lg" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:flex-row sm:px-6 lg:px-8 lg:py-24 text-white">
          {/* Left: Text Content */}
          <div className="flex-1">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-2 text-xs font-semibold backdrop-blur-md shadow-sm">
                <MapPin size={14} />
                Shop Every Day · Nearest Store
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="mb-6 max-w-2xl text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-sm">
                Fresh Groceries Delivered to Your Door
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="mb-10 max-w-lg text-lg text-sky-50 sm:text-xl font-medium leading-relaxed drop-shadow-sm">
                Shop from your nearest store — quality produce, guaranteed safe
                from store to your house.
              </p>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-sky-50 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 shadow-inner w-fit">
                <div className="flex items-center gap-2">
                  <Star size={16} className="fill-amber-300 text-amber-300 drop-shadow-sm" />
                  <span className="text-white font-bold">4.9</span>
                  <span>rating</span>
                </div>
                <div className="h-4 w-px bg-white/30" />
                <span>50K+ happy customers</span>
                <div className="h-4 w-px bg-white/30" />
                <span>Same-day delivery</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Visual */}
          <div className="relative flex w-full max-w-lg shrink-0 items-center justify-center pt-16 sm:w-1/2 sm:pt-0 lg:ml-auto">
            <ScrollReveal direction="left" delay={0.4} duration={0.9} className="relative w-full aspect-square max-w-[420px]">
              {/* Background abstract layout */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/10 to-white/20 backdrop-blur-2xl shadow-2xl transform rotate-6 scale-100 border border-white/20" />
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-bl from-sky-400/20 to-cyan-300/20 backdrop-blur-md transform -rotate-3 scale-95 border border-white/30" />
              
              {/* Main App Mockup Card */}
              <div className="absolute inset-4 rounded-[2rem] bg-white shadow-2xl overflow-hidden border border-white flex flex-col z-10">
                {/* Header Mockup */}
                <div className="bg-slate-50 border-b border-slate-100 p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-sky-100 shadow-inner">
                      <MapPin size={24} className="text-sky-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">Grocify Branch</div>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">1.2 km away • Serving You</div>
                    </div>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Shield size={16} className="text-emerald-500" />
                  </div>
                </div>

                {/* Content Mockup */}
                <div className="flex-1 p-6 bg-white flex flex-col">
                  <div className="mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Available Today
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    {[
                      { name: 'El Mineral Water', price: 'Rp 4.000', weight: '600ml' },
                      { name: 'Ultron Milk', price: 'Rp 18.500', weight: '1 Liter' },
                      { name: 'Gold Queen', price: 'Rp 35.000', weight: '500g' }
                    ].map((item, i) => (
                      <div key={i} className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-sky-50 transition-colors">
                        <div className="flex gap-4 items-center">
                           <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-300 group-hover:text-sky-500 transition-colors">
                             <Package size={20} />
                           </div>
                           <div>
                             <div className="text-sm font-bold text-slate-800">{item.name}</div>
                             <div className="text-xs font-medium text-slate-500 mt-0.5">{item.weight}</div>
                           </div>
                        </div>
                        <div className="text-sm font-bold text-sky-600">{item.price}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <button className="w-full py-3.5 rounded-xl bg-slate-900 shadow-lg text-white text-sm font-bold hover:bg-sky-600 transition-colors focus:ring-4 focus:ring-sky-100">
                      Place Order Directly
                    </button>
                  </div>
                </div>
              </div>

            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="bg-white">
        <PageCatalog />
      </section>

      {/* Features Section */}
      <section className="relative mt-8 py-20 bg-slate-50 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-sky-100/40 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Why Choose Grocify?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-500">
                We connect you with fresh produce from your closest store with
                convenience built in every step of the way.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, desc }, index) => (
              <ScrollReveal direction="up" delay={0.1 * (index + 2)} key={title}>
                <div className="group h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-sky-200">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 transition-colors group-hover:bg-sky-100">
                    <Icon size={26} className="text-sky-600" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
                  <p className="text-base leading-relaxed text-slate-500">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Promotions &amp; Deals
              </h2>
              <p className="text-lg text-slate-500">Save more on every fresh order</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROMOS.map(({ icon: Icon, title, desc, color, accent }, index) => (
            <ScrollReveal direction="up" delay={0.1 * (index + 1)} key={title}>
              <div className={`group relative h-full cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br ${color} p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ring-1 ring-white/60`}>
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/20 blur-2xl transition-all group-hover:scale-150" />
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                  <Icon size={28} className={accent} />
                </div>
                <h3 className="relative mb-3 text-xl font-bold text-slate-900">{title}</h3>
                <p className="relative text-base text-slate-600 font-medium">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-8 mt-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-slate-900 tracking-wide">Grocify</span>
          </div>

          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Grocify. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-semibold text-slate-500 transition-colors hover:text-sky-600">
              Contact Us
            </a>
            <a href="#" className="text-sm font-semibold text-slate-500 transition-colors hover:text-sky-600">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
