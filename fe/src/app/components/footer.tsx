import { ClockIcon } from "@heroicons/react/24/outline";
export default function Footer() {
  return (
    <footer className="bg-[#344877]">
      <div>
        <div className="flex flex-col lg:flex-row justify-between py-5 max-w-screen-xl mx-auto  text-white">
          <div className="flex gap-4 items-center mx-auto lg:ml-10">
            <img
              src="https://s3.amazonaws.com/images.wpr.com/flag-pages/svg/mn.svg"
              alt=""
              className="h-4"
            />
            <div>
              <div className="flex flex-col lg:flex-row items-center lg:gap-3 text-[20px]">
                <div>Даваа - Баасан :</div>
                <div>
                  <ClockIcon className="h-4 inline-block" /> 10:00 - 17:00
                </div>
              </div>
              <div>Монголын цагийн бүсчлэлээр</div>
            </div>
          </div>
          <div>
            <img
              src="./favicon.ico"
              alt="Logi"
              className="h-16 hidden tablets:block lg:block"
            />
          </div>
          <div className="flex gap-4 items-center mx-auto lg:mr-10">
            <img
              src="https://s3.amazonaws.com/images.wpr.com/flag-pages/svg/kr.svg"
              alt=""
              className="h-5"
            />
            <div>
              <div className="flex flex-col lg:flex-row items-center lg:gap-3 text-[20px]">
                <div> Даваа - Баасан : </div>
                <div>
                  <ClockIcon className="h-4 inline-block" /> 10:00 - 17:00
                </div>
              </div>
              <div>Солонгосын цагийн бүсчлэлээр</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
