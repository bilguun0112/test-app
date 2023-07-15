export default function ResultTable({ data, show }: any) {
  if (show === false) {
    return (
      <div className="text-xl mt-8 text-center">
        Ачааны мэдээлэл олдсонгүй, та оруулсан кодоо шалгана уу
      </div>
    );
  }

  if (show === true) {
    return (
      <div className="border mt-8 rounded-lg border-gray-600 w-full md:w-1/2 mx-auto">
        <div className="py-3 ml-5 text-base">Ачааны мэдээлэл</div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border-t border-gray-600 shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-600">
                  <tbody className="divide-y divide-gray-600">
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Ачааны код
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.order_number}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Бүртгэсэн
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.registration_date}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Илгээгч
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.sender}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Хүлээн авагч
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.receiver}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Ачааны тэмдэглэл
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.cargo_note}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Тоо ширхэг
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.cargo_note}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Жин
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.cargo_weight}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Тооцоо
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.first_payment}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Тооцооны үлдэгдэл
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.last_payment}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Замд гарах
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.registration_date}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-600">
                      <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                        Монголд буух
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                        {data.registration_date}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
