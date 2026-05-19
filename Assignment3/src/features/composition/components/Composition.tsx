import { FeatureContainer } from '../../../components/FeatureContainer'
import { Divider } from '../../../components/Divider'
import { Tag } from '../../../components/Tag'

export default function Composition() {
  return (
    <div>
      <FeatureContainer title="Full Stack Vibe Coding">
        <p>
            Composition is a powerful design pattern in React that allows you to build complex UIs by combining simpler components. It promotes reusability and separation of concerns, making your code more maintainable and scalable.
        </p>
        <Divider />
        <Tag label="React" color="blue" />
        <Tag label="Composition" color="red" />
        <Tag label="JSX" color="yellow" />
      </FeatureContainer>
    </div>
  )
}
