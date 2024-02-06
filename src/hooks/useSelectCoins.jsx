/* eslint-disable react-refresh/only-export-components */
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin: 15px 0;
`;
const Select = styled.select`
    width: 100%;
    padding: .5rem .7rem;
    border: none;
    border-radius: 5px;
    margin-bottom: .5rem;
`;

const useSelectCoins = (label, options) => {
    const SelectCoins = () => (
        <>
            <Label htmlFor="select-coins">{label}</Label>
            <Select id="select-coins">
                <option value="">--Seleccionar--</option>
                {
                    options && options.map(o => (<option key={o.id} value={o.id}>{o.text}</option>))
                }
            </Select>
        </>
    );
    return [SelectCoins]
}

export default useSelectCoins;
