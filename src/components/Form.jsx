import styled from '@emotion/styled';
import useSelectCoins from '../hooks/useSelectCoins';
import { coins } from '../data/coins';

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
	&:hover {
		background-color: #7A7DFE;
		cursor: pointer;
	} 
`;

const Form = () => {
	
	const [SelectCoins] = useSelectCoins('Elegir moneda', coins);

    return (
		<form>
			<SelectCoins />
            <InputSubmit type="submit" value={"Cotizar"} />
        </form>
    );
};

export default Form;
