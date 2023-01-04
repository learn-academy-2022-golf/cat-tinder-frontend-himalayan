import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText
} from 'reactstrap'
const PigShow = ({pigs}) => {
  const { id } = useParams()

  console.log("PigShow id", id)

  const pig = pigs?.find(pig => pig.id === +id)

  return (
    <Card className="my-2">
      <CardImg
        alt="Card image cap"
        src={pig.image}
        style={{
          height: 180
        }}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          {`${pig.name}, ${pig.breed}`} 
        </CardTitle>
        <CardText>
          {pig.habits}
        </CardText>
      </CardBody>
    </Card>

  )
}

export default PigShow