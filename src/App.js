// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;
const SALARY_AMOUNT = 1000;
const COURSE_PRICE = 800;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);
  const [payment, setPayment] = React.useState([]);
  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);
    setPayment([
      {
        name: "Зарплата",
        amount: SALARY_AMOUNT,
        type: "+"
      },
      ...payment
    ]);
  };
  const getMoney = () => {
    setBalance(balance + GET_MONEY);
    setPayment([
      {
        name: "Поповнення",
        amount: GET_MONEY,
        type: "+"
      },
      ...payment
    ]);
  };

  const getCourse = () => {
    setBalance(balance - COURSE_PRICE);
    setPayment([
      {
        name: "Покупка курсу",
        amount: COURSE_PRICE,
        type: "-"
      },
      ...payment
    ]);
  };

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом
  const LOGIN = "dmytro";
  const PASSWORD = "1234";
  const doLogin = () => {
    const login = prompt("Введіть логін");
    const password = prompt("Введіть пароль");
    if (login === LOGIN && password === PASSWORD) {
      alert("You  are Log In");
    } else {
    }
  };
  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція doLogin
      */}

      <Header name="POWER-IT BANK" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      <Balance balance={balance} />

      {/* Компонент меню з кнопками */}
      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Поповнити баланс",
            onClick: getMoney,
            img: "/icon/get.svg"
          },
          {
            name: "Отримати зарплату",
            onClick: getSalary,
            img: "/icon/apple.svg"
          },

          {
            name: "Купити курс",
            onClick: getCourse,
            img: "/icon/payment.svg"
          }
        ]}
      />
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      <Payment payment={[...payment]} />
    </Page>
  );
}
