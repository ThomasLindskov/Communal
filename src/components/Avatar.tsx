import styled from "styled-components";
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const ImgWrapper = styled.div<{ size: string; clickable?: boolean }>`
  filter: drop-shadow(${({ theme }) => theme.utils.dropShadow});
  box-sizing: border-box;
  border-radius: 50%;
  width: ${(props) => props.size};
  min-width: ${(props) => props.size};
  min-height: ${(props) => props.size};
  ${(props) => props.clickable && "cursor: pointer;"}
`;

const Avatar = ({
  imageUrl,
  altText,
  size,
  name,
  tooltipClasses,
  clickable,
  onClick,
}: {
  imageUrl: string | undefined;
  altText: string;
  size: string;
  tooltipClasses?: string
  name?: string;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => (
  <ImgWrapper size={size} clickable={clickable} onClick={onClick && onClick} className={tooltipClasses} data-text={name}>
    <Image src={imageUrl ? imageUrl : "/img/EricCartman.png"} alt={altText}/>
  </ImgWrapper>
);

export default Avatar;
