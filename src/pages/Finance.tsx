import "../styles/components/Finance.scss";
import search from "../assets/images/icons/searchHeader.svg";
import TransactionsTable from "../components/ui/TransactionsTable";

type Props = {};

function Finance({}: Props) {
  return (
    <div className="wrapper">
      <div className="finance">
        <p className="bread">Баланс / Финансы</p>
        <div className="container-order">
          <div className="finance__order">
            <strong className="finance__price">3 550 ₽</strong>
            <p className="finance__description">Доступно к выводу</p>
            <button className="finance__button">Заказать выплату</button>
          </div>
          <div className="finance__order">
            <strong className="finance__price">5 100₽ </strong>
            <p className="finance__description">На подтверждении</p>
          </div>
        </div>
        <div className="transactions">
          <div className="transactions__title">Транзакции:</div>
          <div className="transactions__changes">
            <ul className="transactions__menu">
              <li className="transactions__item">Все транзакции</li>
              <li className="transactions__item transactions__item-default">
                Пополнения
              </li>
              <li className="transactions__item">Выводы</li>
            </ul>
          </div>
          <div className="transactions__search">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="Введите ID выкупа"
              className="transactions__input"
            />
          </div>
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
}

export default Finance;
