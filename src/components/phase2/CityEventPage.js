import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Phase2.module.css";
import SeoBreadcrumb from "./SeoBreadcrumb";
import SeoCtaBanner from "./SeoCtaBanner";
import {
  CalendarIcon,
  PinIcon,
  BuildingIcon,
  MapIcon,
  TicketIcon,
  ClockIcon,
  ArrowRight,
} from "./icons";
import { CITY_LIST } from "@/src/data/cityEvents";

const CityEventPage = ({ event }) => {
  if (!event) return null;

  const isUpcoming = event.status === "upcoming";
  const otherUpcoming = CITY_LIST.filter(
    (c) => c.slug !== event.slug && c.status === "upcoming"
  );
  const otherPast = CITY_LIST.filter(
    (c) => c.slug !== event.slug && c.status === "past"
  );
  const otherCities = [...otherUpcoming, ...otherPast].slice(0, 4);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <SeoBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Events", href: "/events" },
              { label: `${event.city} ${isUpcoming ? "2026" : ""}`.trim() },
            ]}
          />

          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {event.edition}
              </span>
              <h1 className={styles.h1}>
                {event.headline.includes("—") ? (
                  <>
                    {event.headline.split("—")[0].trim()}{" "}
                    <span className={styles.titleAccent}>
                      — {event.headline.split("—").slice(1).join("—").trim()}
                    </span>
                  </>
                ) : (
                  event.headline
                )}
              </h1>
              <p className={styles.lead}>{event.intro}</p>

              <div className={styles.heroMeta}>
                <span><CalendarIcon size={15} /> {event.date}</span>
                <span><BuildingIcon size={15} /> {event.venue}</span>
                <span><MapIcon size={15} /> {event.state}</span>
                <span><TicketIcon size={15} /> Free Visitor Entry</span>
              </div>

              <div className={styles.heroCtas}>
                {isUpcoming ? (
                  <>
                    <Link href="/exhibitor" className={styles.btnPrimary}>
                      Book Your Stall <ArrowRight />
                    </Link>
                    <a
                      href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx"
                      className={styles.btnGhost}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre-Register Free
                    </a>
                  </>
                ) : (
                  <>
                    <Link href={event.galleryHref} className={styles.btnPrimary}>
                      View Photo Gallery <ArrowRight />
                    </Link>
                    <Link href="/events" className={styles.btnGhost}>
                      See Upcoming Editions
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image
                src={event.heroImage}
                alt={`PharmmaEx ${event.city} — ${event.venue}`}
                width={800}
                height={600}
                priority
              />
            </div>
          </div>

          <div className={styles.statRow}>
            <div className={styles.statBlock}>
              <div className={styles.statValue}>
                <strong>{event.expectedExhibitors}</strong>
              </div>
              <div className={styles.statLabel}>Verified Exhibitors</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statValue}>
                <strong>{event.expectedVisitors}</strong>
              </div>
              <div className={styles.statLabel}>Pre-Screened Visitors</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statValue}>
                <strong>2 Days</strong>
              </div>
              <div className={styles.statLabel}>Of Direct Business</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statValue}>
                <strong>9 Categories</strong>
              </div>
              <div className={styles.statLabel}>Pharma Segments</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Edition Highlights
          </span>
          <h2 className={styles.h2}>
            Why PharmmaEx {event.city}{" "}
            <span className={styles.titleAccent}>
              {isUpcoming ? "is the must-attend pharma event" : "made history"}
            </span>
          </h2>
          <ul className={styles.checkList}>
            {event.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- WHY ATTEND ---------- */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Reasons to Attend
          </span>
          <h2 className={styles.h2}>
            What you take home from{" "}
            <span className={styles.titleAccent}>{event.city}</span>
          </h2>
          <div className={styles.cardGrid}>
            {event.whyAttend.map((item, idx) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.cardIcon}>
                    <CalendarIcon size={17} />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- AUDIENCE ---------- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Who Should Attend
              </span>
              <h2 className={styles.h2}>
                Built for the {event.state}{" "}
                <span className={styles.titleAccent}>pharma ecosystem</span>
              </h2>
              <p className={styles.lead}>
                PharmmaEx {event.city} is curated for buyers, prescribers and
                decision-makers who actually move the needle in the franchise,
                distribution and manufacturing space.
              </p>
              <ul className={styles.checkListSingle}>
                {event.audience.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Event Snapshot</h3>
              <div className={styles.sidebarMeta}>
                <div>
                  <PinIcon size={15} />
                  <div>
                    <strong>City</strong>
                    {event.city}, {event.state}
                  </div>
                </div>
                <div>
                  <BuildingIcon size={15} />
                  <div>
                    <strong>Venue</strong>
                    {event.venue}
                  </div>
                </div>
                <div>
                  <MapIcon size={15} />
                  <div>
                    <strong>Address</strong>
                    {event.address}
                  </div>
                </div>
                <div>
                  <CalendarIcon size={15} />
                  <div>
                    <strong>Dates</strong>
                    {event.date}
                  </div>
                </div>
                <div>
                  <ClockIcon size={15} />
                  <div>
                    <strong>Hours</strong>
                    10:00 AM – 06:00 PM
                  </div>
                </div>
                <div>
                  <TicketIcon size={15} />
                  <div>
                    <strong>Entry</strong>
                    Free with pre-registration
                  </div>
                </div>
              </div>
              {isUpcoming ? (
                <Link
                  href="/exhibitor"
                  className={styles.btnPrimary}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Reserve Your Stall <ArrowRight />
                </Link>
              ) : (
                <Link
                  href={event.galleryHref}
                  className={styles.btnPrimary}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Browse Gallery <ArrowRight />
                </Link>
              )}
              {event.floorPlanPdf && (
                <a
                  href={event.floorPlanPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnGhost}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "0.7rem",
                  }}
                >
                  Download Floor Plan
                </a>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- OTHER CITIES ---------- */}
      {otherCities.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Other Editions
            </span>
            <h2 className={styles.h2}>
              PharmmaEx travels{" "}
              <span className={styles.titleAccent}>across India</span>
            </h2>
            <div className={styles.cardGrid}>
              {otherCities.map((c, idx) => (
                <Link
                  key={c.slug}
                  href={`/events/${c.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardIcon}>
                      <PinIcon size={17} />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{c.city}</h3>
                  <p className={styles.cardBody}>
                    {c.date}
                    <br />
                    {c.venue}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- FINAL CTA ---------- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SeoCtaBanner
            title={`Be part of PharmmaEx ${event.city} ${
              isUpcoming ? "2026" : ""
            }`.trim()}
            subtitle={
              isUpcoming
                ? `Limited stalls remaining. Lock your spot among the ${event.expectedExhibitors} brands meeting ${event.expectedVisitors} buyers in ${event.city}.`
                : `Stay updated when PharmmaEx returns to ${event.city}. Pre-register to be the first to know.`
            }
            primaryLabel={isUpcoming ? "Book Your Stall" : "Notify Me"}
            primaryHref="/exhibitor"
          />
        </div>
      </section>
    </>
  );
};

export default CityEventPage;
