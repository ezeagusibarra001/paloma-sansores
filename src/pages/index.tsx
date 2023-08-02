import { Button, Card, Icon } from "mdc-ui";

export default function Home() {
  return (
    <>
      <div className="w-4">
        <Icon
          name="hamburger"
          color="red"
        />
      </div>
      <Button
        label="Hello World"
      />
      <Card 
        img='https://via.placeholder.com/150'
        title='Networker Digital: Habilidades Disruptivas'
        price={100}
        onClick={() => {}}
        label='Precio lanzamiento'
      />
    </>
  )
}
