export default function SectionProduct() {
  return (
    <section className="nv-section-product" aria-labelledby="section-product-title">
      <h2 id="section-product-title">Designed for the future</h2>
      <picture className="picture-editor">
        <source media="(min-width: 1120px)" srcSet="/images/illustration-editor-desktop.svg" />
        <img src="/images/illustration-editor-mobile.svg" alt="" className="image-editor" />
      </picture>

      <article className="article-editor">
        <h3 className="title">Introducing an extensible editor</h3>
        <p className="text">
          Blogr features an exceedingly intuitive interface which lets you focus on one thing:
          creating content. The editor supports management of multiple blogs and allows easy
          manipulation of embeds such as images, videos, and Markdown. Extensibility with
          plugins and themes provide easy ways to add functionality or change the looks of a
          blog.
        </p>
      </article>

      <article className="article-content-management">
        <h3 className="title">Robust content management</h3>
        <p className="text">
          Flexible content management enables users to easily move through posts. Increase the
          usability of your blog by adding customized categories, sections, format, or flow.
          With this functionality, you’re in full control.
        </p>
      </article>

      <div className="image-phones-container">
        <img src="/images/illustration-phones.svg" alt="" className="image-phones" />
      </div>

      <article className="article-infrastructure">
        <h3 className="title">State of the Art Infrastructure</h3>
        <p className="text">
          With reliability and speed in mind, worldwide data centers provide the backbone for
          ultra-fast connectivity. This ensures your site will load instantly, no matter where
          your readers are, keeping your site competitive.
        </p>
      </article>

      <picture className="picture-laptop">
        <source media="(min-width: 1120px)" srcSet="/images/illustration-laptop-desktop.svg" />
        <img src="/images/illustration-laptop-mobile.svg" alt="" className="image-laptop" />
      </picture>

      <article className="article-open-source">
        <h3 className="title">Free, open, simple</h3>
        <p className="text">
          Blogr is a free and open source application backed by a large community of helpful
          developers. It supports features such as code syntax highlighting, RSS feeds, social
          media integration, third-party commenting tools, and works seamlessly with Google
          Analytics. The architecture is clean and is relatively easy to learn.
        </p>
      </article>

      <article className="article-tooling">
        <h3 className="title">Powerful tooling</h3>
        <p className="text">
          Batteries included. We built a simple and straightforward CLI tool that makes
          customization and deployment a breeze, but capable of producing even the most
          complicated sites.
        </p>
      </article>
    </section>
  );
}
