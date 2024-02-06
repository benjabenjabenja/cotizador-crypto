/* eslint-disable react/prop-types */
const ResponseDataCotizador = ({ viewCoins }) => {
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE } = viewCoins
    return (
        <div>
            {
                viewCoins && (
                    <>
                        <p>Precio: <span>{PRICE}</span></p>
                        <p>Mas alto hoy: <span>{HIGHDAY}</span></p>
                        <p>Mas bajo hoy: <span>{LOWDAY}</span></p>
                        <p>Variacion ult. 24hs: <span>{CHANGEPCT24HOUR}</span></p>
                        <p>Ultima actualizacion:<span>{LASTUPDATE}</span></p>
                        
                        <img width={150} height={150} src={"https://cryptocompare.com"+IMAGEURL} alt="image crypto symbol" />
                    </>
                )
            }
        </div>
    );
};

export default ResponseDataCotizador;
