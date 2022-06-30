import React from "react";
import ContainerStart from "../components/base/ContainerStart";
import RoundCard from "../components/Card/RoundCard";
import ImageCarousel from "../components/carousel/ImageCarousel";
import ImageCarouselWithChild from "../components/carousel/ImageCarouselWithChild";
import PhotoCarousel from "../components/carousel/PhotoCarousel";
import dummyData from "../dummyData/data";
import ItemCollections from "./ItemCollections";

const Home = () => {
  const carouselData = [
    {
      img: "https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg",
    },
    {
      img: "https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg",
    },
    {
      img: "https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg",
    },
    {
      img: "https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg",
    },
  ];
  const photoData = [
    {
      imageUrl: "https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg",
    },
    {
      imageUrl: "https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg",
    },
    {
      imageUrl: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
    },
    {
      imageUrl: "https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg",
    },
    {
      imageUrl: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
    },
    {
      imageUrl: "https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg",
    },
    {
      imageUrl: "https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg",
    },
    {
      imageUrl: "https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg",
    },
  ];
  return (
    <>
      <ImageCarousel list={carouselData} />
      <ContainerStart>
        <PhotoCarousel photos={photoData} />
      </ContainerStart>
      <ContainerStart className="d-flex justify-content-center">
        <RoundCard />
      </ContainerStart>
      <ItemCollections data={dummyData} />
    </>
  );
};

export default Home;
