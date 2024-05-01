export default function Header(){
    return(
        <div className="mt-20 gap-2 text-left grid grid-cols-2 lg:grid-cols-4 content-center">
            <div>
                <h4 className="font-bold">WDM</h4>
                <div className="font-light">
                    <img src="/img/email.png" alt="" />
                    <h4>startup@gmail.com</h4>
                    <img src="/img/phone.png" alt="" />
                    <h4>+91 9846543210</h4>
                </div>
            </div>
            <div>
                <h4 className="font-bold">About</h4>
                <div className="font-light">
                    <h4>Home</h4>
                    <h4>Pricing</h4>
                    <h4>Company</h4>
                    <h4>Resource</h4>
                </div>
            </div>
            <div>
                <h4 className="font-bold">Features</h4>
                <div className="font-light">
                    <h4>Blog</h4>
                    <h4>Privacy Policy</h4>
                    <h4>Terms & Conditions</h4>
                </div>
            </div>
            <div>
                <h4 className="font-bold">Contact</h4>
                <div className="font-light">
                    <h4>Department</h4>
                    <h4>Media</h4>
                    <h4>Support</h4>
                </div>
            </div>
        </div>
    )
}