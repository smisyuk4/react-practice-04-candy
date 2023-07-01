  const tg = window.Telegram.WebApp;
export const Home = () => {

   const user = tg.initDataUnsafe?.user,

  const onClose = () => {
    alert('close window')
    tg.close();
  }
  return (<div>
          <main>home page</main>
          <p>Привіт {user}</p>
          <button onClick={onClose}>Вийти</button>
    </div>)
};
