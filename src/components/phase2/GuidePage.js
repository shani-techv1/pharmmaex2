import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Phase2.module.css";
import SeoBreadcrumb from "./SeoBreadcrumb";
import SeoCtaBanner from "./SeoCtaBanner";
import { ArrowRight, BookOpenIcon, ClockIcon, TagIcon } from "./icons";
import { GUIDE_LIST } from "@/src/data/guides";

const GuidePage = ({ guide }) => {
  if (!guide) return null;

  const otherGuides = GUIDE_LIST.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <SeoBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: guide.title },
            ]}
          />

          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {guide.category}
              </span>
              <h1 className={styles.h1}>
                {guide.title.includes("—") ? (
                  <>
                    {guide.title.split("—")[0].trim()}{" "}
                    <span className={styles.titleAccent}>
                      — {guide.title.split("—").slice(1).join("—").trim()}
                    </span>
                  </>
                ) : (
                  guide.title
                )}
              </h1>
              <p className={styles.lead}>{guide.excerpt}</p>

              <div className={styles.heroMeta}>
                <span><ClockIcon size={15} /> {guide.readMinutes} min read</span>
                <span><TagIcon size={15} /> {guide.category}</span>
              </div>

              <div className={styles.heroCtas}>
                <a href="#steps" className={styles.btnPrimary}>
                  Jump to Steps <ArrowRight />
                </a>
                <Link href="/blog" className={styles.btnGhost}>
                  Related Articles
                </Link>
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image
                src={guide.coverImage}
                alt={guide.title}
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ARTICLE BODY ---------- */}
      <section className={styles.section}>
        <div className={styles.containerNarrow}>
          <article className={styles.article}>
            <div className={styles.articleBody}>
              {guide.sections.map((s) => (
                <React.Fragment key={s.heading}>
                  <h2>{s.heading}</h2>
                  <p>{s.body}</p>
                </React.Fragment>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ---------- HOW-TO STEPS ---------- */}
      <section id="steps" className={styles.sectionAlt}>
        <div className={styles.containerNarrow}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Step-by-Step
          </span>
          <h2 className={styles.h2}>
            {guide.title.split("—")[0].trim()}{" "}
            <span className={styles.titleAccent}>
              in {guide.steps.length} steps
            </span>
          </h2>
          <ol className={styles.stepList}>
            {guide.steps.map((step) => (
              <li key={step.name}>
                <h3 className={styles.stepTitle}>{step.name}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- RELATED GUIDES ---------- */}
      {otherGuides.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              More Guides
            </span>
            <h2 className={styles.h2}>
              Continue <span className={styles.titleAccent}>learning</span>
            </h2>
            <div className={styles.cardGrid3}>
              {otherGuides.map((g, idx) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardIcon}>
                      <BookOpenIcon size={17} />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{g.title}</h3>
                  <p className={styles.cardBody}>{g.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- CTA BANNER ---------- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SeoCtaBanner
            title="Meet 300+ pharma brands at PharmmaEx 2026"
            subtitle="Skip months of online research. Compare PCD franchise, third-party manufacturing and ayurvedic brands face-to-face in two days."
            primaryLabel="Book Your Stall"
            primaryHref="/exhibitor"
          />
        </div>
      </section>
    </>
  );
};

export default GuidePage;
