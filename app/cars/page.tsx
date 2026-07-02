import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { Vehicle } from '@/types';
import vehiclesData from '@/data/vehicles.json';
import PageCard from '@/components/PageCard';
import StocklistBrowser from '@/components/StocklistBrowser';
import { BUSINESS_PHONE } from '@/data/business';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Stocklist',
  description: 'Current vehicle stocklist at Yardley Hastings Garage, Northamptonshire. Quality used cars prepared by our own mechanics. Vehicle sourcing also available.',
  path: '/cars',
});

const vehicles = vehiclesData as Vehicle[];

export default function CarsPage() {
  const cars = vehicles.filter((v) => v.type === 'car' && v.status !== 'sold');
  return (
    <PageCard>
      {/* ─── Hero ─── */}
      <section className="bg-[#111110] text-white relative overflow-hidden flex items-end" style={{ minHeight: '52vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/assets/forecourt-cars-4.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/85 to-[#111110]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-14 pb-14 lg:pb-18 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              {/* Frosted glass eyebrow pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3.5 py-1 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6ab88a] flex-shrink-0" />
                <span className="text-white text-[10px] tracking-[0.15em] uppercase font-medium">For Sale</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-4 leading-[1.05]">Stocklist</h1>
              <p className="text-white/70 max-w-xl font-light text-lg">
                Quality used cars, all checked and prepared by our own mechanics.
                Can&apos;t find what you&apos;re after? We can source it for you.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white/80 hover:text-white px-5 py-2.5 text-sm font-medium transition-colors rounded-sm"
              >
                Vehicle Sourcing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Search, filter & car grid ─── */}
      <section className="bg-[#F7F7F5] py-14">
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          {cars.length > 0 ? (
            <StocklistBrowser vehicles={cars} />
          ) : (
            <div className="text-center py-24 border border-[#EFEFEB] bg-white rounded-sm">
              <p className="text-[#111110] font-medium">No cars listed at the moment</p>
              <p className="text-sm mt-2 text-[#5A5A57]">Call us — we may have vehicles not yet listed, or can source one for you.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Sourcing CTA ─── */}
      <section className="bg-white border-t border-[#EFEFEB] py-14">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="w-5 h-[2px] bg-[#004225] mb-5" />
            <h2 className="text-xl font-semibold text-[#111110] tracking-tight">Looking for something specific?</h2>
            <p className="text-[#5A5A57] text-sm mt-1">We can source vehicles to your requirements. Call or send us a message.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#004225] hover:bg-[#005a30] text-white font-medium px-5 py-2.5 text-sm transition-colors rounded-sm"
            >
              Get in Touch
            </Link>
            <a
              href={BUSINESS_PHONE.href}
              className="inline-flex items-center justify-center border border-[#EFEFEB] hover:border-[#111110] text-[#5A5A57] hover:text-[#111110] font-medium px-5 py-2.5 text-sm transition-colors rounded-sm"
            >
              {BUSINESS_PHONE.display}
            </a>
          </div>
        </div>
      </section>
    </PageCard>
  );
}
