export const Home = () => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.onClose();
  }
  return (<div>
          <main>home page</main>;
          <button onClick={onClose}>Вийти</button>
    </div>)
};
