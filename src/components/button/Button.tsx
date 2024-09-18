import styled from 'styled-components'
import { fonts } from '../../styles/theme'
import SmallLoader from '../loaders/SmallLoader'

interface ButtonProps {
  text: string
  onClick?: any
  icon?: any
  textColor?: string
  backgroundColor?: string
  disabled?: boolean
  secondary?: boolean
  style?: React.CSSProperties
  type?: 'button' | 'submit' | 'reset'
  padding?: string
  loading?: boolean
  stopPropogation?: boolean
}

const Button = (props: ButtonProps) => {
  const {
    text,
    onClick,
    backgroundColor,
    textColor,
    disabled,
    secondary,
    style,
    icon,
    type = 'button',
    padding,
    loading,
    stopPropogation,
  } = props

  const handleClick = (e) => {
    if (onClick) onClick()
    if (stopPropogation) {
      e.stopPropagation()
    }
  }

  return (
    <ButtonContainer
      onClick={handleClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      disabled={disabled || loading}
      secondary={secondary?.toString()}
      style={style || {}}
      type={type}
      padding={padding}
      loading={loading?.toString()}
    >
      <p>{text}</p>
      {icon}
      {loading && <SmallLoader color={'#fff'} />}
    </ButtonContainer>
  )
}

export default Button

interface Props {
  backgroundColor?: string
  textColor?: string
  secondary?: string
  padding?: string
  loading?: string
  onClick?: any
}

const ButtonContainer = styled.button<Props>`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 7px;
  background: ${({ secondary }) => (secondary == 'true' ? '#fff' : '#1e71ff')};
  border: 1px solid
    ${({ secondary }) => (secondary == 'true' ? '#E9F1FF' : 'transparent')};
  display: flex;
  height: 44px;
  padding: ${({ padding }) => padding || '14px 30px'};
  gap: 7px;
  white-space: nowrap;
  position: relative;

  p {
    color: ${({ secondary }) => (secondary == 'true' ? '#000' : '#FFF')};
    text-align: right;
    font-family: ${fonts.LatoRegular};
    font-size: 16px;
    font-style: normal;
    line-height: 140%; /* 22.4px */
    text-transform: capitalize;
  }

  svg {
    path {
      stroke: #046ecb;
    }
  }

  &:hover {
    background: ${({ secondary }) =>
      secondary == 'true'
        ? '#fff'
        : 'linear-gradient(185deg, #0056f6 -54.76%, #8b82ff 94.32%)'};
    border: 1px solid
      ${({ secondary }) => (secondary == 'true' ? '#E5E7EB' : 'transparent')};
  }

  &:disabled {
    opacity: ${({ loading }) => (loading == 'true' ? '1' : '0.7;')};
    cursor: not-allowed;
  }
`
