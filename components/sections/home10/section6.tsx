import Countdown from '@/components/elements/Countdown';
import Link from 'next/link';

export default function Section6() {
  // ✨ Update this date any time you need
  const targetDate = new Date('2025-10-15T00:00:00');

  return (
    <>
      <div className="others10-section-area">
        <div className="container">
          {/* === Heading === */}
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="heading11 text-center space-margin80">
                <h5>Countdown</h5>
                <div className="space28" />
                <h2 className="text-anime-style-3">Countdown&nbsp;to&nbsp;Elegance</h2>
              </div>
            </div>
          </div>

          {/* === Countdown Component === */}
          <Countdown style={2} targetDate={targetDate} />

          {/* === Call‑to‑Action Button === */}
          <div className="row">
            <div className="col-lg-12">
              <div className="space60" />
              <div
                className="btn-area1 text-center"
                data-aos="fade-left"
                data-aos-duration={1200}
              >
                {/* <Link href="/contact" className="vl-btn10 bg-gold">
                  Book Your Consultation&nbsp;
                  <img src="/assets/img/icons/arrow2.svg" alt="" />
                </Link> */}

                 <a
  href="https://wa.me/971551084366?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation.%20Please%20share%20the%20details."
  target="_blank"
  rel="noopener noreferrer"
  className="vl-btn10 bg-gold"
>
  Book Your Consultation&nbsp;
  <img src="/assets/img/icons/arrow2.svg" alt="" />
</a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
