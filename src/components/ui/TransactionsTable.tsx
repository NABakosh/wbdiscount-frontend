import "../../styles/ui/TransactionsTable.scss";

const TransactionsTable = () => {
  const transactions = [
    {
      id: "12345678",
      amount: "500 ₽",
      type: "Пополнение",
      date: "Сегодня в 12:00",
      description: "Успешный выкуп",
      redemptionId: "12345678",
    },
    {
      id: "12345679",
      amount: "500 ₽",
      type: "Вывод средств",
      date: "Сегодня в 12:00",
      description: "Вывод на карту",
      redemptionId: "",
    },
  ];

  return (
    <div className="transactions-table">
      <table className="table">
        <thead>
          <tr>
            <th style={{ color: "#475467", fontSize: 12, fontWeight: 500 }}>
              ID транзакции
            </th>
            <th style={{ color: "#475467", fontSize: 12, fontWeight: 500 }}>
              Сумма
            </th>
            <th style={{ color: "#475467", fontSize: 12, fontWeight: 500 }}>
              Тип
            </th>
            <th style={{ color: "#475467", fontSize: 12, fontWeight: 500 }}>
              Дата и время
            </th>
            <th style={{ color: "#475467", fontSize: 12, fontWeight: 500 }}>
              Описание
            </th>
            <th style={{ color: "#475467", fontSize: 12, fontWeight: 500 }}>
              ID выкупа
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.id}</td>
              <td style={{ color: "#0253FF" }}>{transaction.amount}</td>
              <td style={{ color: "#00891E" }}>{transaction.type}</td>
              <td style={{ color: "#F9FAFB" }}>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.redemptionId || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
