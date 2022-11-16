import styled from "styled-components";
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const ImgWrapper = styled.div<{ size: string; clickable: boolean }>`
  filter: drop-shadow(${({ theme }) => theme.utils.dropShadow});
  box-sizing: border-box;
  border-radius: 50%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  ${(props) => props.clickable && "cursor: pointer;"}
`;

const Avatar = ({
  imageUrl,
  altText,
  size,
  clickable,
  onClick,
}: {
  imageUrl: string;
  altText: string;
  size: string;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => (
  <ImgWrapper size={size} clickable onClick={onClick && onClick}>
    <Image src={imageUrl} alt={altText} />
  </ImgWrapper>
);

export default Avatar;
