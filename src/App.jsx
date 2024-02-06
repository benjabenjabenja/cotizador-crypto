import styled from "@emotion/styled";
import ImagenCrypto from "./assets/imagen-criptos.png";
import "./App.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";

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
const H1 = styled.h1`
    font-family: "Lato", sans-serif;
    color: #fff;
	text-align: center;
	font-weight: 700;
	margin-top: 50px;
	margin-bottom: 50px;
	font-size: 54px;
	&::after{
		content: '';
		width: 100px;
		height: 5px;
		border-radius: 5px;
		background-color: #66A2FE;
		display: block;
		margin: 10px auto 0;
	}
	@media (min-width: 992px){
		margin-top: 80px;
	}
`;

function App() {
	const [stateCoinsSelection, setStateCoins] = useState({});
	const [viewCoins, setViewCoins] = useState({});
	useEffect(
		() => {
			isValid(stateCoinsSelection) && (
				function(){
					const cotizador = async () => {
						const { stateCoins, stateCryptos } = stateCoinsSelection
						const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${stateCryptos}&tsyms=${stateCoins}`;
						const res = await fetch(url);
						const json = (await res.json()).DISPLAY[stateCryptos][stateCoins];
						setViewCoins(json);
					}
					cotizador();
				}()
			);
		}, [stateCoinsSelection]
	);
	
	const isValid = value => value && Object.keys(value).length > 0;

    return (
        <Contenedor>
			<Img src={ImagenCrypto} alt="Imagen crypto coins" />
			<div>
				<H1>Contizar cryptos</H1>
				<Form
					setStateCoins={setStateCoins}
				/>
			</div>
        </Contenedor>
    );
}

export default App;
