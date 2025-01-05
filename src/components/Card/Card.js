import React from 'react'
import { Animated } from 'react-native'
import {
  bool,
  func,
  number,
  object,
  shape,
  string
} from 'prop-types'
import {
  colors,
  fonts,
  deviceWidth
} from '../../constants'
import { Next } from '../Icons'
import {
  CardContainer,
  CardWrapper,
  ColumnWrapper,
  IconRowWrapper,
  Paragraph,
  RowWrapper
} from './Card.styled'

const Card = ({
  cardBackground = colors.white,
  cardBorderRadius = 10,
  cardContent,
  cardDescriptionTextColor = colors.bay,
  cardDescriptionFontSize = 14,
  cardDescriptionFontFamily = '',
  cardIconColor = colors.blurple,
  cardNameTextColor = colors.blurple,
  cardNameFontSize = 18,
  cardNameFontFamily = '',
  hidden,
  item,
  isCardWithShadow = true,
  onPress,
  onPressIn,
  style
}) => {
  const styles = [style]
  if (hidden) {
    styles.push({ opacity: 0 })
  }

  return (
    <CardWrapper
      onPressIn={(evt) => onPressIn ? onPressIn(evt.nativeEvent.pageY) : {}}
      onPress={onPress}
      collapsable={false}
    >
      <Animated.View style={styles}>
        {cardContent !== undefined ? cardContent(item ? item.row() : {}) :

          <CardContainer
            backgroundColor={cardBackground}
            borderRadius={cardBorderRadius}
            elevation={isCardWithShadow ? 5 : 0}
            shadowOpacity={isCardWithShadow ? 0.1 : 0}
          >
            <RowWrapper>
              <IconRowWrapper width={deviceWidth / 2 - 28}>
                <ColumnWrapper>
                  <Paragraph
                    fontSize={cardNameFontSize}
                    fontFamily={cardNameFontFamily}
                    color={cardNameTextColor}
                  >
                    {item ? item.row().name : ''}
                  </Paragraph>
                  <Paragraph
                    fontSize={cardDescriptionFontSize}
                    fontFamily={cardDescriptionFontFamily}
                    color={cardDescriptionTextColor}
                  >
                    {item ? item.row().description : ''}
                  </Paragraph>
                </ColumnWrapper>
              </IconRowWrapper>
              <Next color={cardIconColor} />
            </RowWrapper>
          </CardContainer>
        }

      </Animated.View>
    </CardWrapper>
  )
}

// Card.defaultProps = {
//   cardBackground: colors.white,
//   cardBorderRadius: 10,
//   cardDescriptionTextColor: colors.bay,
//   cardDescriptionFontSize: 14,
//   cardDescriptionFontFamily: '',
//   cardIconColor: colors.blurple,
//   cardNameTextColor: colors.blurple,
//   cardNameFontSize: 18,
//   cardNameFontFamily: '',
//   isCardWithShadow: true
// }

Card.propTypes = {
  cardBackground: string,
  cardBorderRadius: number,
  cardContent: func,
  cardDescriptionTextColor: string,
  cardDescriptionFontSize: number,
  cardDescriptionFontFamily: string,
  cardIconColor: string,
  cardNameTextColor: string,
  cardNameFontSize: number,
  cardNameFontFamily: string,
  hidden: bool,
  item: object,
  isCardWithShadow: bool,
  onPress: func,
  onPressIn: func,
  style: shape({ string })
}

export default Card
