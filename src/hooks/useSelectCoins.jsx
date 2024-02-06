/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 500;
    margin: .25rem 0;
`;
const Select = styled.select`
    width: 100%;
    padding: .5rem .7rem;
    border: none;
    border-radius: 5px;
    margin-bottom: .2rem;
    margin-top: .2rem;
`;

const useSelectCoins = (label, options) => {
    const [state, setState] = useState('');

    const SelectCoins = () => (
        <>
            <Label htmlFor="select-coins">{label}</Label>
            <Select id="select-coins" value={state} onChange={ev => setState(ev.target.value)}>
                <option value="">--Seleccionar--</option>
                {
                    options && options.map(o => (<option key={o.id} value={o.id}>{o.text}</option>))
                }
            </Select>
        </>
    );
    return [state, SelectCoins]
}

export default useSelectCoins;
