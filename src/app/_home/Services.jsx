import ServicesTabs from './ServicesTabs';

// "SERVICES" (Figma 422:1076). Founders, 2026-10-13/19: all four services in
// one shot as auto-advancing tabs (ServicesTabs.jsx, client pick "A · Top
// tabs"), replacing the 2x2 card grid. Content: servicesData.jsx.
export default function Services() {
  return (
    <section id="services" className="hm-services" aria-labelledby="hm-services-title">
      <div className="hm-wrap hm-services-inner">
        <div className="hm-services-head hm-reveal">
          <p className="hm-overline hm-services-overline">SERVICES</p>
          <h2 id="hm-services-title" className="hm-h2">What we do</h2>
        </div>
        <ServicesTabs />
      </div>
    </section>
  );
}
