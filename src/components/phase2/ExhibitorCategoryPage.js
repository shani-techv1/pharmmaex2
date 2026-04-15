import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Phase2.module.css";
import SeoBreadcrumb from "./SeoBreadcrumb";
import SeoCtaBanner from "./SeoCtaBanner";
import { ArrowRight, StarIcon, getCategoryIcon } from "./icons";
import { CATEGORY_LIST } from "@/src/data/exhibitorCategories";

const ExhibitorCategoryPage = ({ category }) => {
  if (!category) return null;

  const Icon = getCategoryIcon(category.slug);
  const otherCategories = CATEGORY_LIST.filter(
    (c) => c.slug !== category.slug
  ).slice(0, 4);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <SeoBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Exhibitor Categories", href: "/exhibitor-categories" },
              { label: category.name },
            ]}
          />

          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                {category.name}
              </span>
              <h1 className={styles.h1}>
                {category.headline.replace(/at PharmmaEx 2026$/, "").trim()}{" "}
                <span className={styles.titleAccent}>at PharmmaEx 2026</span>
              </h1>
              <p className={styles.lead}>{category.intro}</p>

              <div className={styles.heroCtas}>
                <Link href="/exhibitor" className={styles.btnPrimary}>
                  Book a Stall <ArrowRight />
                </Link>
                <a
                  href="https://www.pharmmaexregistration.in/Pharmaex/visitor.aspx"
                  className={styles.btnGhost}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pre-Register as Visitor
                </a>
              </div>
            </div>

            <div className={styles.heroImage}>
              <Image
                src={category.image}
                alt={`${category.name} brands at PharmmaEx`}
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BENEFITS ---------- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Why This Pavilion
          </span>
          <h2 className={styles.h2}>
            What buyers gain at the{" "}
            <span className={styles.titleAccent}>{category.shortName}</span>{" "}
            pavilion
          </h2>
          <ul className={styles.checkList}>
            {category.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- HIGHLIGHT CARDS ---------- */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Pavilion Highlights
          </span>
          <h2 className={styles.h2}>
            What you will{" "}
            <span className={styles.titleAccent}>find inside</span>
          </h2>
          <div className={styles.cardGrid}>
            {category.highlights.map((h, idx) => (
              <article key={h.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.cardIcon}>
                    <Icon size={17} />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{h.title}</h3>
                <p className={styles.cardBody}>{h.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PRODUCT EXAMPLES + AUDIENCE ---------- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Product Range
              </span>
              <h2 className={styles.h2}>
                Categories on{" "}
                <span className={styles.titleAccent}>display</span>
              </h2>
              <ul className={styles.checkList}>
                {category.productExamples.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <aside className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Who This Is For</h3>
              <ul className={styles.checkListSingle}>
                {category.targetBuyers.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link
                href="/exhibitor"
                className={styles.btnPrimary}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: "1.2rem",
                }}
              >
                Reserve Your Stall <ArrowRight />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- OTHER CATEGORIES ---------- */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            More Categories
          </span>
          <h2 className={styles.h2}>
            Explore other{" "}
            <span className={styles.titleAccent}>PharmmaEx pavilions</span>
          </h2>
          <div className={styles.cardGrid}>
            {otherCategories.map((c, idx) => {
              const OtherIcon = getCategoryIcon(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={`/exhibitor-categories/${c.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.cardIcon}>
                      <OtherIcon size={17} />
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{c.name}</h3>
                  <p className={styles.cardBody}>
                    {c.intro.slice(0, 110)}…
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SeoCtaBanner
            title={`Exhibit in the ${category.shortName} pavilion`}
            subtitle={`Limited stalls in the ${category.name} pavilion. Lock your space and meet thousands of qualified buyers face-to-face at PharmmaEx 2026.`}
            primaryLabel="Book Your Stall"
            primaryHref="/exhibitor"
          />
        </div>
      </section>
    </>
  );
};

export default ExhibitorCategoryPage;
