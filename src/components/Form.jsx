import styled from '@emotion/styled';
import useSelectCoins from '../hooks/useSelectCoins';
import { coins } from '../data/coins';
import { useEffect, useState } from 'react';

const InputSubmit = styled.input`
	background-color: #9499FF ;
	border: none;
	width: 100%;
	padding: 1rem;
	font-weight: 400;
	font-size: 20px;
	color: #fff;
	text-transform: uppercase;
	border-radius: 5px;
	transition: background-color ease-in .45s;
	margin-top: .5rem;
	&:hover {
		background-color: #7A7DFE;
		cursor: pointer;
	} 
`;

const Form = () => {
	const [cryptos, setCryptos] = useState([]);
	const [error, setError] = useState(false);

	const [stateCoins, SelectCoins] = useSelectCoins('Elegir moneda', coins);
	const [stateCryptos, SelectCryptos] = useSelectCoins('Elegir crypto', cryptos);

	useEffect(
        () => {
            const responce = async () => {
                const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`// `https://min-api.cryptocompare.com/data/v4/all/exchanges`;
                const get_api = await fetch(url);
				const response = await get_api.json();
				
				const cryptos = response.Data.map(data => {
					const obj = {
						id: data.CoinInfo.Name, text: data.CoinInfo.FullName
					}
					return obj;
				});
				setCryptos(cryptos);
            }
            responce();
        }, []
	);
	
	const handleSubmit = ev => {
		ev.preventDefault();
		if (!stateCoins || !stateCryptos) {
			setError(true);
			return;
		}

		console.log("passed")
	}

	return (
		<>
			{
				error && <p> Los campos son obligatorios</p>
			}
			<form onSubmit={handleSubmit}>
				<SelectCoins />
				
				<SelectCryptos />

				<InputSubmit type="submit" value={"Cotizar"} />
			</form>
		</>
    );
};

export default Form;
