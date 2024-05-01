export default function Clients(){
    return(
        <div className="mt-10">
        <div>
            <h3 className="text-emerald-700">Testimonials</h3>
        </div>
        <div>
            <h3 className="text-emerald-500 text-5xl font-semibold">What client says about us</h3>
        </div>
        <div className="text-left lg:grid grid-cols-3">
            <div  className="p-2 mx-2 mt-5 rounded-2xl bg-[#4d4d4d]">
                <div className="m-2">
                    <img src="/img/client1.png" alt="" />
                </div>
                <div>
                    <h4 className=" my-2">Love the simplicity</h4>
                    <p className="font-light">They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!</p>
                </div>
            </div>
            <div  className="p-2 mx-2 mt-5 rounded-2xl bg-[#4d4d4d]">
                <div className="m-2">
                    <img src="/img/client2.png" alt="" />
                </div>
                <div>
                    <h4 className="my-2">Excellent Design and Service</h4>
                    <p className="font-light text-left">Efficient, reliable, and results-oriented. Visually appealing website, improved online visibility. Highly recommended!</p>
                </div>
            </div>
            <div  className="p-2 mx-2 mt-5 rounded-2xl bg-[#4d4d4d]">
                <div className="m-2">
                    <img src="/img/client3.png" alt="" />
                </div>
                <div>
                    <h4 className="my-2">Efficient and Reliable</h4>
                    <p className="font-light">Best decision we made. Stunning website, exceptional support. Always available and prompt issue resolution. Hassle-free experience!</p>
                </div>
            </div>
        </div>
        </div>
    )
}