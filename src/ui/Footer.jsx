export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Denis Hristov</p>
      <ul>
        <li><a href="#home">Начало</a></li>
        <li><a href="#about">За мен</a></li>
        <li><a href="#contacts">Контакти</a></li>
      </ul>
    </footer>
  );
}