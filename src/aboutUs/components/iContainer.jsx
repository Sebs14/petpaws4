export default function iContainer({ src, title }) {
  return (
    <article className="max-h-96 md:h-screen">
      <img
        class="pt-10 w-screen h-screen object-cover object-top"
        src={src}
        alt={title}
      ></img>
    </article>
  );
}
