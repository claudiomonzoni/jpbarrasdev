import { useEffect, useState } from "react";


export default function Fetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
 //aqui si queremos usar async debemos hacer una función const esperame = async () => { const resyltado = await fetch(imageUrl)}
 
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div>
      <img src={imageUrl} alt="Imagen de perrito aleatoria" />
    </div>
  );
}