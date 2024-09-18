import { Form } from 'formik'
import { styled, keyframes } from 'styled-components'
import { colors, fonts, screenSizesPx } from './theme'

interface HeadingProps {
  size?: string
  lineheight?: string
  margin?: string
  padding?: string
  spacing?: string
  align?: 'center' | 'left' | 'right' | 'justify' | 'initial' | 'inherit' | 'start' | 'end'
  weight?: number
  transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none'
}

export const H1 = styled.h1<HeadingProps>`
  font-size: ${({ size }) => size || '30px'};
  font-style: normal;
  line-height: ${({ lineheight }) => lineheight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align || 'left'};
  height: fit-content;
  color: ${({ color }) => color || '#000'};
  font-family: ${fonts.DelaGothicOne};
  text-transform: ${({ transform }) => transform || ''};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`

export const H2 = styled.h2<HeadingProps>`
  font-size: ${({ size }) => size || '27px'};
  font-style: normal;
  line-height: ${({ lineheight }) => lineheight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align || 'left'};
  height: fit-content;
  color: ${({ color }) => color || '#000'};
  font-family: ${fonts.LatoBold};
  text-transform: ${({ transform }) => transform || ''};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`

export const H3 = styled.h3<HeadingProps>`
  font-size: ${({ size }) => size || '25px'};
  font-style: normal;
  line-height: ${({ lineheight }) => lineheight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align || 'left'};
  height: fit-content;
  color: ${({ color }) => color || '#000'};
  font-family: ${fonts.LatoSemiBold};
  text-transform: ${({ transform }) => transform || ''};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`

export const H4 = styled.h4<HeadingProps>`
  font-size: ${({ size }) => size || '23px'};
  font-style: normal;
  line-height: ${({ lineheight }) => lineheight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align || 'left'};
  height: fit-content;
  color: ${({ color }) => color || '#000'};
  font-family: ${fonts.LatoSemiBold};
  text-transform: ${({ transform }) => transform || ''};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`

export const Body = styled.p<HeadingProps>`
  font-size: ${({ size }) => size || '20px'};
  font-style: normal;
  line-height: ${({ lineheight }) => lineheight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align || 'left'};
  height: fit-content;
  color: ${({ color }) => color || '#000'};
  font-family: ${fonts.LatoRegular};
  text-transform: ${({ transform }) => transform || ''};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`

export const P1 = styled.p<HeadingProps>`
  font-size: ${({ size }) => size || '18px'};
  font-style: normal;
  line-height: ${({ lineheight }) => lineheight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align || 'left'};
  height: fit-content;
  color: ${({ color }) => color || '#000'};
  font-family: ${fonts.LatoLight};
  text-transform: ${({ transform }) => transform || ''};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`

export const P2 = styled.p<HeadingProps>`
  font-size: ${({ size }) => size || '14px'};
  font-style: normal;
  line-height: ${({ lineheight }) => lineheight || 'normal'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color }) => color || '#000'};
  height: fit-content;
  font-family: ${fonts.LatoRegular};
  text-transform: ${({ transform }) => transform || ''};
  letter-spacing: ${({ spacing }) => spacing || 'normal'};
`

interface FlexProps {
  alignitems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | ''
  justifycontent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | ''
  gap?: string
  width?: string
  height?: string
  flexwrap?: string
  padding?: string
  margin?: string
  fontfamily?: string
  disabled?: boolean
  cursor?: string
  backgroundColor?: string
  borderRadius?: string
  flexDirection?: string
  zindex?: number
  position?: 'relative' | 'absolute'
}

export const FlexRow = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'row'};
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : 'center'};
  align-items: ${({ alignitems }) => (alignitems ? alignitems : 'center')};
  gap: ${({ gap }) => (gap ? gap : '')};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? flexwrap : '')};
  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ''};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
  z-index: ${({ zindex }) => zindex || ''};
  position: ${({ position }) => position || ''};
`
export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : 'center'};
  align-items: ${({ alignitems }) => (alignitems ? alignitems : 'center')};
  gap: ${({ gap }) => (gap ? gap : '')};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? flexwrap : '')};
  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ''};
  position: ${({ position }) => position || ''};
`

interface SVGWrapperProps {
  width?: string
  height?: string
  fill?: string
  stroke?: string
  cursor?: 'pointer' | 'not-allowed'
}

export const SVGWrapper = styled.div<SVGWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ cursor }) => cursor || ''};
  svg {
    width: ${({ width }) => width || 'fit-content'};
    height: ${({ height }) => height || 'fit-content'};
    path {
      fill: ${({ fill }) => fill || ''};
      stroke: ${({ stroke }) => stroke || ''};
    }
  }
`
export const SVGWrapperHighlight = styled(SVGWrapper)`
  &:hover svg path {
    transition: fill 0.3s ease;
    fill: ${colors.white};
  }
  &:hover svg circle {
    transition: fill 0.3s ease;
    fill: ${colors.primary};
  }
`

export const Divider = styled.div`
  background: var(--border_color, #efefef);
  height: 1px;
  width: 100%;
`
export const VDivider = styled.div`
  background: var(--border_color, #efefef);
  width: 1px;
  height: 100%;
`

export const PlanCountTag = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  padding: 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 3px;
  background: ${colors.primary};
  color: var(--white, var(--background-panels, #fff));
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: ${fonts.LatoRegular};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Status = styled.div<{ bg?; fcolor?; noBorder?; fSize?; width? }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: ${({ width }) => (width ? width : null)};
  color: ${({ fcolor }) => (fcolor ? fcolor : '#000')};
  white-space: nowrap;
  padding: 2px 10px;
  font-size: ${({ fSize }) => (fSize ? fSize : '12.8px')};
  line-height: 120%; /* 14.4px */
  border-radius: 12px;
  border: ${({ noBorder, bg }) =>
    noBorder ? `1px solid ${bg}` : '1px solid #0944FF'};
  background: ${({ bg }) => (bg ? bg : '#fff')};
  text-transform: capitalize;
`

export const StatusGrid = styled.div<{
  bg?
  fcolor?
  noBorder?
  fSize?
  width?
}>`
  display: grid;
  grid-template-columns: 1fr 40px;
  align-items: center;
  gap: 6px;
  width: ${({ width }) => (width ? width : null)};
  color: ${({ fcolor }) => (fcolor ? fcolor : '#000')};
  white-space: nowrap;
  padding: 2px 10px;
  font-size: ${({ fSize }) => (fSize ? fSize : '12.8px')};
  line-height: 120%; /* 14.4px */
  border-radius: 12px;
  border: ${({ noBorder, bg }) =>
    noBorder ? `1px solid ${bg}` : '1px solid #0944FF'};
  background: ${({ bg }) => (bg ? bg : '#fff')};
  text-transform: capitalize;
`

export const RecommendedTag = styled.div`
  display: flex;
  width: 190px;
  height: 23px;
  padding: 0px 10px;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 23px;
  background: var(--Primary-color-shade-2, #1e71ff);

  @media (max-width: ${screenSizesPx.tablet}) {
    width: 180px;
  }
`

export const LoadMoreButton = styled.button`
  display: flex;
  width: fit-content;
  height: 32px;
  padding: 6px 28px;
  margin: 0 auto 12px auto;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #1e71ff;
  text-align: center;
  font-family: ${fonts.LatoSemiBold};
  font-size: 12.8px;
  font-style: normal;
  border-radius: 8px;
  background: var(--light-color-light_blue, #e9f1ff);
  border: none;
  font-weight: 600;
  line-height: 19.2px; /* 150% */
  cursor: pointer;
  text-decoration: none;
  position: relative;
`
export const toolTipTheme = {
  padding: '5px 10px',
  fontWeight: 500,
  fontSize: '10px',
  backgroundColor: colors.primary,
}

const upAndRight = keyframes`
  0%, 100% {
    transform: translateY(0);
    filter: blur(0);
  }
  50% {
    transform: translate(10%, -40%); //right and top
    filter: blur(4px);
  }

`

const upAndLeft = keyframes`
  0%, 100% {
    transform: translate(0, 0);
    filter: blur(0);
  }
  50% {
    transform: translate(-20%, -20%); // left and top
    filter: blur(4px);
  }
`

export const AnimatedCoin = styled.img<{
  bottom?: string
  right?: string
  left?: string
  isUp?: boolean
}>`
  position: absolute;
  height: 150px;
  width: 150px;
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  animation: ${({ isUp }) => (isUp ? upAndLeft : upAndRight)} 6s ease-in-out
    infinite;
  opacity: 0.5;
`

export const GoldCoin = styled.img<{ bottom: string; left: string }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  animation: ${upAndLeft} 6s ease-in-out infinite;
`


export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  gap: 33px;

  label {
    color: black;
    font-size: 15px;
    font-style: normal;
    line-height: 22px;
    margin-bottom: 11px;
    /* font-family: ${fonts.LatoSemiBold}; */
  }

  input {
    font-size: 15px;
    font-style: normal;
    line-height: normal;
    /* font-family: ${fonts.LatoRegular}; */
    border: none;
    color: black;
    width: 100%;
    height: 100%;
    outline: none;
  }

  textarea {
    width: 100%;
    border: none;
    height: auto;
    outline: none;
    /* font-family: ${fonts.LatoRegular}; */
    min-height: 80px;
    max-height: 200px;
  }

  @media (max-width: ${screenSizesPx.tablet}) {
    margin-bottom: 70px;
  }
`