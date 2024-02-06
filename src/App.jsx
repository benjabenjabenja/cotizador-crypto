import styled from "@emotion/styled";
import ImagenCrypto from "./assets/imagen-criptos.png";
import "./App.css";

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
	@media(min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;
const Img = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`;
/* const H1 = styled.h1`
    font-family: "Lato", sans-serif;
    color: #fff;
`; */

function App() {
    return (
        <Contenedor>
			<Img src={ImagenCrypto} alt="Imagen crypto coins" />
			
        </Contenedor>
    );
}

export default App;
