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
} from 'lucide-react';

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

function page() {
  return (
    <>
      <SearchHeader />
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-cyan-400">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-cyan-300/20" />
          <div className="absolute top-1/2 left-8 h-20 w-20 rounded-full bg-white/5" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-10 sm:flex-row sm:px-20 sm:py-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <MapPin size={12} />
              Shop Every Day · Nearest Store
            </div>

            <h1 className="mb-4 max-w-lg text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
              Fresh Groceries Delivered to Your Door
            </h1>

            <p className="mb-8 max-w-md text-base text-white/80 sm:text-lg">
              Shop from your nearest store — quality produce, guaranteed safe
              from store to your house.
            </p>

            {/* Trust badges */}
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-1.5">
                <Star size={14} className="fill-amber-300 text-amber-300" />
                <span className="font-medium text-white">4.9</span>
                <span>rating</span>
              </div>
              <div className="h-3.5 w-px bg-white/30" />
              <span>50K+ happy customers</span>
              <div className="h-3.5 w-px bg-white/30" />
              <span>Same-day delivery</span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex shrink-0 items-center justify-center">
            {/* Floating product cards */}
            <div
              className="absolute -top-4 -left-8 hidden animate-bounce items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-lg sm:flex"
              style={{ animationDuration: '4s' }}
            >
              <span className="text-xl">🍶</span>
              <div>
                <div className="text-[10px] font-bold text-slate-700">
                  Ultron Milk 1L
                </div>
                <div className="text-[10px] font-semibold text-sky-500">
                  Rp18.000
                </div>
              </div>
            </div>

            <div
              className="absolute -right-6 -bottom-2 hidden animate-bounce items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-lg sm:flex"
              style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
            >
              <span className="text-xl">🍫</span>
              <div>
                <div className="text-[10px] font-bold text-slate-700">
                  Gold Queen 500g
                </div>
                <div className="text-[10px] font-semibold text-sky-500">
                  Rp12.000
                </div>
              </div>
            </div>

            {/* Main emoji */}
            <div
              className="animate-bounce text-[120px] leading-none drop-shadow-2xl select-none sm:text-[180px]"
              style={{ animationDuration: '3s' }}
            >
              📦
            </div>
          </div>
        </div>
      </section>
      <PageCatalog />
      <section className="bg-gradient-to-b from-sky-50 to-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-800">
              Why Choose Grocify?
            </h2>
            <p className="mx-auto max-w-md text-sm text-slate-500">
              We connect you with fresh produce from your closest store with
              convenience built in.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-sky-50 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100">
                  <Icon size={20} className="text-sky-600" />
                </div>
                <h3 className="mb-1.5 font-semibold text-slate-800">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            Promotions &amp; Deals
          </h2>
          <p className="text-sm text-slate-500">Save more on every order</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PROMOS.map(({ icon: Icon, title, desc, color, accent }) => (
            <div
              key={title}
              className={`bg-gradient-to-br ${color} group cursor-pointer rounded-2xl border border-sky-100 p-6 transition-shadow hover:shadow-md`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm transition-transform group-hover:scale-110">
                <Icon size={18} className={accent} />
              </div>
              <h3 className="mb-1 font-bold text-slate-800">{title}</h3>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-sky-100 bg-white px-4 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Grocify</span>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Grocify. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-400 transition-colors hover:text-sky-500">
              Contact
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default page;
