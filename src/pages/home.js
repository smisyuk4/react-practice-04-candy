export const Home = () => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    alert('close window')
    tg.onClose();
  }
  return (<div>
          <main>home page</main>
          <button onClick={onClose}>Вийти</button>
    </div>)
};
