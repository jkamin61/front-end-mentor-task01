import {Component} from "react";

class QrComponent extends Component {
    render() {
        const {qrCode} = this.props;
        return (
            <div className={"qr-block"}>
                <img src={qrCode} className={"qr-block__image"} alt={"qr-code"} width={"280px"} height={"280px"}/>
                <h2 className={"qr-block__heading"}>Improve your front-end
                    skills by building projects</h2>
                <p className={"qr-block__text"}>Scan the QR code to visit Frontend
                    Mentor and take your coding skills to
                    the next level</p>
            </div>
        );
    }
}

export default QrComponent