import Button from "../../../elements/Button";
import TopTitle from "../../../elements/TopTitle";
import wallet from '../../../assets/wallet.png'
import { Link } from "react-router-dom";

export default function CompanyBonus() {
    return (
        <div className="flex items-start sm:items-center justify-between sm:py-14 py-8 sm:flex-nowrap flex-wrap">
            <TopTitle title="Company Bonuses" employees="7" />
            <div className="flex items-center gap-8 mt-4">
                <Link to="/user/profile/suggest">
                    <Button>
                        <i className="fas fa-solid fa-wallet"></i>
                        <span className="lg:block hidden">Suggest My Bonus</span>
                    </Button>
                </Link>
                <div className="sm:flex hidden justify-center items-start gap-4 border-b-[1px] border-b-black">
                    <img src={wallet} alt="wallet" width={40} height={40} />
                    <div>
                        <h3 className="text-[#7D7D83] capitalize md:text-lg text-[14px] opacity-80 mb-1">SaaS Supreme Total - Wallet</h3>
                        <h1 className="md:text-6xl text-[34px]">£1200.00</h1>
                        <h4 className="md:text-[36px] text-[24px] pb-3">0x22bD...BA4B</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
