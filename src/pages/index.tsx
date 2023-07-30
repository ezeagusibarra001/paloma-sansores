import { Button, Icon } from "mdc-ui";

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
    </>
  )
}
