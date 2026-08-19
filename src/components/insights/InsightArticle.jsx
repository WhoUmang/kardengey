import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import articles from "../../data/articles";

export default function InsightArticle() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="min-h-screen bg-[#050505] px-[6vw] py-40 text-white">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-500">
            Kardengey / Insights
          </p>

          <h1 className="mt-8 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.07em]">
            Article
            <br />
            <span className="text-neutral-600">
              not found.
            </span>
          </h1>

          <Link
            to="/insights"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.2em] text-neutral-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to insights
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="relative overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          ARTICLE HEADER
      ===================================================== */}

      <section className="px-[6vw] pb-24 pt-32 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-[1400px]">

          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/insights"
              className="group inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-neutral-700 transition-colors duration-300 hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              Kardengey / Insights
            </Link>
          </motion.div>

          {/* Category */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-20 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-500">
              {article.number} — {article.category}
            </span>
          </motion.div>

          {/* Title */}

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-[1250px] text-[clamp(3.2rem,7vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]"
          >
            {article.title}
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-10 max-w-2xl text-base leading-8 text-neutral-500 md:text-xl md:leading-9"
          >
            {article.description}
          </motion.p>

          {/* Meta */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.25em] text-neutral-700"
          >
            <span>{article.date}</span>

            <span>/</span>

            <span>{article.read}</span>

            <span>/</span>

            <span>{article.author || "Kardengey"}</span>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          ARTICLE BODY
      ===================================================== */}

      <section className="border-t border-white/10 px-[6vw]">
        <div className="mx-auto grid max-w-[1200px] gap-16 py-20 md:grid-cols-[180px_1fr] md:py-28">

          {/* Sidebar */}

          <aside className="hidden md:block">
            <div className="sticky top-32">

              <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-700">
                Reading
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-blue-500">
                {article.read}
              </p>

              <div className="mt-8 h-px w-12 bg-blue-500" />

              <p className="mt-6 text-[9px] uppercase leading-6 tracking-[0.2em] text-neutral-700">
                Marketing
                <br />
                Technology
                <br />
                AI
                <br />
                Growth
              </p>

            </div>
          </aside>

          {/* Main content */}

          <div className="max-w-3xl">

            {/* Opening marker */}

            <div className="mb-12 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.3em] text-blue-500">
                Start here
              </span>

              <span className="h-px w-16 bg-white/10" />
            </div>

            {article.content?.map((block, index) => {

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
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-7 mt-16 text-3xl font-bold uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-4xl"
                  >
                    {block.text}
                  </motion.h2>
                );
              }

              if (block.type === "quote") {
                return (
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{ duration: 0.7 }}
                    className="my-14 border-l-2 border-blue-500 py-2 pl-6 text-2xl font-medium leading-9 text-neutral-300 md:text-3xl md:leading-10"
                  >
                    {block.text}
                  </motion.blockquote>
                );
              }

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-7 text-base leading-8 text-neutral-400 md:text-lg md:leading-9"
                >
                  {block.text}
                </motion.p>
              );
            })}

            {/* End marker */}

            <div className="mt-20 flex items-center gap-4 border-t border-white/10 pt-8">
              <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-700">
                End of article
              </span>

              <span className="h-px flex-1 bg-white/10" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-blue-500">
                Kardengey
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTINUE READING
      ===================================================== */}

      <section className="border-t border-white/10 px-[6vw] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px]">

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-blue-500">
                Continue exploring
              </p>

              <h2 className="mt-5 max-w-xl text-[clamp(2.8rem,5vw,5rem)] font-black uppercase leading-[0.85] tracking-[-0.06em]">
                More ideas.
                <br />
                <span className="text-neutral-600">
                  More movement.
                </span>
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