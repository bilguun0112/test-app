export default function Page() {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto h-screen">
      <div className="flex gap-10 justify-center py-6">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/mongolia-flag-icon.png"
          alt=""
          className="h-48 w-96"
        />
        <div className="text-xl">
          Монгол улс дахь хаяг:
          <div>Улаанбаатар хот</div>
          <div>Сонгинохайрхан дүүрэг</div>
          <div>11-р хороо</div>
          <div>Гэрэлтжин ХХК</div>
          <div className="flex gap-4">
            <div>Утас:</div>
            <div>
              99273789
              <br />
              88081379
              <br />
              72553214
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-center py-6">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/south-korea-flag-icon.png"
          alt=""
          className="h-48 w-96"
        />
        <div className="text-xl">
          Солонгос улс дахь хаяг:
          <div>경기도</div>
          <div>용인시</div>
          <div>기흥구</div>
          <div>신갈동 42-41 103호</div>
          <div className="flex gap-4">
            <div>Утас:</div>
            <div>
              010-8008-2636
              <br />
              010-5825-4935
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
