import { FC, memo } from "react";

import * as S from "./index.styled";

type TProps = {
  scale?: number;
  className: string;
  mainClass: string;
};

export const BackgroundEffect: FC<TProps> = memo(
  ({ scale, className, mainClass }) => {
    return (
      <div className={className}>
        <S.Component $scale={scale! / 648} className={mainClass}>
          <S.Cyan />
          <S.Green />
          <S.Indigo />
          <S.Violet />
          <S.Blur />
        </S.Component>
      </div>
    );
  }
);
