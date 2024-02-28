'use client'

import Image from "next/image"
import styled from "styled-components"
import CardLayout from "../../src/components/CardLayout";

const GalleryLayout = ({thumbnails}) => {
  return (
    <CardLayout>
      <AutoHeightImageWrapper>
        {thumbnails.map((item, index) => {
          return (
            <Image src={item} key={index} priority={true} width={400} height={400} className="autoImage" alt={'thumbNail'} />
          );
        })}
      </AutoHeightImageWrapper>
    </CardLayout>
  );
};

export default GalleryLayout;

const AutoHeightImageWrapper = styled.section``;