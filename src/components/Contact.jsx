const Contact = () => {
    return (
        <div id="Contact" className="Contact">
            <h1>Contact Me</h1>
            <div className="ContactmeContainer">
                <div className="iframeBox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28521.104268278163!2d88.42287534526356!3d26.676067514467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44234776be739%3A0xa8afd043c74cc84e!2sNayapara%2C%20Siliguri%2C%20West%20Bengal%20734004!5e0!3m2!1sen!2sin!4v1727126425743!5m2!1sen!2sin" width="1000" height="450" ></iframe>
                </div>
                <div className="inputBox">
                    <h3>Contact Form</h3>
                    <div className="inputText">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="textarea">
                        <textarea placeholder="Message" rows="5"></textarea>
                    </div>
                    <div className="btn">
                        <button><span><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#9a9f7a" d="M17.991 6.01L5.399 10.563l4.195 2.428l3.699-3.7a1 1 0 0 1 1.414 1.415l-3.7 3.7l2.43 4.194L17.99 6.01Zm.323-2.244c1.195-.433 2.353.725 1.92 1.92l-5.282 14.605c-.434 1.198-2.07 1.344-2.709.241l-3.217-5.558l-5.558-3.217c-1.103-.639-.957-2.275.241-2.709z"/></g></svg></span>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;