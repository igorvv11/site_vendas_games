import { useState } from "react";

import Section from "../Section";
import * as S from "./styles";

import play from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";
import close from "../../assets/images/fechar.png";

type Props = {
  defaultCover: string;
  name: string;
  items: GalleryItem[];
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    type: "image",
    url: "",
    isVisible: false,
  });

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === "image") return zoom;
    return play;
  };

  const CloseModal = () => {
    setModal({ isVisible: false, type: "image", url: "" });
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId.split("&")[0]}`;
    }
    return url;
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url });
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? "visible" : ""}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="imagem fechar" onClick={CloseModal} />
          </header>
          {modal.type === "image" ? (
            <img src={modal.url} alt={name} />
          ) : (
            <iframe
              src={getYoutubeEmbedUrl(modal.url)}
              title="YouTube video player"
              frameBorder="0"
              width={"100%"}
              height={"480px"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={CloseModal}></div>
      </S.Modal>
    </>
  );
};

export default Gallery;
