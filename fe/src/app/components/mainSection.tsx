// import styles from "./styles/sectionOne.module.css";
export default function SectionOne() {
  return (
    <section className="bg-white">
      <div className="flex gap-10 items-center max-w-[1280px]  px-5 md:px-10 mx-auto py-10 text-black">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="https://res.cloudinary.com/dne57yfdi/image/upload/v1689849898/Documents-amico_galhmh.png"
            alt=""
            className="img-fluid w-[200px] h-[180px]"
          />
          <div className="text-[32px] text-semi-bold">
            Бичиг баримт бүрдүүлэлт
          </div>
          <div className="text-[16px]">
            Бүх төрлийн авто машин , хүнд машин механизм ,20тн/40т контейнер
            зуучлан тээвэрлэж , бичиг баримт, даатгал хурдан шуурхай хийнэ.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            className="img-fluid w-[200px] h-[180px]"
            src="https://res.cloudinary.com/dne57yfdi/image/upload/v1689849894/Container_ship-rafiki_cjftmg.png"
            alt=""
          />
          <div className="text-[32px] text-semi-bold">Газрын тээвэр</div>
          <div className="text-[16px]">
            Бид байгууллагдсан цагаасаа захиалгаар тээвэрлэлтийн үйл ажиллагааг
            тасралтгүй, найдвартай хийж байна.
          </div>
        </div>
      </div>
    </section>
  );
}
