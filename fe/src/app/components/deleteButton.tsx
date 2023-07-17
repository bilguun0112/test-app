export default function DeleteButton({ id, onSuccess }: any) {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/delete/${id}`;
  async function handleClick() {
    try {
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow the error to handle it outside the function if needed.
    }
  }
  return (
    <button
      className="font-medium text-blue-600  hover:underline"
      onClick={handleClick}
    >
      Устгах
    </button>
  );
}
