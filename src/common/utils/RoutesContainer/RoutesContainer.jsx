import Helmet from "react-helmet";

export default function RoutesContainer({ title, element }) {
  return (
    <>
      <Helmet>
        <title>{title} | Veterinaria</title>
      </Helmet>
      {element}
    </>
  );
}
