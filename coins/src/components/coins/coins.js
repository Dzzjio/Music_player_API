import { useEffect } from "react";


const Coins = (props) => {

   useEffect(() => {

   }, [props])

  return (
    <div className="table">
      <div className="thead">
        <div>Name</div>
        <div>Price</div>
        <div>Change</div>
        <div>Icon</div>
        <div>24h Volume</div>
      </div>

      <div className="tbody">
        {props.data.map((item) => (
          <div key={item.uuid} className="row">
            <div>
              {item.name} - {item.symbol}
            </div>
            <div>{item.price} {props.currency === 'USD' ? '$' : '₾'}</div>
            <div style={{ color: item.change >= 0 ? "green" : "red" }}>
              {item.change}%
            </div>
            <div>
              <img alt={item.name} src={item.iconUrl} />
            </div>
            <div>{item["24hVolume"]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coins;
