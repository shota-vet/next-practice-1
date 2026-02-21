"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./WorksSlider.module.css";

export default function WorksSlider() {
  const images = [
    "/img/works/lamina.jpg",
    "/img/works/smoothiesta.jpg",
    "/img/works/web-conference.jpg",
  ];
  return (
    <div className={styles.sliderWrap}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        loop={true}
      >
        {images.map((src, i) => (
          <SwiperSlide key={src}>
            <img className={styles.image} src={src} alt={`制作実績 ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

{
  /* modules={[Navigation, Pagination]} navigation paginationは三つのプロパティ自体を渡している、これらがシングルオブジェクトに変換されてコンポーネントに渡される */
}
{
  /* <Swiper
  modules={[Navigation, Pagination]} // 機能ON
  navigation                         // 矢印表示
  pagination={{ clickable: true }}  // ドット表示
  loop={true}                        // 無限ループ
  speed={600}                        // 移動速度ms
  slidesPerView={1}                  // 同時表示数
  spaceBetween={20}                  // 余白
  centeredSlides                     // 中央寄せ
  onSlideChange={() => {}}           // スライド変化イベント
></Swiper> */
}
