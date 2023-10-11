import { JetBrains_Mono, Inter } from 'next/font/google'
const space = JetBrains_Mono({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {
    return (
        <div className="w-full px-16 py-6 justify-between items-center inline-flex">
            <p className={`text-white text-[3rem] font-extrabold uppercase  -tracking-wider ${inter.className}`}>
                <span>WEB</span>
                <span className="text-indigo-950">3</span>
                <span>HELP</span>
            </p>
            <div className={`justify-end items-center gap-10 flex ${space.className} text-[1.25rem]`}>
                <div className="text-white text-xl font-bold leading-loose">Explore</div>
                <div className="text-white text-xl font-bold leading-loose">About</div>
                <div className="text-white text-xl font-bold leading-loose">Contact us</div>
                <div className="px-10 py-2 bg-[#C9FF2E] justify-center items-center gap-2 flex">
                    <div className="text-indigo-950 text-xl font-medium leading-loose">Lodge Complaint</div>
                </div>
            </div>
        </div>
    )
}
export default Navbar