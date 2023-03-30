import './App.css';
import QrComponent from "./components/QrComponent/QrComponent";
import qrCode from './image-qr-code.png';

function App() {
  return (
    <>
        <QrComponent qrCode={qrCode}></QrComponent>
    </>
  );
}

export default App;
