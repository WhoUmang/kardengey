import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import articles from "../../data/articles";
import SEO from "../../components/SEO";

const categories = [
  "ALL",
  "MARKETING",
  "AI",
  "TECH",
  "SEO",
  "BRANDING",
  "GROWTH",
];

function ArticleRow({ article, index, featured = false }) {
  const articleNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      key={article.slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-b border-white/10"
    >
      <Link
        to={`/insights/${article.slug}`}
        className="block"
      >
        <div
          className={`grid gap-6 ${
            featured
              ? "py-12 md:py-16 lg:grid-cols-[100px_180px_1fr_100px]"
              : "py-10 md:py-12 md:grid-cols-[80px_180px_1fr_80px]"
          }`}
        >
          {/* Number */}

          <div>
            <span
              className={`tracking-[0.2em] ${
                featured
                  ? "text-[10px] text-blue-500"
                  : "text-[10px] text-neutral-700"
              }`}
            >
              {articleNumber}
            </span>

            {featured && (
              <p className="mt-3 text-[8px] uppercase tracking-[0.25em] text-neutral-700">
                Latest
              </p>
            )}
          </div>

          {/* Category */}

          <div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-blue-500">
              {article.category}
            </span>
          </div>

          {/* Content */}

          <div>
            <h2
              className={`uppercase tracking-[-0.05em] transition-colors duration-500 ${
                featured
                  ? "max-w-4xl text-[clamp(2.2rem,4vw,4.5rem)] font-black leading-[0.9] text-neutral-300 group-hover:text-white"
                  : "max-w-3xl text-3xl font-bold leading-[0.95] text-neutral-500 group-hover:text-white md:text-4xl"
              }`}
            >
              {article.title}
            </h2>

            <p
              className={`mt-5 max-w-2xl text-sm leading-7 transition-colors duration-500 ${
                featured
                  ? "text-neutral-600 group-hover:text-neutral-400 md:text-base"
                  : "text-neutral-700 group-hover:text-neutral-500"
              }`}
            >
              {article.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-neutral-700">
              <span>{article.date}</span>
              <span>/</span>
              <span>{article.read}</span>
            </div>
          </div>

          {/* Arrow */}

          <div className="hidden justify-end md:flex">
            <span
              className={`transition-all duration-300 ${
                featured
                  ? "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-600 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-blue-500 group-hover:text-blue-500"
                  : "text-xl text-neutral-700 group-hover:translate-x-1 group-hover:text-blue-500"
              }`}
            >
              ↗
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  /* =========================================================
     SORT ARTICLES
     Newest article always appears first.
  ========================================================= */

  const sortedArticles = useMemo(() => {
    return [...articles].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    );
  }, []);

  /* =========================================================
     FILTER ARTICLES
  ========================================================= */

  const filteredArticles = useMemo(() => {
    if (activeCategory === "ALL") {
      return sortedArticles;
    }

    return sortedArticles.filter(
      (article) => article.filter === activeCategory
    );
  }, [activeCategory, sortedArticles]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Insights"
        description="Thinking about marketing, technology, AI, branding and the systems helping modern businesses grow."
        canonical="https://kardengey.com/insights"
      />

      {/* =====================================================
          PAGE
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#050505] px-[6vw] pb-32 pt-32 md:pt-40">
        <div className="mx-auto max-w-[1500px]">

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs uppercase tracking-[0.45em] text-blue-500">
              Kardengey / Insights
            </p>

            <h1 className="mt-7 max-w-6xl text-[clamp(4rem,9vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
              Ideas that
              <br />
              <span className="text-neutral-600">
                move.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
              Thinking about marketing, technology, AI, branding and the
              systems helping modern businesses grow.
            </p>
          </motion.div>

          {/* =================================================
              MOVING TICKER
          ================================================= */}

          <div className="relative mt-20 overflow-hidden border-y border-white/10 py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max"
            >
              {[...Array(2)].map((_, group) => (
                <div
                  key={group}
                  className="flex items-center whitespace-nowrap"
                >
                  <span className="mx-8 text-[10px] uppercase tracking-[0.4em] text-neutral-600">
                    ● Latest thinking
                  </span>

                  <span className="mx-8 text-[10px] uppercase tracking-[0.4em] text-neutral-700">
                    AI & Automation
                  </span>

                  <span className="mx-8 text-[10px] uppercase tracking-[0.4em] text-neutral-700">
                    Marketing
                  </span>

                  <span className="mx-8 text-[10px] uppercase tracking-[0.4em] text-neutral-700">
                    Technology
                  </span>

                  <span className="mx-8 text-[10px] uppercase tracking-[0.4em] text-neutral-700">
                    SEO
                  </span>

                  <span className="mx-8 text-[10px] uppercase tracking-[0.4em] text-neutral-700">
                    Growth
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* =================================================
              FILTERS
          ================================================= */}

          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-[9px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "border-blue-500 bg-blue-600 text-white"
                      : "border-white/10 text-neutral-600 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* =================================================
              RESULTS INFO
          ================================================= */}

          <div className="mt-10 flex items-center justify-between border-b border-white/10 pb-5">
            <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-700">
              {activeCategory === "ALL"
                ? "Latest thinking"
                : `${activeCategory} / Selected`}
            </span>

            <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-700">
              {filteredArticles.length
                .toString()
                .padStart(2, "0")}{" "}
              {filteredArticles.length === 1
                ? "Article"
                : "Articles"}
            </span>
          </div>

          {/* =================================================
              FEATURED / LATEST ARTICLE
          ================================================= */}

          {featuredArticle && (
            <ArticleRow
              article={featuredArticle}
              index={0}
              featured
            />
          )}

          {/* =================================================
              REMAINING ARTICLES
          ================================================= */}

          {remainingArticles.map((article, index) => (
            <ArticleRow
              key={article.slug}
              article={article}
              index={index + 1}
            />
          ))}

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {!featuredArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border-b border-white/10 py-24"
            >
              <p className="text-3xl font-bold uppercase tracking-tight text-neutral-700">
                Nothing here yet.
              </p>

              <p className="mt-4 text-sm text-neutral-600">
                We're working on something for this category.
              </p>
            </motion.div>
          )}

          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.3em] text-neutral-700 md:flex-row md:justify-between">
            <span>Kardengey / Insights</span>

            <span>
              Strategy × Creativity × Technology × AI
            </span>
          </div>

        </div>
      </section>
    </>
  );
}