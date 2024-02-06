/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const Contenedor = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Txt = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Price = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #28b151;
`;

const Open = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #a4dd20;`;

const Img = styled.img`
    width: 150px;
    height: 150px;
    margin: 0 auto;
`;


const ResponseDataCotizador = ({ viewCoins }) => {
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE, OPEN24HOUR } = viewCoins;

    return (
        <Contenedor>
            {
                viewCoins && (
                    <>  
                        <div className="width-50">
                            <Price>Precio: <span>{PRICE}</span></Price>
                            <Txt>Mas alto hoy: <span>{HIGHDAY}</span></Txt>
                            <Txt>Mas bajo hoy: <span>{LOWDAY}</span></Txt>
                            <Txt>Variacion ult. 24hs: <span>{CHANGEPCT24HOUR}</span></Txt>
                            <Txt>Ultima actualizacion:<span>{LASTUPDATE}</span></Txt>
                            <Open>Comenzo en : <span>{OPEN24HOUR}</span></Open>
                        </div>

                        <Img className="width-50" src={"https://cryptocompare.com"+IMAGEURL} alt="image crypto symbol" />
                    </>
                )
            }
        </Contenedor>
    );
};

export default ResponseDataCotizador;
