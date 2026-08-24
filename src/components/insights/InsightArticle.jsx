import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import articles from "../../data/articles";
import SEO from "../../components/SEO";
import { getArticleSEO } from "../../seo/articleSEO";

export default function InsightArticle() {
  const { slug } = useParams();

  const article = articles.find(
    (item) => item.slug === slug
  );

  /* =========================================================
     ARTICLE NOT FOUND
  ========================================================= */

  if (!article) {
    return (
      <>
        <SEO
          title="Article Not Found"
          description="The Kardengey Insights article you're looking for could not be found."
          canonical="https://kardengey.com/insights"
        />

        <section className="min-h-screen bg-[#050505] px-[6vw] py-40 text-white">
          <div className="mx-auto max-w-[1200px]">

            <p className="text-xs uppercase tracking-[0.4em] text-blue-500">
              Kardengey / Insights
            </p>

            <h1 className="mt-8 text-5xl font-black uppercase tracking-[-0.05em] md:text-7xl">
              Article not found.
            </h1>

            <Link
              to="/insights"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-neutral-400 transition-all hover:border-blue-500 hover:text-white"
            >
              ← Back to insights
            </Link>

          </div>
        </section>
      </>
    );
  }

  /* =========================================================
     ARTICLE SEO
  ========================================================= */

  const seo = getArticleSEO(article);

  return (
    <article className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        type={seo.type}
        publishedAt={seo.publishedAt}
        author={seo.author}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="px-[6vw] pb-20 pt-32 md:pb-28 md:pt-40">

        <div className="mx-auto max-w-[1200px]">

          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/insights"
              className="text-[9px] uppercase tracking-[0.35em] text-neutral-700 transition-colors hover:text-blue-500"
            >
              Kardengey / Insights
            </Link>
          </motion.div>

          {/* Category */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-16 text-[10px] uppercase tracking-[0.4em] text-blue-500"
          >
            {article.category}
          </motion.p>

          {/* Title */}

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]"
          >
            {article.title}
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-10 max-w-2xl text-base leading-8 text-neutral-500 md:text-xl"
          >
            {article.description}
          </motion.p>

          {/* Meta */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.25em] text-neutral-700"
          >
            <span>{article.date}</span>

            <span>/</span>

            <span>{article.read}</span>

            <span>/</span>

            <span>{article.author}</span>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          ARTICLE BODY
      ===================================================== */}

      <section className="border-t border-white/10 px-[6vw]">

        <div className="mx-auto grid max-w-[1200px] gap-16 py-20 md:grid-cols-[180px_1fr] md:py-28">

          {/* Side label */}

          <aside className="hidden md:block">

            <div className="sticky top-32">

              <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
                Reading
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-blue-500">
                {article.read}
              </p>

              <div className="mt-8 h-px w-12 bg-blue-500" />

              <p className="mt-6 text-[9px] uppercase leading-5 tracking-[0.2em] text-neutral-700">
                Strategy
                <br />
                Creativity
                <br />
                Technology
                <br />
                AI
              </p>

            </div>

          </aside>

          {/* Content */}

          <div className="max-w-3xl">

            {article.content.map((block, index) => {

              /* =================================================
                 HEADING
              ================================================= */

              if (block.type === "heading") {
                return (
                  <motion.h2
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{ duration: 0.7 }}
                    className="mb-7 mt-16 text-3xl font-bold uppercase leading-tight tracking-[-0.04em] text-white md:text-4xl"
                  >
                    {block.text}
                  </motion.h2>
                );
              }

              /* =================================================
                 QUOTE
              ================================================= */

              if (block.type === "quote") {
                return (
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{ duration: 0.7 }}
                    className="my-12 border-l-2 border-blue-500 py-2 pl-6 text-xl font-medium leading-8 text-neutral-300 md:text-2xl md:leading-9"
                  >
                    “{block.text}”
                  </motion.blockquote>
                );
              }

              /* =================================================
                 PARAGRAPH
              ================================================= */

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{ duration: 0.7 }}
                  className="mb-7 text-base leading-8 text-neutral-400 md:text-lg md:leading-9"
                >
                  {block.text}
                </motion.p>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          ARTICLE FOOTER
      ===================================================== */}

      <section className="border-t border-white/10 px-[6vw] py-20 md:py-28">

        <div className="mx-auto max-w-[1200px]">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-[9px] uppercase tracking-[0.35em] text-blue-500">
                Continue exploring
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em] text-white md:text-5xl">
                More ideas.
                <br />
                More movement.
              </h2>

            </div>

            <Link
              to="/insights"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-neutral-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              Back to insights

              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
            </Link>

          </div>

        </div>

      </section>

    </article>
  );
}