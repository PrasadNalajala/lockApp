// Write your code here
import {useState} from 'react'
import {Container, Card, CustomImage, Heading, Button} from './styledComponents'

const Unlock = () => {
  const [locked, setLock] = useState(true)
  const changeLockStatus = () => {
    setLock(prev => !prev)
  }
  // console.log(locked)
  return (
    <Container>
      {locked ? (
        <Card>
          <CustomImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Heading>Your Device is Locked</Heading>
          <Button onClick={changeLockStatus}>Unlock</Button>
        </Card>
      ) : (
        <Card>
          <CustomImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Heading>Your Device is Unlocked</Heading>
          <Button onClick={changeLockStatus}>Lock</Button>
        </Card>
      )}
    </Container>
  )
}

export default Unlock
